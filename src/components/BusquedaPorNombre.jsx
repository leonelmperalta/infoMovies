import React, { Fragment, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField, Paper, Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import ListaDePeliculas from "./ListaDePeliculas";

const styles = {
  paper: {
    position: "absolute",
    top: "10em",
    left: "5vw",
    width: "19em",
    height: "16em",
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
  alertNombre: {
    position: "absolute",
    bottom: "2em",
  },
  alertAnio: {
    position: "absolute",
    bottom: "2em",
    left: "16em",
  },
};

const BusquedaPorNombre = (props) => {
  const { classes } = props;

  //State para guardar la busqueda actual
  const [busqueda, setBusqueda] = useState({
    nombre: "",
    anio: "",
  });

  //State para guardar el resultado de la busqueda

  const [resultadoBusqueda, setResultadoBusqueda] = useState({});

  //State para renderizar error durante validacion

  const [errorNombre, setErrorNombre] = useState(false);

  const [errorAnio, setErrorAnio] = useState(false);

  //extraigo los valores nombre y anio

  const { nombre, anio } = busqueda;

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
      setErrorNombre(true);
      if (anio > 2021) {
        setErrorAnio(true);
        return;
      }
      return;
    }

    setErrorNombre(false);
    setErrorAnio(false);

    //llamo a la funcion para buscar el contenido en la api
    consultarAPI(nombre, anio);

    // reinicio la busqueda
    setBusqueda({ nombre: "", anio: "" });
  }

  //funcion para consultar la pelicula

  async function consultarAPI(nombre, anio) {
    let url =
      "https://api.themoviedb.org/3/search/movie?api_key=2bfde98323b35592c98968f6ac494fc7&language=en-US&query=" +
      nombre +
      "&page=1&include_adult=false";

    if (anio !== "") {
      url =
        "https://api.themoviedb.org/3/search/movie?api_key=2bfde98323b35592c98968f6ac494fc7&language=en-US&query=" +
        nombre +
        "&page=1&include_adult=false&year=" +
        anio;
    }

    try {
      let resultado = {};
      await fetch(url)
        .then((response) => response.json())
        .then((data) => (resultado = data));
      validarRenderPelicula(resultado);
    } catch (error) {
      console.log(error);
    }
  }

  //funcion para el caso en que la busqueda no devuelva ningun resultado.

  function validarRenderPelicula(resultado) {
    if (resultado.total_results === 0) {
      alert("No se encontro ninguna pelicula");
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
            label="Nombre de la pelicula"
            variant="outlined"
            value={nombre}
            onChange={handleChange}
          />
          <TextField
            className={classes.textfield}
            id="standard-basic"
            name="anio"
            label="Año de la pelicula"
            variant="outlined"
            type="number"
            value={anio}
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
      <ListaDePeliculas resultadoBusqueda={resultadoBusqueda} />
      {errorNombre && (
        <Alert severity="warning" className={classes.alertNombre}>
          Ingresa bien el nombre!
        </Alert>
      )}
      {errorAnio && (
        <Alert severity="warning" className={classes.alertAnio}>
          Ingresa bien el año!
        </Alert>
      )}
    </Fragment>
  );
};

export default withStyles(styles)(BusquedaPorNombre);
