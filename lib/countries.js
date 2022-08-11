import clm from 'country-locale-map'

export function getCountriesData() {
    const countryList = clm.getAllCountries();
    return countryList;
}


export function getAllCountryIds() {

    const countryList = clm.getAllCountries();


    return countryList.map((country) => {
        return {
            params: {
                id: country.alpha3 
            },
        }
    });
}

export function getCountryData(id) {
    return clm.getCountryByAlpha3(id);
}