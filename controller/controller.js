const express = require("express")
const nodemon = require("nodemon")
const app = express.Router()

app.use(express.json())
//rotas

module.exports = app