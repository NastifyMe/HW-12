
import fetchCountries from './fetchCountries.js';
import { listCountry, countryCard } from './templates.js';



const inputCountry = document.querySelector('.inputCountry')
const container = document.querySelector('.container')


const debounceSearch = search

inputCountry.addEventListener('input', debounceSearch)

function search(event) {
    const countryName = event.target.value.trim()

    if (!countryName){
        container.innerHTML = ''
        return
    }

    fetchCountries(countryName)
        .then(countries => {
            container.innerHTML = ''

            if (countries.length > 10) {
                console.log('Зробіть запит більш специфічним')
                return
              }

            if (countries.length >= 2){
                container.innerHTML = listCountry(countries)
                return
            }

            container.innerHTML = countryCard(countries[0])
        })

        .catch(() => {
            error({
              text: 'Країну не знайдено',
            });
          });
    
}


function countryClick(event) {
    if (!event.target.classList.contains('country-item')) return

    const countryItem = event.target.dataset.name
    inputCountry.value = countryItem

    fetchCountries(countryItem).then(countries => {
        container.innerHTML = countryCard(countries[0])
    })
}

container.addEventListener('click', countryClick)