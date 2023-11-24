# To-Do List Node and GraphQL API

<div align="center">

  ## 🛠️ Work in Progress

</div>

Node.js, GraphQL, and MongoDB API.

### Requirements for the API:

- Tables
  - **Todo**: TodoId (Guid), Description, CreatedOn, CreatedBy(Guid), ModifiedOn, ModifiedBy(Guid), State (Open/Closed), ImageUrl ✔️

  - **User**: UserId (Guid), UserName, Password, CreatedOn, CreatedBy(Guid), ModifiedOn, ModifiedBy(Guid), LastLogin, ImageUrl, ProfileId (Guid) ✔️

  - **Profile**: ProfileId (Guid), Description, CreatedOn, CreatedBy(Guid), ModifiedOn, ModifiedBy(Guid) ✔️

- Apply Clean Code (Mandatory) ✔️
- Use SOLID principles (Mandatory) ✔️
- Allow the registration of a TodoItem (CRUD) ✔️
- Allow the registration of a User (CRUD) ✔️
- Allow Login to access the system ✔️
- Issue a JWT Token after login ✔️
- Implement user profile types
- Implement error logging to capture application failures ✔️
- Database integration ✔️  

## Technologies

- Node JS
- Express
- GraphQL
- MongoDB
- Bcrypt and JWT for authentication

## Initializing the Project

- Start the MongoDB service
- npm start (initialize with nodemon)

## Front End of the Project
➪ [To-Do List - React JS](https://github.com/vanessavargas/todo-react)

```

project-root/      
  ├── src/
  │   ├── db/             
  │   │   ├── models/         (data models)
  │   │   │   ├── profile.js
  │   │   │   ├── todo.js
  │   │   │   └── user.js
  │   │   └── dbConfig.js     (database configurations)
  │   ├── graphql/        (GraphQL functions)
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
  │   ├── middlewares/    (application middlewares)
  │   │   └── auth.js
  │   └── utils/          (utilities)
  │       ├── authentication     
  │       │     └── auth.js     (token configuration)
  │       ├── error     
  |       │     ├── errorHandler.js  (error handling)
  │       │     └── logger.js    (error logging)
  │       ├── bcrypt.js   (encryption configuration)
  │       └── constants.js  (constant messages)
  ├── config.js   (general configurations)
  ├── .gitignore           (list of files to be ignored by Git)
  ├── app.js               (main application file)
  ├── package.json         (project configurations and dependencies)
  └── README.md            (project documentation)

```
<hr>
<div align="center">
Developed with ❤️ by VanessaVargas
</div>
