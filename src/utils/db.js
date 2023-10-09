const mongoose = require("mongoose");
const config = require("../utils/config");

const connectDB = async () => {
  try {
    await mongoose.connect(config.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexão bem-sucedida ao MongoDB.");
  } catch (error) {
    console.error("Erro na conexão ao MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
