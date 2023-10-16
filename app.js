require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/db");
const { authenticate } = require('./src/middlewares/auth');

const schema = require("./src/graphql/schema");
const { graphqlHTTP } = require("express-graphql");
const { handleError } = require("./src/utils/errorHandler");
const { ERROR_MESSAGES } = require("./src/utils/constants");

const app = express();
const port = process.env.PORT;

connectDB();
//app.use(authenticate);

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Testando" });
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
});

app.listen(port, () => {
  console.log(`Escutando em http://localhost:${port}`);
});
