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
  imagenPersona: {
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
  biografia: {
    position: "relative",
    top: "-16em",
    left: "20em",
    width: "28.5em",
    height: "13.25em",
    overflowY: "scroll",
  },
  otrosDatos: {
    position: "relative",
    top: "-14.7em",
    left: "0.5em",
    padding: "3px 0",
  },
};

const Persona = (props) => {
  const { classes } = props;

  //Extraigo el ID mediante la URL
  const id = props.match.params.id;

  useEffect(() => {
    getPersona(id);
  }, []);

  const [persona, setPersona] = useState({});

  //Ahora busco la Persona en la API para renderizarla.
  const getPersona = async (id) => {
    let url = "https://api.themoviedb.org/3/person/"+ id + "?api_key=2bfde98323b35592c98968f6ac494fc7&language=en-US";
    let resultado = "";
    try {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => (resultado = data));
    } catch (error) {
      console.log(error);
    }
    setPersona(resultado);
  };

  const {name, biography, popularity, birthday, place_of_birth, gender} = persona;
  const pathImagen = persona.profile_path;
  const urlImagen = "https://image.tmdb.org/t/p/w185" + pathImagen;

  return (
    <Paper className={classes.paper}>
      <img className={classes.imagenPersona} src={urlImagen} alt= ""></img>
      <Typography variant="h5" className={classes.titulo}>
        {name}
      </Typography>
      <Typography variant="body1" className={classes.biografia}>
        {biography}
      </Typography>
      <Typography variant="body1" className={classes.otrosDatos}>
        <strong>Birthday:</strong> {birthday}
      </Typography>
      <Typography variant="body1" className={classes.otrosDatos}>
        <strong>Gender: </strong> {gender === 1 ? "Female" : gender === 2 ? "Male" : "N/D"}
      </Typography>
      <Typography variant="body1" className={classes.otrosDatos}>
        <strong>Place of Birth: </strong> {place_of_birth}
      </Typography>
      <Typography variant="body1" className={classes.otrosDatos}>
        <strong>Popularity: </strong>
        {popularity}
      </Typography>
    </Paper>
  );
};

export default withStyles(styles)(Persona);