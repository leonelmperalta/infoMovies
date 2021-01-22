import React, { Fragment, useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import generos from "./resources/genres";
import ListaDePeliculas from "./ListaDePeliculas";

const styles = {
  paper: {
    position: "absolute",
    top: "10em",
    left: "5vw",
    width: "18em",
    height: "12em",
    padding: "10px",
    display: "inline-block",
  },
  formControl: {
    position: "relative",
    minWidth: "15em",
    margin: "10px 10px",
  },
  button: {
    position: "relative",
    top: "2.5em",
    left: "9.5em",
    backgroundColor: "black",
    "&:hover": {
      background: "gray",
    },
  },
};

const BusquedaPorGenero = (props) => {
  const { classes } = props;

  const [genero, setGenero] = React.useState("");

  const [resultadoBusqueda, setResultadoBusqueda] = useState({});

  const handleChange = (event) => {
    setGenero(event.target.value);
  };

  const consultarAPI = async (id) => {
    let url = "https://api.themoviedb.org/3/discover/movie?api_key=2bfde98323b35592c98968f6ac494fc7&with_genres=" + id;
    let resultado = "";
    try {
      await fetch(url).then((response) => response.json()).then((data) => (resultado = data));
      setResultadoBusqueda(resultado);
    } catch (error) {
      console.log(error);
    }
  }

  function realizarBusqueda() {
    
    if(genero === ""){
      alert("no elegiste nada bro");
    }

    //llamo a la funcion para buscar el contenido en la api
    consultarAPI(genero);

    // reinicio la busqueda
    setGenero("");
  }

  return (
    <Fragment>
      <Paper elevation={3} className={classes.paper}>
        <form noValidate autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Genre: </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={genero}
              onChange={handleChange}
            >
              {generos.generos.map((genero) => (<MenuItem value={genero.id}>{genero.name}</MenuItem>))}
            </Select>
          </FormControl>
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
      <ListaDePeliculas resultadoBusqueda = {resultadoBusqueda} />
    </Fragment>
  );
};

export default withStyles(styles)(BusquedaPorGenero);
