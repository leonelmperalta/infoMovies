import React, { Fragment, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField, Paper, Button } from "@material-ui/core";
import ListaDePersonas from "./ListaDePersonas";

const styles = {
  paper: {
    position: "absolute",
    top: "10em",
    left: "5vw",
    width: "19em",
    height: "12em",
    padding: "10px",
    display: "inline-block",
  },
  textfield: {
    margin: "10px",
  },
  button: {
    left: "10.5em",
    top: ".8em",
    backgroundColor: "black",
    "&:hover": {
      background: "gray",
    },
  },
};

const BusquedaPorPersona = (props) => {
  const { classes } = props;

  //State para guardar la busqueda actual
  const [busqueda, setBusqueda] = useState({
    nombre: "",
  });

  //State para guardar el resultado de la busqueda

  const [resultadoBusqueda, setResultadoBusqueda] = useState({});

  //extraigo el valor nombre

  const { nombre } = busqueda;

  //funcion para validar en tiempo real los form

  const handleChange = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  //Funcion para extraer el valor de la busqueda

  function realizarBusqueda() {
    //valido los datos

    if (nombre.trim() === null || nombre.trim() === "") {
      alert("Escribi bien el nombre sorete");
      return;
    }

    //llamo a la funcion para buscar el contenido en la api
    consultarAPI(nombre);

    // reinicio la busqueda
    setBusqueda({ nombre: "" });
  }

  //funcion para consultar la persona en la api

  async function consultarAPI(nombre) {
    let url =
      "https://api.themoviedb.org/3/search/person?api_key=2bfde98323b35592c98968f6ac494fc7&language=en-US&query=" +
       nombre  +
      "&page=1&include_adult=false";

    try {
      let resultado = {};
      await fetch(url)
        .then((response) => response.json())
        .then((data) => (resultado = data));
        console.log(resultado);
      validarRenderPersona(resultado);
    } catch (error) {
      console.log(error);
    }
  }

  //funcion para el caso en que la busqueda no devuelva ningun resultado.

  function validarRenderPersona(resultado) {
    if (resultado.total_results === 0) {
      alert("no encontre nadia");
    } else {
      setResultadoBusqueda(resultado);
    }
  }

  return (
    <Fragment>
      <Paper elevation={3} className={classes.paper}>
        <form noValidate autoComplete="off">
          <TextField
            className={classes.textfield}
            id="standard-basic"
            name="nombre"
            label="Nombre de la persona: "
            variant="outlined"
            value={nombre}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={realizarBusqueda}
          >
            Buscar
          </Button>
        </form>
      </Paper>
      <ListaDePersonas resultadoBusqueda={resultadoBusqueda} />
    </Fragment>
  );
};

export default withStyles(styles)(BusquedaPorPersona);
