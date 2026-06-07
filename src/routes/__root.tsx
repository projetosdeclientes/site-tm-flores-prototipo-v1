import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode, useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

import "../styles.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTilt3D } from "@/hooks/useTilt3D";
import { useIsMobile } from "@/hooks/use-mobile";




export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TM Flores e Plantas — Floricultura em Cotia & Vargem Grande Paulista" },
      { name: "description", content: "Buquês artesanais, plantas ornamentais e encomendas personalizadas no Shopping Central Park. Entrega de emoções desde 2024." },
      { property: "og:title", content: "TM Flores e Plantas — Floricultura em Cotia & Vargem Grande Paulista" },
      { name: "twitter:title", content: "TM Flores e Plantas — Floricultura em Cotia & Vargem Grande Paulista" },
      { property: "og:description", content: "Buquês artesanais, plantas ornamentais e encomendas personalizadas no Shopping Central Park. Entrega de emoções desde 2024." },
      { name: "twitter:description", content: "Buquês artesanais, plantas ornamentais e encomendas personalizadas no Shopping Central Park. Entrega de emoções desde 2024." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3cd005ec-be77-4880-be0d-800e1dcec7c3/id-preview-dd00529f--3b8784d1-3152-45ff-a404-d1c03ef349ef.lovable.app-1780794851451.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3cd005ec-be77-4880-be0d-800e1dcec7c3/id-preview-dd00529f--3b8784d1-3152-45ff-a404-d1c03ef349ef.lovable.app-1780794851451.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/assets/logo.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Open+Sans:wght@300;400;600;700&family=Great+Vibes&display=swap", rel: "stylesheet" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  useScrollReveal();
  useTilt3D();
  const isMobile = useIsMobile();

  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#FAF5EC] min-h-screen overflow-x-hidden">
        <div className="relative min-h-screen" id="root-container">
          {/* Background Orbs */}
          <div className="bg-orbs-container" aria-hidden="true">
            <div 
              className="orb orb-1 fixed top-[-150px] right-[-100px] bg-radial-gradient from-[rgba(149,106,192,0.11)] to-transparent blur-[55px]" 
              style={{ width: isMobile ? '260px' : '520px', height: isMobile ? '260px' : '520px', animation: 'orb-animation-1 9s ease-in-out infinite alternate' }}
            />
            <div 
              className="orb orb-2 fixed bottom-[8%] left-[-80px] bg-radial-gradient from-[rgba(196,168,220,0.09)] to-transparent blur-[55px]" 
              style={{ width: isMobile ? '230px' : '460px', height: isMobile ? '230px' : '460px', animation: 'orb-animation-2 12s ease-in-out infinite alternate', animationDelay: '-5s' }}
            />
            <div 
              className="orb orb-3 fixed top-[42%] right-[14%] bg-radial-gradient from-[rgba(201,160,64,0.06)] to-transparent blur-[55px]" 
              style={{ width: isMobile ? '170px' : '340px', height: isMobile ? '170px' : '340px', animation: 'orb-animation-3 15s ease-in-out infinite alternate', animationDelay: '-8s' }}
            />
          </div>
          
          <style>{`
            @keyframes orb-animation-1 {
              0% { transform: scale(1) translateY(0); }
              100% { transform: scale(1.18) translateY(-22px); }
            }
            @keyframes orb-animation-2 {
              0% { transform: scale(1) translateY(0); }
              100% { transform: scale(1.15) translateY(-15px); }
            }
            @keyframes orb-animation-3 {
              0% { transform: scale(1) translateY(0); }
              100% { transform: scale(1.12) translateY(-10px); }
            }
          `}</style>
          
          {children}
          <WhatsappFloating />
        </div>
        <Scripts />
      </body>



    </html>
  );
}

function WhatsappFloating() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="https://wa.me/5511918475136"
      target="_blank"
      rel="noopener"
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] z-[999] animate-in fade-in duration-500 hover:scale-110 transition-transform"
      style={{ animation: 'pulse-whatsapp 2.5s infinite' }}
    >
      <MessageCircle size={26} />
      <style>{`
        @keyframes pulse-whatsapp {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
      `}</style>
    </a>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}


