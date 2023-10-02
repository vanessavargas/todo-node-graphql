const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/seu-banco-de-dados', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conexão bem-sucedida ao MongoDB.');
  } catch (error) {
    console.error('Erro na conexão ao MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
