import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = {
  table: {}
  ,
  container: {
      position: "absolute",
      top: "10em",
      width: "60em",
      left: "32em"
  }
};

const ListaDePeliculas = (props) => {
  const { classes } = props;

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Resultados:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={"hola"}>
            <TableCell component="th" scope="row"></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default withStyles(styles)(ListaDePeliculas);
