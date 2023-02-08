import { createHeader} from './Header';
import { renderMain } from './main';
import { renderfoot } from './footer';

function loadStatic(content){
    content.appendChild(createHeader());
    content.appendChild(renderMain());
    content.appendChild(renderfoot());

}

export {loadStatic};