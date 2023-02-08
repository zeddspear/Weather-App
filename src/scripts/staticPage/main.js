import { createDom } from '../helperFunctions/Dom';


function renderMain(){

    // main div 
let main = createDom('div','main');

    // main left div
let mainLeft = createDom('div','mainLeft');

let statusSpan = createDom('span','statusSpan');
statusSpan.innerText = '';
mainLeft.appendChild(statusSpan);

let namePlace = createDom('h2','Place');
namePlace.innerText = '';
mainLeft.appendChild(namePlace);

let tempDiv = createDom('div','temperatureStatus');

let feelsLike = createDom('span','feelsLike');
feelsLike.innerText = '';
tempDiv.appendChild(feelsLike);

let todayHigh = createDom('span','todayHigh');
todayHigh.innerText = '';
tempDiv.appendChild(todayHigh);

let todayLow = createDom('span','todayLow');
todayLow.innerText = '';
tempDiv.appendChild(todayLow);

let Humidity = createDom('span','Humidity');
Humidity.innerText = '';
tempDiv.appendChild(Humidity);


mainLeft.appendChild(tempDiv);

let mainTemperature = createDom('h1','mainTemperature');
mainTemperature.innerText = '';

mainLeft.appendChild(mainTemperature);

main.appendChild(mainLeft);

// main right div
let mainRight = createDom('div','mainRight');

let gif = createDom('img','weatherImg');
gif.src = '';

mainRight.appendChild(gif);

main.appendChild(mainRight);

return main;


}

export {renderMain};