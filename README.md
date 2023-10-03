# To-Do List

Requisitos solicitados na API:
1 - Aplicar o Clean Code (Obrigatório)
2 - Usar os princípios de SOLID (Obrigatório)
3 - Permitir o cadastro de um TodoItem (CRUD)
4 - Permitir o cadastro de um Usuário (CRUD)
5 - Permitir o Login para acessar o sistema
6 - Emitir um Token JWT após o login coms os tipos de Perfil do usuário
7 - Implementar Log de erros para capturar falhas da aplicação
8 - Banco de dados - MongoDb 

## Tecnologias
- Node JS 
- Express
- GraphQL
- Mongoose

```

project-root/
  ├── node_modules/       (dependências do projeto)
  ├── src/                 
  │   ├── models/         (modelos de dados)
  │   │   └── todoModel.js  
  │   ├── resolvers/      (arquivos com funções de resolução GraphQL)
  │   │   └── resolvers.js  
  │   ├── schemas/        (esquemas GraphQL)
  │   │   └── schema.js   
  │   ├── utils/          (utilitários)
  │   │   ├── db.js       (conexão com o banco de dados)
  │   │   ├── constants.js  (constant messages)
  │   │   ├── config.js   (configurações)
  │   │   └── errorHandler.js  (lógica de tratamento de erros) 
  ├── app.js               (arquivo principal da aplicação) 
  ├── package.json         (configurações e dependências do projeto) 
  ├── README.md            (documentação do projeto)
  └── .gitignore           (lista de arquivos a serem ignorados pelo Git)


```

