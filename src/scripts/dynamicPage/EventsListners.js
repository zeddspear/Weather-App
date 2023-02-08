import { fetchAPI } from './APIhits';
import { resetValue } from '../helperFunctions/reset';


function addEvents(){
    
    let button = document.querySelector('.searchButton');


    button.addEventListener('click',(e)=>{

        if(e.target.parentElement.previousSibling.classList.contains('searchInput')){
        let input = document.querySelector('.searchInput').value;
        fetchAPI.fetchNupdate(input)
        resetValue(e.target.parentElement.previousSibling);

        }else{
            return;
       }
    });


}

export {addEvents};