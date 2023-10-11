# To-Do List

API em Node JS, Graph

Requisitos solicitados na API:
**Tabelas**
**Todo**: TodoId (Guid), Description, CreatedOn, CreatedBy(Guid), ModifiedOn, ModifiedBy(Guid), State (Open/Closed), ImageUrl

**User**: UserId (Guid), UserName, Password, CreatedOn, CreatedBy(Guid), ModifiedOn, ModifiedBy(Guid), LastLogin, ImageUrl, ProfileId (Guid)

**Profile**: ProfileId (Guid), Description, CreatedOn, CreatedBy(Guid), ModifiedOn, ModifiedBy(Guid)

- Aplicar o Clean Code (Obrigatório)
- Usar os princípios de SOLID (Obrigatório)
- Permitir o cadastro de um TodoItem (CRUD)
- Permitir o cadastro de um Usuário (CRUD)
- Permitir o Login para acessar o sistema
- Emitir um Token JWT após o login com os tipos de Perfil do usuário
- Implementar Log de erros para capturar falhas da aplicação
- Banco de dados - MongoDb

## Tecnologias

- Node JS
- Express
- GraphQL
- Mongoose
- Bcript e JWT para autenticação

## Inicializar o projeto

- inicializar serviço do MongoDB
- npm start (inicializando com o nodemon)

```

project-root/
  ├── node_modules/       (dependências do projeto)
  ├── src/
  │   ├── db/             (configurações do banco de dados)
  │   │   └── index.js
  │   ├── graphql/        (funções do GraphQL)
  |   │   ├── resolvers/     
  |   │   │   ├── profile.resolvers.js
  |   │   │   ├── todo.resolvers.js
  |   │   │   └── user.resolvers.js
  │   │   ├── mutations.js
  │   │   ├── queries.js
  │   │   ├── schema.js
  │   │   └── types.js
  │   ├── middlewares/    (middlewares da aplicação)
  │   │   └── auth.js
  │   ├── models/         (modelos de dados)
  │   │   ├── profile.js
  │   │   ├── todo.js
  │   │   └── user.js
  │   ├── utils/          (utilitários)
  │   │   ├── auth.js     (configuração token)
  │   │   ├── bcrypt.js   (configuração encriptação)
  │   │   ├── config.js   (configurações gerais)
  │   │   ├── constants.js  (constant messages)
  │   │   └── errorHandler.js  (lógica de tratamento de erros)
  ├── .gitignore           (lista de arquivos a serem ignorados pelo Git)
  ├── app.js               (arquivo principal da aplicação)
  ├── package.json         (configurações e dependências do projeto)
  └── README.md            (documentação do projeto)

```

## Referências
- [Build a Project with GraphQL, Node, MongoDB and React.js](https://www.youtube.com/playlist?list=PL55RiY5tL51rG1x02Yyj93iypUuHYXcB_)
- [GraphQL Nodejs, Mongodb & Json Web Tokenss | Blog API - Ejemplo Simple](https://www.youtube.com/watch?v=B7EzJOqpuw8)

<hr>
<div align="center">
Desenvolvido com ❤️ por VanessaVargas
</div>