import React from 'react';
import {Switch , Route, Redirect} from "react-router-dom";
import BusquedaPorNombre from "./BusquedaPorNombre";
import BusquedaPorPersona from "./BusquedaPorPersona";
import BusquedaPorGenero from "./BusquedaPorGenero";
import Pelicula from "./Pelicula";
import Persona from "./Persona";

const Routes = () => {
    return ( 
        <Switch>
            <Route exact path={'/BusquedaPorNombre'} component= {BusquedaPorNombre} />
            <Route exact path={'/BusquedaPorPersona'} component= {BusquedaPorPersona} />
            <Route exact path={'/BusquedaPorGenero'} component= {BusquedaPorGenero} />
            <Route exact path={'/Pelicula/:id'} component= {Pelicula } />
            <Route exact path={'/Persona/:id'} component= {Persona} />
            <Route exact path="/"> {<Redirect to="/BusquedaPorNombre"/>}</Route>
        </Switch>
     );
}
 
export default Routes;