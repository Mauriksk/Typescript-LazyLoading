
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from './routes';
import logo from '../logo.svg'
import { Suspense } from 'react';



export const Navigation = () => {
    return (
      <Suspense fallback={ <span>...Loading</span> }>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        {
                          routes.map( rutas => (<li key={rutas.path}>
                            <NavLink to={rutas.to} className={ ({ isActive }) => isActive ? 'nav-active' : '' } >{ rutas.name }</NavLink>
                          </li>) )
                        }
                    </ul>
                </nav>


                <Routes>
                    {
                      routes.map( rutas => (
                        <Route key={rutas.path} path={rutas.path} element={ <rutas.Component /> } />
                      ))
                    }
                    <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
      </Suspense>
    )
}