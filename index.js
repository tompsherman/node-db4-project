require('dotenv').config()

const server = require('./server.js')

const PORT = process.env.PORT || 6900

server.listen(PORT, ()=> {
    console.log(`\n***server smokin on port ${PORT}***`)
})