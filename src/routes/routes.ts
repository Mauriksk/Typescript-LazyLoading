import { lazy, LazyExoticComponent } from 'react';
//import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { Nolazy } from '../01-lazyload/pages/Nolazy';


interface Route{
    to: string,
    path: string,
    Component: LazyExoticComponent<() => JSX.Element> | ( ()=> JSX.Element ),//De esta forma le digo que es de un tipo o del otro
    name: string,
}

//Con esa notacion en el import cambiamos el nombre del chunk
const LazyLayout = lazy(()=> import( /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'))


export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout'
    },
    {
        path: 'no-lazy',
        to: '/no-lazy',
        Component: Nolazy,
        name: 'No Lazy'
    },
]