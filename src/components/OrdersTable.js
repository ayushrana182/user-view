import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 20,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(Name, Quantity, Note) {
  return { Name, Quantity, Note };
}

const rows = [
  createData('Frozen yoghurt', 6, 'jdhuiuwdf' ),
  createData('Ice cream sandwich', 37, 'sjhfvuiy'),
  createData('Cupcake', 67, 'sdjsjdoiuv'),
  createData('Gingerbread', 49, 'kjsfiuuf'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  // var points = new Array(100);
  
  // for (var i = 0; i < 100; i++) {
  //     points[i] = i + 1; //This populates the array.  +1 is necessary because arrays are 0 index based and you want to store 1-100 in it, NOT 0-99.
  // }

  // for (var i = 0; i < points.length; i++) {
  //     console.log(points[i]); //This prints the values that you stored in the array
  // }
  const [count, setCount] = useState(0);
  return (
    <Container maxWidth="lg">
      <h1>Table {count+1}</h1>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Order Item</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Note&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">{row.Name}</StyledTableCell>
              <StyledTableCell align="right">{row.Quantity}</StyledTableCell>
              <StyledTableCell align="right">{row.Note}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}