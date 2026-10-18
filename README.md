# ⚛️ Atomos

API de **gestão de colaboradores**: cadastro de usuários do sistema, setores, cargos (ocupações), colaboradores (com endereço, coordenador e salário) e registros por colaborador, além de um painel administrativo gerado automaticamente com **AdminJS**.

## Modelo de dados

`User` · `Colaborator` (com coordenador e endereço) · `Occupation` · `Sector` · `Record` · `Address`

## Endpoints

| Método | Rota | Descrição |
| --- | --- | --- |
| `POST` | `/users` | Cria usuário (validação com Yup) |
| `POST` | `/sessions` | Login — retorna JWT |
| `POST` | `/occupations` | Cadastra cargo |
| `POST` | `/sectors` | Cadastra setor |
| `POST` | `/colaborators` | Cadastra colaborador |
| `POST` | `/records/:colaboratorId` | Cria registro para o colaborador |

O painel AdminJS é servido pelo mesmo servidor.

## Tecnologias

Node.js · Express · TypeScript · Prisma (SQLite) · AdminJS · JWT · bcrypt · Yup

## Como rodar

```bash
yarn install
npx prisma migrate dev     # cria o banco SQLite (prisma/dev.db)
yarn dev
```

Variáveis: `PORT` (porta do servidor) e o segredo do JWT definido em `src/config/Auth.ts`.

## Autor

Feito por [Amós Magalhães](https://github.com/amslimaa).
