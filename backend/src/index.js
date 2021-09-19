const express = require('express')
const app = express();

const mongoConection = require('./config/configDB')

require('dotenv').config()

mongoConection.mongoConection

app.get('/', (req, res) => {
  res.status(200).json({ message: "Olá mundo!" })
})

//call routerNames
const routeNames = require('./routes/routeNames')
app.use('/names', routeNames)



app.listen(process.env.APP_PORT_DEFAULT, (error) => {
  if (error) {
    console.log("Ocorreu um erro!");
  } else {
    console.log("Servidor Rodando")
  }
})