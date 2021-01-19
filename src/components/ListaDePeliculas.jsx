import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  Link as RouterLink
} from "react-router-dom";

const styles = {
  container: {
    position: "absolute",
    top: "10em",
    width: "60em",
    left: "32em",
    maxHeight: "30em",
  },
  tableCell: {
    textDecoration: "underline",
    cursor: "pointer",
  }
};

const ListaDePeliculas = (props) => {
  const { classes } = props;

  // extraigo de las props el resultado de la busqueda
  const {results} = props.resultadoBusqueda;

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table stickyHeader size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Nombre:</TableCell>
            <TableCell align="left">Fecha de estreno: </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className= {classes.tableBody}>
        {results === undefined ? null : results.map((pelicula) => (
            <TableRow key={pelicula.title} to= {"/Pelicula/" + pelicula.id} component={RouterLink}>
              <TableCell className= {classes.tableCell} component="th" scope="row" >
                { pelicula.title }
              </TableCell>
              <TableCell align="left">{pelicula.release_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default withStyles(styles)(ListaDePeliculas);
