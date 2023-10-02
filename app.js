const express = require('express');
const app = express();
const port = 3000;
const schema = require('./schema');

app.use(express.json());

app.get("/graphql", (req, res) => {
  res.json({
    schema: schema,
  });
});

app.post("/graphql", (req, res) => {
  const body = req.body;

  const result = graphql(schema, body.query, {
    context: async () => ({
      db: await connectDB(),
    }),
  });

  res.json(result);
});
 
app.listen(port, () => {
   console.log(`Escutando em http://localhost:${port}`);
});
