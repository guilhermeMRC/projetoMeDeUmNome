const express = require("express")
const app = express();



app.listen(4000, (error) => {
  if (error) {
    console.log("Ocorreu um erro!");
  } else {
    console.log("Servidor Rodando")
  }
})