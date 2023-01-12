// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';
import {login} from './component/login.js';
import {home} from './component/home.js';
import{form} from './component/register.js'

const routes = {
    "/" :  home,             //objeto que contiene las direcciones
    "/login": login,
    "/register": form
}

export const surfing = (pathname, archivoNuevo = routes) => {
    const rootMain = document.querySelector('#containerMain');
    window.history.pushState({}, pathname, window.location.origin+pathname)

//en la sintaxis de replaceChildren "archivo nuevo(seccion)" es el  archivo que reemplazará la seccion actual y lo que está entre corchetes "archivoActual" es el nombre de la nueva sección

    rootMain.replaceChildren(archivoNuevo[pathname]())
}

window.addEventListener("DOMContentLoaded", () =>  surfing(window.location.pathname))
