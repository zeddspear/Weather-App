
import { kelvintoC } from '../helperFunctions/temperatureconvert';


const fetchAPI = function(){

let fetchNupdate = (input) =>{

    if(!input){
        alert('Please Enter Place.');
    }else{
        
    let temperature, feelsLike, tempMin, tempMax, humidity, weather, place;

// fetching data from weather api

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=6c369716e2310f5b04c697b39567e0e3`,{mode:'cors'})
.then(response=>response.json()
.then((response)=>{
  temperature =  response.main.temp;
  feelsLike = response.main.feels_like;
  tempMin = response.main.temp_min;
  tempMax = response.main.temp_max;
  humidity = response.main.humidity;
  weather = response.weather[0].main;
  place = response.name;
  
})).catch((error)=>{
alert(`${error} : Please Enter Valid Place`);
// if error occurs show default
location.reload();
});
    
setTimeout(()=>{
    renderonHTML(temperature,feelsLike,tempMin,tempMax,humidity,weather,place);
    gifUpload(weather);
},1000);

    
}}

// fetching gif and uploading it
async function gifUpload(input){
    try{
        let gifPromise = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=PlnMYC8rLMq5vizpSoGreXrQ4kSTKcTv&s=${input}`,{mode:'cors'});
        let gif = await gifPromise.json();
        document.querySelector('.weatherImg').src = gif.data.images.original.url;
    }catch(error){
        alert(`${error} and because of this There is no gif sorry`);
        
    }
  
}

function renderonHTML(temperature,feelsLike,tempMin,tempMax,humidity,weather,place){
    temperature = kelvintoC(temperature);
    feelsLike = kelvintoC(feelsLike);
    tempMin = kelvintoC(tempMin);
    tempMax = kelvintoC(tempMax);
    humidity = humidity+'%';
    
    document.querySelector('.mainTemperature').innerHTML = temperature;
    document.querySelector('.feelsLike').innerHTML = `Feels Like: ${feelsLike}`;
    document.querySelector('.todayHigh').innerHTML = `Today's High: ${tempMax}`;
    document.querySelector('.todayLow').innerHTML = `Today's Low: ${tempMin}`;
    document.querySelector('.Humidity').innerHTML = `Humidity: ${humidity}`;
    document.querySelector('.Place').innerHTML = place;
    document.querySelector('.statusSpan').innerHTML = weather;

}


return {fetchNupdate};

}();

export {fetchAPI};