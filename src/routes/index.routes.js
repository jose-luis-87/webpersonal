import {pages} from '../controllers'


let content = document.getElementById('root')

const router = (route) => {
    content.innerHTML = ''
    switch (route) {
        case '#/':{
            return content.appendChild(pages.home())};
        case '#/about':{
            return content.appendChild(pages.about())};
        case '#/portafolio':{
            return content.appendChild(pages.portafolio())};
        default:{
            return content.appendChild(pages.notFound())};
    }
}
export{ router }