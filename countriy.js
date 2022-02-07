
const allCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then( data => displayCountries(data))
}

allCountries();

 const displayCountries = (countries) => {
     const container = document.getElementById('country')
    countries.forEach(country => {
        // console.log(country)
        const div = document.createElement('div')
        div.classList.add('style')
        div.innerHTML = `
        <h3>Name : ${country.name.common}</h3>
        <p> Capital : ${country.capital}</p>

        <button onclick="loadCountryByName('${country.name.common}')">Details</button>

        `;
        container.appendChild(div);
    })
 }

 const loadCountryByName = (name) => {

    const url = `https://restcountries.com/v3.1/name/${name}`

    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))

 }

 const displayCountryDetails = (country) => {
     console.log(country)
     const countryInfo = document.getElementById('country-info')
     countryInfo.innerHTML = `
     <h2>Country Details : </h2>
     <h3> Name : ${country.name.common}</h3>
     <p>Population : ${country.population}</p>
     <img width="250px" src="${country.flags.png}">
     `
 }