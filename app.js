const express = require('express');
const bodyParser = require('body-parser');
const todoSchema = require('./src/schemas/todoSchema');
const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./src/utils/db');
const { handleError } = require('./src/utils/errorHandler');
const { ERROR_MESSAGES } = require('./src/utils/constants');

const app = express();
const port = 8000;

app.use(express.json());

connectDB();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema: todoSchema
}));

 app.use((err, req, res, next) => {
   handleError(ERROR_MESSAGES.GENERIC_ERROR); 
 });
 
app.listen(port, () => {
   console.log(`Escutando em http://localhost:${port}`);
});
