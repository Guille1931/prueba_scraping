const express = require('express')
const cheerio = require('cheerio')
const axios = require('axios')
const {join} = require('path')
const cors = require('cors')
const app = express()
const PORT = 4000
const URL = 'https://quotes.toscrape.com/'

app.use(cors())
app.use(express.static(join(__dirname, 'public')))


app.get('/scraper', (req, res) => {

    axios(URL)
        .then(response => {
            //console.log(response.data);
            const html = response.data;

            const $ = cheerio.load(html)

            const frases = []
            $('.quote', html).each(function () {
                const autor = $(this).find('small.author').text()
                // console.log(autor);
                const frase = $(this).find('span.text').text()
                // console.log(frase);
                frases.push({
                    autor,
                    frase
                })

            })

            
            res.json(frases)
            console.log(frases)
        })
        .catch(err => console.log(err))


})

app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`))