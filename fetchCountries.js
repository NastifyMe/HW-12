export default function fetchCountries(countryName) {
    const url = `https://restcountries.com/v2/name/${countryName}`;
  
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error('Country not found');
      }
      return response.json();
    });
  }