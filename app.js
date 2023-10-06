const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const todoSchema = require('./src/schemas/todoSchema');
const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./src/utils/db');
const { handleError } = require('./src/utils/errorHandler');
const { ERROR_MESSAGES } = require('./src/utils/constants');

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

connectDB();

app.use(bodyParser.json());

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
