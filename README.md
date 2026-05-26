# desafioattus-back

## Backend – Node/Express/TypeScript

Este repositório contém a API backend para o **Desafio Attus**.

## Links úteis
- **Repositório Backend**: [github.com/GustavoKoglin/desafioattus-back](https://github.com/GustavoKoglin/desafioattus-back)
- **Repositório Frontend**: [github.com/GustavoKoglin/desafioattus-front](https://github.com/GustavoKoglin/desafioattus-front)
- **API local**: [http://localhost:3000/health](http://localhost:3000/health) e [http://localhost:3000/api-docs](http://localhost:3000/api-docs)
- **API em produção**: [https://desafioattus-back.vercel.app/health](https://desafioattus-back.vercel.app/health) e [https://desafioattus-back.vercel.app/api-docs](https://desafioattus-back.vercel.app/api-docs)

### Tecnologias
- Node.js (v22) – Alpine base image
- Express
- TypeScript
- Docker (multi‑stage build)

### Como rodar localmente
```bash
# Instalar dependências
git clone https://github.com/GustavoKoglin/desafioattus-back.git
cd desafioattus-back
npm ci
```

#### Scripts de Ambiente
| Script | O que faz |
|--------|-----------|
| `npm run dev` | Inicia o servidor com **nodemon** (modo desenvolvimento). |
| `npm run build:dev` | Compila o TypeScript para ambiente de desenvolvimento. |
| `npm run build:stage` | Compila para **staging** (usa configuração de produção). |
| `npm run build:prod` | Compila para **produção**. |
| `npm run start:dev` | Executa o código compilado em modo desenvolvimento (`node dist/server.js`). |
| `npm run start:stage` | Executa o código compilado em modo **staging**. |
| `npm run start:prod` | Executa o código compilado em modo **produção**. |

#### Uso típico
```bash
# Desenvolvimento rápido
npm run dev

# Compilar e executar em produção (simulando Vercel)
npm run build:prod
npm run start:prod
```

### Docker
```bash
# Build da imagem
docker compose build
# Subir o container
docker compose up -d
```
A aplicação ficará disponível em `http://localhost:3000`.

### Variáveis de ambiente

Copie e cole este bloco no arquivo `.env` na raiz do backend:

```env
JWT_SECRET=change-me-to-a-strong-random-secret
PORT=3000
ADMIN_EMAIL=gustavo.koglin@teste.com
ADMIN_PASSWORD=Teste@teste123!
DATABASE_URL=
```

Esses valores são suficientes para subir a API localmente e para a execução demo do projeto.

| Nome | Descrição | Exemplo |
|------|-----------|---------|
| `JWT_SECRET` | Segredo usado para assinar tokens JWT | `change-me-to-a-strong-random-secret` |
| `PORT` | Porta onde a API será exposta (default 3000) | `3000` |
| `ADMIN_EMAIL` | Email do admin da aplicação | `gustavo.koglin@teste.com` |
| `ADMIN_PASSWORD` | Senha do admin da aplicação | `Teste@teste123!` |
| `DATABASE_URL` | Mantido por compatibilidade com o Docker Compose | vazio |

### Documentação completa
Veja o arquivo `DOCUMENTAÇÃO.MD` para detalhes sobre arquitetura, endpoints, fluxo de autenticação e diagramas.

### Endpoints
- **Health**: `GET /health` – verifica se a API está rodando.
- **Swagger UI**: `GET /api-docs` – visualiza a documentação OpenAPI.

### Testes
Não há suíte de testes unitários ou e2e configurada neste repositório no momento.

### Exemplo de ambiente
Se preferir, copie o arquivo `.env.example` para `.env` e ajuste apenas o que precisar.

---
