const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/schemas/schema');
const connectDB = require('./src/utils/db');
const { handleError } = require('./src/utils/errorHandler');
const { ERROR_MESSAGES } = require('./src/utils/constants');

const app = express();
const port = 3000;

app.use(express.json());

connectDB();

app.use('/graphql', graphqlHTTP({
   schema,
   graphiql: true
 })); 

 app.use((err, req, res, next) => {
   handleError(ERROR_MESSAGES.GENERIC_ERROR); // handle generic errors
 });
 
app.listen(port, () => {
   console.log(`Escutando em http://localhost:${port}`);
});
