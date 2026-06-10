# Convertido — Logística (Next.js)

Landing page da Convertido (Marketing para Logística & Transporte) recriada em **Next.js 14 (App Router) + TypeScript/TSX**, a partir da versão HTML original.

## Stack
- Next.js 14 (App Router)
- React 18 + TypeScript
- `next/font/google` (Sora + Plus Jakarta Sans)
- CSS global puro (`app/globals.css`) — mesmo design system roxo/escuro do original

## Estrutura
```
app/
  layout.tsx        # fontes, metadata, <html>/<body>
  page.tsx          # monta as seções
  globals.css       # todo o CSS do original
components/
  Nav, Hero, Manifesto, Methodology, Discovery,
  Services, ProcessBanner, Proof, CtaFinal, Footer
  ScrollEffects.tsx # porta os scripts: nav sticky, scroll-reveal e counters
```

## Rodar localmente
```bash
npm install
npm run dev
```
Acesse http://localhost:3000

## Build de produção
```bash
npm run build
npm run start
```

# convertido-lp-4s
