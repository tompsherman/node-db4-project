const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
require('colors')

// const Router = require('./recipes/recipe-router')

const server=express()

server.use(express.json())

// server.use('/api/recipes')

module.exports = server