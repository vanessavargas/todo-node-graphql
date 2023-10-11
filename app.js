require("dotenv").config();
const express = require("express");
//const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./src/db");
const bcript = require("bcrypt");
const { authenticate } = require('./src/middlewares/auth');

const schema = require("./src/graphql/schema");
const { graphqlHTTP } = require("express-graphql");
const { handleError } = require("./src/utils/errorHandler");
const { ERROR_MESSAGES } = require("./src/utils/constants");

const app = express();
const port = 8000;

connectDB();
//app.use(authenticate);

app.use(express.json());
app.use(cors());


//app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Testando" });
});

app.post('/auth/register', async(req, res) => {
  const {userName, email, password, confirmPassword} = req.body
  if(!userName) {
    return res.status(422).json({msg: 'Usuário é obrigatório'});
  }
  if(!email) {
    return res.status(422).json({msg: 'E-mail é obrigatório'});
  }
  if(!password) {
    return res.status(422).json({msg: 'Senha é obrigatório'});
  }
  if(!confirmPassword) {
    return res.status(422).json({msg: 'Confirmar senha é obrigatório'});
  }
})

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
