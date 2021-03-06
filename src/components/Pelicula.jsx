import React, { useState, useEffect } from "react";
import { Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  paper: {
    position: "relative",
    top: "7em",
    margin: "auto",
    width: "60em",
    height: "35em",
    padding: "20px",
  },
  imagenPelicula: {
    width: "20em",
    height: "20em",
    borderRadius: "2px",
    position: "relative",
  },
  titulo: {
    position: "relative",
    top: "-11.5em",
    left: "13.2em",
    maxWidth: "300px",
  },
  descripcion: {
    position: "relative",
    top: "-16em",
    left: "20em",
    width: "28.5em",
    height: "11.25em",
  },
  fechaLanzamiento: {
    position: "relative",
    top: "-15.5em",
    left: "20em",
    maxWidth: "28.5em",
  },
  otrosDatos: {
    position: "relative",
    top: "-13.7em",
    left: "0.5em",
    padding: "3px 0",
  },
};

const Pelicula = (props) => {
  const { classes } = props;

  //Extraigo el ID mediante la URL
  const id = props.match.params.id;

  useEffect(() => {

    
    getMovie(id);
  }, []);

  const [pelicula, setPelicula] = useState({});

  //Ahora busco la pelicula en la API para renderizarla.
  const getMovie = async (id) => {
    let url =
      "https://api.themoviedb.org/3/movie/" +
      id +
      "?api_key=2bfde98323b35592c98968f6ac494fc7&language=en-US";
    let resultado = "";
    try {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => (resultado = data));
    } catch (error) {
      console.log(error);
    }
    setPelicula(resultado);
  };

  const {title, overview, popularity, release_date, vote_count, vote_average} = pelicula;
  const pathImagen = pelicula.poster_path;
  const urlImagen = "https://image.tmdb.org/t/p/w185" + pathImagen;

  return (
    <Paper className={classes.paper}>
      <img className={classes.imagenPelicula} src={urlImagen} alt=""></img>
      <Typography variant="h5" className={classes.titulo}>
        {title}
      </Typography>
      <Typography variant="body1" className={classes.descripcion}>
        {" "}
        {overview}
      </Typography>
      <Typography variant="body1" className={classes.fechaLanzamiento}>
        <strong>Release date:</strong> {release_date}
      </Typography>
      <Typography variant="body1" className={classes.otrosDatos}>
        <strong>Vote count : </strong> {vote_count}
      </Typography>
      <Typography variant="body1" className={classes.otrosDatos}>
        <strong>Vote average: </strong> {vote_average}
      </Typography>
      <Typography variant="body1" className={classes.otrosDatos}>
        <strong>Popularity: </strong>
        {popularity}
      </Typography>
    </Paper>
  );
};

export default withStyles(styles)(Pelicula);
