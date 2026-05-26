# desafioattus-back

## Backend – Node/Express/TypeScript

This repository contains the backend API for the **Desafio Attus** challenge.

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
npm run build   # compila TypeScript
npm run dev     # inicia o servidor (porta 3000)
```

### Docker
```bash
# Build da imagem
docker compose build
# Subir o container
Docker compose up -d
```

A aplicação ficará disponível em `http://localhost:3000`.

### Variáveis de ambiente
| Nome | Descrição | Exemplo |
|------|-----------|---------|
| `JSON_DATA_DIR` | Diretório onde os arquivos JSON de dados são armazenados | `./` |
| `JWT_SECRET` | Segredo usado para assinar tokens JWT | `super‑secret‑key` |
| `PORT` | Porta onde a API será exposta (default 3000) | `3000` |

### Documentação completa
Veja o arquivo `DOCUMENTAÇÃO.MD` para detalhes sobre arquitetura, endpoints, fluxo de autenticação e diagramas.

---
