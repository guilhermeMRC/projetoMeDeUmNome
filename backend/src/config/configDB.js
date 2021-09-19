const mongoose = require('mongoose')
require('dotenv').config()

//conectando ao banco de dados MongoDB
const mongoConection = mongoose.connect(process.env.DATABASE_STRING, {
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

module.exports = mongoConection