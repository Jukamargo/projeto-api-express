# Projeto API Express

API introdutória em Node.js e Express. A rota `GET /` retorna:

```json
{ "mensagem": "API REST funcionando!" }
```

## Executar localmente

Na raiz deste repositório:

```sh
npm ci
npm start
```

Acesse `http://localhost:3000`. A variável `PORT` permite alterar a porta.

## Deploy na Vercel

- Repositório: `Jukamargo/projeto-api-express`.
- Root Directory: raiz do repositório (`.`).
- Framework Preset: Express, definido em `vercel.json`.
- Instalação: `npm ci`, definida em `vercel.json`.
- Build Command e Output Directory: sem configuração personalizada; esta API não gera uma pasta `dist`.

O campo `main` do `package.json` aponta para `primeiro-projeto-express/server.js`,
que exporta a aplicação Express. A Vercel executa a aplicação como uma função;
`app.listen()` só é chamado ao executar o servidor diretamente.

Depois de enviar as alterações ao GitHub, aguarde o novo deploy da Vercel e
verifique se `https://projeto-api-express.vercel.app/` retorna o JSON acima.

Referência: [Express na Vercel](https://vercel.com/docs/frameworks/backend/express).
