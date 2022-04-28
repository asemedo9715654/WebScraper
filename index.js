const PORTA = 8888
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')


const app = express()

const url = 'https://www.bcv.cv/pt/Paginas/Homepage.aspx'


axios(url).then(response=>{
    console.log(response.html)
})


app.listen(PORTA,() => console.log(`SERVIDOR INICIALIZANDO NA PORTA ${PORTA}`))