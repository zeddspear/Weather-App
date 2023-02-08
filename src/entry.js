import { loadStatic } from './scripts/staticPage/loadStatic';
import { addEvents } from './scripts/dynamicPage/EventsListners';
import { fetchAPI } from './scripts/dynamicPage/APIhits';


import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import './styles/style.css';


let container = document.querySelector('.container');

// appending all dom elements in container tag
loadStatic(container);

// Load default
fetchAPI.fetchNupdate('Lahore');

// adding events
addEvents();




