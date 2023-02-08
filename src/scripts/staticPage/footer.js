import { createDom } from '../helperFunctions/Dom';

function renderfoot(){
    let footer = createDom('div','footer');

    let foot = createDom('span','creator');
    foot.innerHTML = 'Made by Zeddspear <a href="https://github.com/zeddspear" target="_blank"><i class="fab fa-github"></i></a>'

    footer.appendChild(foot);

    return footer;

}

export {renderfoot};