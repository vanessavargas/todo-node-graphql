require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/db");
const { authenticate } = require('./src/middlewares/auth');

const schema = require("./src/graphql/schema");
const { graphqlHTTP } = require("express-graphql");
const { handleError } = require("./src/utils/errorHandler");
const { logError } = require("./src/utils/logger");
const { ERROR_MESSAGES } = require("./src/utils/constants");

const app = express();
const port = process.env.PORT;

connectDB();
app.use(express.json());
app.use(cors());

app.use(authenticate);

app.get("/", (req, res) => {
  res.send("Rota pública");
});

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
  })
);

app.use((err, req, res, next) => {
  handleError(ERROR_MESSAGES.GENERIC_ERROR);
  logError(error);
});

app.listen(port, () => {
  console.log(`Escutando em http://localhost:${port}`);
});
