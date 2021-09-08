const express = require('express')
const app = express();
const mongoose = require('mongoose')

require('dotenv').config()

//conectando ao banco de dados MongoDB
mongoose.connect(process.env.DATABASE_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  // useCreateIndex: true,
  // useFindAndModify: false
})
const db = mongoose.connection
db.on('error', (err) => {
  console.log('Erro de conexão Banco de dados')
})
db.once('open', () => {
  console.log('Banco de dados conectado!')
})

app.get('/', (req, res) => {
  res.status(200).json({ message: "Olá mundo!" })
})

app.listen(process.env.APP_PORT_DEFAULT, (error) => {
  if (error) {
    console.log("Ocorreu um erro!");
  } else {
    console.log("Servidor Rodando")
  }
})