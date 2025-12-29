export function listCountry(countries) {
    return `
    <ul>
        ${countries.map(country => `<li class="country-item" data-name="${country.name}">${country.name}</li>`).join('') }
    </ul>`
}

export function countryCard(country) {
    return `
    <h2 class="title">${country.name}</h2>
    <p class="capital"><b>Capital: </b>${country.capital}</p>
    <p class="population"><b>Population: </b>${country.population}</p>
    <p class="languages"><b>Languages: </b>
    ${country.languages.map(language => language.name).join(', ')}</p>
    <img class="flag" src="${country.flag}" alt="">`
}

