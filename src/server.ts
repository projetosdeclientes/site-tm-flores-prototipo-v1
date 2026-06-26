import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

type StaticAssetBinding = {
  fetch: (request: Request) => Promise<Response> | Response;
};

type ServerEnvWithAssets = {
  ASSETS?: StaticAssetBinding;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

const STATIC_ASSET_EXTENSION_PATTERN =
  /\.(?:js|mjs|css|png|jpe?g|gif|webp|avif|svg|ico|woff2?|ttf|otf|eot|map|json|txt|xml|webmanifest)$/i;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

function getStaticAssetBinding(env: unknown): StaticAssetBinding | undefined {
  if (!env || typeof env !== "object") return undefined;

  const assets = (env as ServerEnvWithAssets).ASSETS;
  return assets && typeof assets.fetch === "function" ? assets : undefined;
}

function isStaticAssetRequest(request: Request): boolean {
  const { pathname } = new URL(request.url);

  return pathname.startsWith("/assets/") || STATIC_ASSET_EXTENSION_PATTERN.test(pathname);
}

async function serveStaticAsset(request: Request, env: unknown): Promise<Response | undefined> {
  if (!isStaticAssetRequest(request)) return undefined;

  const assets = getStaticAssetBinding(env);
  if (!assets) {
    return new Response("Static asset not found", {
      status: 404,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  const response = await assets.fetch(request);
  const contentType = response.headers.get("content-type") ?? "";

  if (contentType.toLowerCase().includes("text/html")) {
    return new Response("Static asset not found", {
      status: 404,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  return response;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const staticAssetResponse = await serveStaticAsset(request, env);
      if (staticAssetResponse) return staticAssetResponse;

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
