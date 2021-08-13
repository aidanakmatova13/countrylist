
const row = document.querySelector('.row')

fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
        data.forEach(item => {
            row.innerHTML += `<div class="col-3"> 
            <div class="flag-img">
            <img src="${item.flag}" alt="" class="img" > <br>
            </div>
           Cauntry Name: ${item.name} <br>
           Capital Name: ${item.capital}<br>
           Population: ${item.population}
             </div>`
        })
        console.log(data)
    })