# Sofia & Samuel — Convite Digital Interativo

Convite digital responsivo (mobile-first) para o aniversário conjunto de Sofia (9 anos) e Samuel (2 anos), com tema **Sagrada Família** em estilo infantil.

Stack: **React + Vite + TypeScript**, **Framer Motion**, **Lucide Icons**, CSS moderno. Sem backend, sem banco de dados — 100% front-end, pronto para deploy estático.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:5173`.

## Build de produção

```bash
npm run build
```

Gera a pasta `dist/`. Para pré-visualizar o build:

```bash
npm run preview
```

## Publicando na Vercel

1. Suba este projeto para um repositório no GitHub.
2. Na Vercel, clique em **New Project** e importe o repositório.
3. Framework preset: **Vite** (detectado automaticamente).
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. Pronto — cada push na branch principal gera um novo deploy automático.

## O que editar quando algo mudar

Tudo o que pode mudar (data, horário, endereço, telefone, tamanhos de roupa/calçado) está centralizado em:

```
src/config/eventConfig.ts
```

Edite esse arquivo e o site inteiro se atualiza — nenhum outro componente precisa ser tocado.

## Substituindo a ilustração da família

A ilustração usada atualmente é a arte que você enviou (já cortada para remover o texto que vinha embutido na imagem, já que o convite mostra esse texto em HTML separadamente — assim ele fica acessível, editável e com contraste garantido).

Para trocar por uma nova versão, basta substituir o arquivo mantendo o mesmo nome:

```
public/images/familia-ilustrada.webp
```

Recomendado: proporção retrato (aprox. 3:4 a 3:3.4), formato WebP, até ~500KB para carregamento rápido em 4G.

## Imagem de compartilhamento (WhatsApp / Open Graph)

```
public/og-convite.webp
```

Gerada a partir da mesma ilustração, em proporção 1200×630 (padrão Open Graph). Troque este arquivo se quiser uma imagem de preview diferente para quando o link for compartilhado no WhatsApp.

Depois de publicar na Vercel, atualize também a tag `og:url` em `index.html` com o domínio final (ex.: `https://sofia-e-samuel.vercel.app`).

## Música de fundo (opcional)

A estrutura já está pronta em `src/components/MusicControl`. Para ativar:

1. Adicione o arquivo de áudio em `public/audio/musica-fundo.mp3`.
2. Pronto — o botão "♫ Música" no canto inferior direito passa a funcionar. O áudio nunca toca automaticamente, apenas após o visitante tocar no botão.

## Checklist antes de compartilhar o link de verdade

- [ ] Conferir textos, nomes e idades
- [ ] Conferir data/horário em `eventConfig.ts`
- [ ] Testar o botão "Como chegar" (abre o Google Maps correto)
- [ ] Testar o botão "Confirmar presença" (abre o WhatsApp com a mensagem certa)
- [ ] Testar em um celular real (Android e iPhone, se possível)
- [ ] Conferir o preview do link ao colar no WhatsApp (pode levar alguns minutos para o cache do WhatsApp atualizar após mudanças)
- [ ] Substituir a ilustração definitiva da família, se ainda não tiver feito
