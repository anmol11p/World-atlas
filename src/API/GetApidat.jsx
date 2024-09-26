import axios from "axios";

const api=axios.create({
    baseURL:"https://restcountries.com/v3.1"
})


// Http get method
export const getCountryData=()=>{

    return api.get("/all?fields=name,population,region,capital,flags")
}

// Http get method
export const getCountryIndData=(name)=>{

    return api.get(`/name/${name}?fullText=true&filds=name,population,region,subregion,capital,tld,currencies,language,borders,flags`)
}