import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let changeableUrl = url;

    if(country){
        changeableUrl = `${url}/countries/${country}`
    }

    try{
        const {data: {confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableUrl)
        return { confirmed,recovered,deaths,lastUpdate };
    }catch(error){
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try{
        const {data} = await axios.get(`${url}/daily`)

        const modifiedData = data.map((dailData)=>({
            confirmed: dailData.confirmed.total,
            deaths: dailData.deaths.total,
            date: dailData.reportDate
        }))

        return modifiedData;
    }catch(error){
        console.log(error)
    }
}

export const fetchCountries = async () => {
    try{
        const {data:{countries}} = await axios.get(`${url}/countries`)

        return countries.map((country)=>country.name);
    }catch(error){
        console.log(error)
    }
}

export const fetchCountryDetails = async (country) => {
    let url = "https://restcountries.eu/rest/v2/name";
    
    if(country){
        url = `${url}/${country}`
    }
    else{
        url = "https://restcountries.eu/rest/v2/name/India"
    }

    try{
        const {data} = await axios.get(url)
        console.log(data)
        return data[0];
    }catch(error){
        console.log(error)
    }
}