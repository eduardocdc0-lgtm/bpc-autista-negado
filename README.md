# bpc-autista-negado

Landing page de captação — BPC/LOAS para autismo (TEA) negado pelo INSS.
HTML/CSS/JS puro, sem build e sem dependências. Deploy: Netlify (`publish = "."`).

## Editar antes de publicar

Tudo que muda de escritório está em dois lugares do `index.html`:

1. `const CONFIG` (fim do arquivo) — WhatsApp, telefone e a mensagem padrão.
   Um único lugar atualiza os 11 CTAs, o rodapé e o `tel:`.
2. O domínio — procure por `bocchiadvogados.com.br` e troque em todas as ocorrências
   (canonical, og:url, og:image, twitter:image, os dois JSON-LD, `sitemap.xml` e `robots.txt`).

## Pendências

- `{{OAB}}` e `{{ANOS}}` ainda são placeholder. Busque por `{{` no `index.html`.
- `assets/conceito.webp` e `assets/escritorio.webp` são placeholder visual.
  Para trocar, substitua o arquivo mantendo o mesmo nome — o HTML não muda.

## Rodar local

    node static-server.js   # http://localhost:4599
