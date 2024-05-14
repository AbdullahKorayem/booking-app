export default async function toGetAllCountries()  {
    try {
        const res = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images');
        const countriesData = await res.json(); 
        

        return countriesData;
    } catch (error) {
        console.error('Error fetching countries:', error);
        throw error; 
    }
}

