# API To-Do List Node e GraphQL 

<div align="center">

  ## 🛠️ Projeto em Andamento

</div>

API em Node JS, GraphQL e MongoDB.

### Requisitos solicitados na API:

- Tabelas
    - **Todo**: TodoId (Guid), Description, CreatedOn, CreatedBy(Guid), ModifiedOn, ModifiedBy(Guid), State (Open/Closed), ImageUrl ✔️

    - **User**: UserId (Guid), UserName, Password, CreatedOn, CreatedBy(Guid), ModifiedOn, ModifiedBy(Guid), LastLogin, ImageUrl, ProfileId (Guid) ✔️

    - **Profile**: ProfileId (Guid), Description, CreatedOn, CreatedBy(Guid), ModifiedOn, ModifiedBy(Guid) ✔️

- Aplicar o Clean Code (Obrigatório) ✔️
- Usar os princípios de SOLID (Obrigatório) ✔️
- Permitir o cadastro de um TodoItem (CRUD) ✔️
- Permitir o cadastro de um Usuário (CRUD) ✔️
- Permitir o Login para acessar o sistema ✔️
- Emitir um Token JWT após o login ✔️
- Implementar tipos de Perfil do usuário
- Implementar Log de erros para capturar falhas da aplicação ✔️
- Banco de dados ✔️  

## Tecnologias

- Node JS
- Express
- GraphQL
- MongoDb
- Bcript e JWT para autenticação

## Inicializar o projeto

- inicializar serviço do MongoDB
- npm start (inicializando com o nodemon)

## Front End do projeto
➪ [To Do List - React JS](https://github.com/vanessavargas/todo-react)

```

project-root/      
  ├── src/
  │   ├── db/             
  │   │   ├── models/         (modelos de dados)
  │   │   │   ├── profile.js
  │   │   │   ├── todo.js
  │   │   │   └── user.js
  │   │   └── dbConfig.js     (configurações do banco de dados)
  │   ├── graphql/        (funções do GraphQL)
  |   │   ├── profile/     
  |   │   │   ├── profile.mutations.js
  |   │   │   ├── profile.queries.js
  |   │   │   ├── profile.resolver.js
  |   │   │   └── profile.type.js
  |   │   ├── todo/     
  |   │   │   ├── todo.mutations.js
  |   │   │   ├── todo.queries.js
  |   │   │   ├── todo.resolver.js
  |   │   │   └── todo.type.js
  |   │   ├── user/     
  |   │   │   ├── user.mutations.js
  |   │   │   ├── user.queries.js
  |   │   │   ├── user.resolver.js
  |   │   │   └── user.type.js
  │   │   └── schema.js
  │   ├── middlewares/    (middlewares da aplicação)
  │   │   └── auth.js
  │   └── utils/          (utilitários)
  │       ├── authentication     
  │       │     └── auth.js     (configuração token)
  │       ├── error     
  |       │     ├── errorHandler.js  (tratamento de erros)
  │       │     └── logger.js    (captura logs de erros)
  │       ├── bcrypt.js   (configuração encriptação)
  │       └── constants.js  (constant messages)
  ├── config.js   (configurações gerais)
  ├── .gitignore           (lista de arquivos a serem ignorados pelo Git)
  ├── app.js               (arquivo principal da aplicação)
  ├── package.json         (configurações e dependências do projeto)
  └── README.md            (documentação do projeto)

```
<hr>
<div align="center">
Desenvolvido com ❤️ por VanessaVargas
</div>
