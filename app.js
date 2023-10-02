const express = require('express');
const app = express();
const schema = require('./src/schemas/schema');
const port = 3000;

app.use(express.json());

connectDB();

app.use('/graphql', graphqlHTTP({
   schema,
   graphiql: true
 })); 
 
app.listen(port, () => {
   console.log(`Escutando em http://localhost:${port}`);
});
