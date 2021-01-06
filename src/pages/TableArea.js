import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Avatar, CircularProgress, Grid, TextField } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { Update } from '@material-ui/icons';
import styled from '@emotion/styled';
import DropdownMenu from '../components/DropdownMenu';
import OrderButton from '../OrderButton';

const ContentDiv = styled.div`
  margin-top: 20px;
`;

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

// Black and white
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(order, rate, totalPrice) {
  return { order, rate, totalPrice };
}

// Data Array
const rows = [
  createData('Frozen yoghurt', 3, 6.0),
  createData('Ice cream sandwich', 5, 9.0),
  createData('Eclairs', 7, 16.0),
  createData('Cupcake', 9, 3.7),
  createData('Gingerbread', 11, 16.0),
  createData('Pizza', 12, 20.54),
];

export default function CustomizedTables() {
  // Spinner Function
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <ContentDiv>
      <Grid item container>
        {/* Gutter Left */}
        <Grid item xs={0} sm={2} />
        {/* All the Content inside this Grid   */}
        <Grid item xs={12} sm={8}>
          <TableContainer component={Paper}>
            <Table aria-label='customized table'>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Order</StyledTableCell>
                  <StyledTableCell align='center'>Quantity</StyledTableCell>
                  <StyledTableCell align='center'>Rate</StyledTableCell>
                  <StyledTableCell align='right'>Total Price</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.order}>
                    <StyledTableCell component='th' scope='row'>
                      <Avatar alt='Food' src='./assets/img/yogurt.jpg' />
                      {row.order}
                    </StyledTableCell>
                    {/* Quantity Container layed out in grids */}
                    <StyledTableCell align='center'>
                      <Grid container justify='space-evenly'>
                        <Grid item>
                          <DropdownMenu />
                        </Grid>

                        <Grid item>
                          <CircularProgress
                            variant='determinate'
                            size={15}
                            value={progress}
                          />
                        </Grid>
                        <Grid item>
                          <Update size={10} />
                        </Grid>
                      </Grid>
                      <TextField
                        placeholder='Place Your Instructions Here'
                        label='Instructions'
                        fullWidth
                      />
                    </StyledTableCell>

                    <StyledTableCell align='center' key={row.totalPrice}>
                      {row.totalPrice}
                    </StyledTableCell>

                    <StyledTableCell align='center' key={row.rate}>
                      {row.rate}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <OrderButton />
        </Grid>
        {/* Gutter Right */}
        <Grid item xs={0} sm={2} />
      </Grid>
    </ContentDiv>
  );
}
