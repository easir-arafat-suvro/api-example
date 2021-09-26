const countries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

countries()

const displayCountries = countries => {
    /* for (const country of countries) {
         console.log(country)
     } */
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country)
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>Country Name: ${country.name}</h3>
        <p>Capital: ${country.capital}</p>
        <button onClick="loadCountryByName('${country.name}')">Details</button>
        `;
        /*         const h3 = document.createElement('h3');
                h3.innerText = 'country: ' + country.name;
                div.append(h3);
        
                const p = document.createElement('p');
                p.innerText = 'Capital: ' + country.capital;
                div.append(p); */

        countriesDiv.appendChild(div);
    });
}

const loadCountryByName = name => {
    const url = `https://restcountries.com/v2/name/${name}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]));
}

const displayCountryDetail = country => {
    const displayDiv = document.getElementById('displayCountry');

    displayDiv.innerHTML = `
    <h4>Country: ${country.name}</h4>
    <p>Population: ${country.population}</p>
    <img width="200px" src="${country.flags[0]}">
    `;
}

