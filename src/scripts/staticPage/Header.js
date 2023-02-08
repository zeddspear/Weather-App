import { createDom } from '../helperFunctions/Dom';

function createHeader(){

    let header = createDom('header');

    let leftSide = createDom('div','leftSide');
    let logo = createDom('h3','logo');
    logo.innerText = 'Look for Weather';
    leftSide.appendChild(logo);

    let rightSide = createDom('div','rightSide');
    let searchInput = createDom('input','searchInput');
    rightSide.appendChild(searchInput);
    let buttonSearch = createDom('button','searchButton')
    let icon = createDom('i','fa','fa-search');
    buttonSearch.appendChild(icon);
    rightSide.appendChild(buttonSearch);

    header.appendChild(leftSide);
    header.appendChild(rightSide);


    return header;
}

export {createHeader};