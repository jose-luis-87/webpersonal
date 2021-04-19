import view from '../views/portafolio.html'

export default () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = view

    return divElement
}