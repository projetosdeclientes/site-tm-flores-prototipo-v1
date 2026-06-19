## Objetivo
Auditar o site que você está fazendo no Open Design comparando-o com o projeto atual (fonte da verdade), gerar relatório de diferenças e produzir um prompt de correção pronto para colar no Open Design.

## O que consigo fazer (e o que não)

**Consigo:**
- Acessar a URL pública do Open Design (`fetch_website` → markdown + HTML + screenshot por página).
- Usar Firecrawl (`map` + `scrape`) para descobrir todas as rotas do site e capturar cada uma como markdown/screenshot/branding.
- Comparar cada página com os arquivos do repo local (`src/routes/*`, `src/styles.css`, `src/pages/ProductPage.tsx`, etc.) e listar discrepâncias de: rotas faltantes, fontes, cores, layout, CTAs, animações visíveis em screenshot, conteúdo de produto.
- Gerar um relatório `.md` estruturado por página + um prompt único para o Open Design.

**Não consigo (limites reais):**
- Verificar animações JS em tempo real (carrossel hero crossfade, hover de card, marquee). Screenshot é estático — vou inferir pelo HTML/CSS extraído e marcar como "validar manualmente".
- Clicar em elementos que dependem de JS rodando (dropdown, modal, drawer mobile). Vou inspecionar o HTML inicial e marcar comportamentos como "verificar no preview do Open Design".
- Comparar tokens internos do Open Design (não exporta `@theme`); compararei o que renderiza na tela.

## Passos

1. **Você me envia:** URL pública do site Open Design.
2. **Descoberta de rotas:** rodo `firecrawl map` para listar todas as URLs. Comparo com as rotas do seu repo (`src/routes/index.tsx`, `buques.index.tsx`, `buques/$slug.tsx`, `plantas.index.tsx`, `plantas.$slug.tsx`, `encomendas.tsx`, `sobre.tsx`).
3. **Captura por página:** para cada rota relevante (home, cada categoria, 2-3 produtos individuais por categoria, encomendas, sobre), faço `fetch_website` em modo `markdown,screenshot` + um `firecrawl scrape` com `branding` para extrair cores/fontes/logo detectados.
4. **Comparação:** leio os arquivos correspondentes do repo local e monto tabela de diferenças por página (fontes, cores hex, presença de componentes-chave: navbar glass, marquee, hero crossfade, footer 4 colunas, botão WhatsApp 54px verde, "Você também pode gostar").
5. **Relatório:** gero `/mnt/documents/RELATORIO_DIFERENCAS_OPEN_DESIGN.md` com:
   - Resumo executivo (X rotas faltando, Y diferenças críticas).
   - Tabela página-por-página: o que está OK / o que está diferente / o que está faltando.
   - Screenshots lado-a-lado citados por arquivo.
6. **Prompt de correção:** gero `/mnt/documents/PROMPT_CORRECAO_OPEN_DESIGN.md` com instruções diretas, agrupadas por arquivo do repo a ser copiado (sem auditoria, sem teoria — só "copie este arquivo, ajuste esta cor, adicione esta rota").

## Entrega
Dois arquivos `.md` em `/mnt/documents/` prontos para você baixar e enviar ao Open Design, mais um resumo no chat com os 5 problemas mais críticos encontrados.

## Próximo passo
Me cole a URL pública do site Open Design e eu executo o plano.