
# 💻 Ticket Management System

Projeto simples de gerenciamento de tickets (desafio/estudo). O foco deste repositório foi o backend: uma API REST minimalista que manipula um banco JSON local (`db.json`) e expõe operações básicas sobre tickets.

## Contexto
- Objetivo principal: estudar e entender conceitos de Node.js puro (HTTP, rotas, middlewares e manipulação de arquivos) antes de migrar para frameworks como Express. Este projeto foi criado para aprender o funcionamento interno do backend sem dependências de frameworks.
- Projeto desenvolvido como exercício fullstack (ênfase no backend).


**Tecnologias utilizadas**
- Node.js (JavaScript)
- Persistência em arquivo JSON (`db.json`)
- Código organizado em controladores, rotas e middlewares

> Observação: veja `package.json` para dependências e scripts configurados.

## 📁 Estrutura de pastas

```
package.json
src/
  server.js
  controllers/
    tickets/
      create.js
      index.js
      remove.js
      update.js
      updateStatus.js
  database/
    database.js
    db.json
  middlewares/
    jsonHandler.js
    routeHandler.js
  routes/
    index.js
    tickets.js
  utils/
    extractQueryParams.js
    parseRoutPath.js
```

**Como rodar o projeto**

Pré-requisitos: Node.js (recomenda-se v14+).

No terminal, na raiz do projeto, executar:

```bash
# instalar as dependências
npm install

# utilizar o script do package.json
npm run dev
```

Depois de rodar, a API ficará disponível no endereço `http://localhost:3333`.

**Endpoints principais (exemplo)**
- `GET /tickets` — listar tickets
- `POST /tickets` — criar ticket
- `PUT /tickets/:id` — atualizar ticket
- `PATCH /tickets/:id/status` — atualizar status
- `DELETE /tickets/:id` — remover ticket

**Observações e próximos passos**
- O projeto é intencionalmente simples e focado em backend; não há front-end pronto aqui.
- Para produção: trocar `db.json` por um banco real, adicionar validação, testes e tratamento de erros mais robusto.
