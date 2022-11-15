const divfrase = document.getElementById('frase')

const URL = 'http://localhost:4000/scraper'

fetch(URL)
    .then(response => {
        return response.json();
    })
    .then( data => {        
        data.forEach( frase => {
            const texto = `<div><h2 class="hover">${frase.autor}</h2><h3 style="color:black"> "${frase.frase}"</h3></div>`
            divfrase.insertAdjacentHTML('beforeend', texto)
        });
    })
   
    .catch(err => console.log(err))