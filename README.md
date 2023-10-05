# To-Do List

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
- Emitir um Token JWT após o login coms os tipos de Perfil do usuário
- Implementar Log de erros para capturar falhas da aplicação
- Banco de dados - MongoDb

## Tecnologias

- Node JS
- Express
- GraphQL
- Mongoose

## Inicializar o projeto

- npm start (inicializando com o nodemon)

```

project-root/
  ├── node_modules/       (dependências do projeto)
  ├── src/
  │   ├── models/         (modelos de dados)
  │   │   ├── profile.js
  │   │   ├── todo.js
  │   │   └── user.js
  │   ├── resolvers/      (arquivos com funções de resolução GraphQL)
  │   │   └── resolvers.js
  │   ├── schemas/        (esquemas GraphQL)
  │   │   └── schema.js
  │   ├── utils/          (utilitários)
  │   │   ├── constants.js  (constant messages)
  │   │   ├── config.js   (configurações)
  │   │   ├── db.js       (conexão com o banco de dados)
  │   │   └── errorHandler.js  (lógica de tratamento de erros)
  ├── app.js               (arquivo principal da aplicação)
  ├── package.json         (configurações e dependências do projeto)
  ├── README.md            (documentação do projeto)
  └── .gitignore           (lista de arquivos a serem ignorados pelo Git)

```
