
import Home from './home.controller'
import About from './about.controller'
import Portafolio from './portafolio.controller'
import NotFound from './404.controller'



const pages = {
    home: Home,
    about: About,
    portafolio: Portafolio,
    notFound: NotFound
}


export {pages}