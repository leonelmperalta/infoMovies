import React from 'react';
import {Switch , Route} from "react-router-dom";
import BusquedaPorNombre from "./BusquedaPorNombre";
import BusquedaPorPersona from "./BusquedaPorPersona";
import BusquedaAleatoria from "./BusquedaAleatoria";
import Home from "./Home";
import Pelicula from "./Pelicula";

const Routes = () => {
    return ( 
        <Switch>
            <Route exact path={'/BusquedaPorNombre'} component= {BusquedaPorNombre} />
            <Route exact path={'/BusquedaPorPersona'} component= {BusquedaPorPersona} />
            <Route exact path={'/BusquedaAleatoria'} component= {BusquedaAleatoria} />
            <Route exact path={'/Home'} component= {Home} />
            <Route exact path={'/Pelicula/:id'} component= {Pelicula } />

        </Switch>
     );
}
 
export default Routes;