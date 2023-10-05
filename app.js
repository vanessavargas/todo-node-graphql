const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/schemas/todoSchema');
const connectDB = require('./src/utils/db');
const { handleError } = require('./src/utils/errorHandler');
const { ERROR_MESSAGES } = require('./src/utils/constants');

const app = express();
const port = 3000;

app.use(express.json());

connectDB();

app.use('/graphql', graphqlHTTP({
   graphiql: true,
   schema: schema
 })); 

 app.use((err, req, res, next) => {
   handleError(ERROR_MESSAGES.GENERIC_ERROR); 
 });
 
app.listen(port, () => {
   console.log(`Escutando em http://localhost:${port}`);
});
