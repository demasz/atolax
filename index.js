import express from 'express' // type module
    //const express = require('express') // type commonjs (antigo)
   
    //inicializando o express - new
    const app = express()

app.get("/api/somar", (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
        //const - recebe o valor e não pode ser alterado (ex: "batata")
        //let - recebe o valor e pode ser alterado (ex:"0"; alterando para "1")
        //var - recebe o valor e pode ser alterado, mas é uma forma antiga de declarar variáveis (NÂO USAR)
    res.send({message: num1 + num2})
    })
    app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})