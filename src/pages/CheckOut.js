import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Avatar, Grid } from '@material-ui/core';

import styled from '@emotion/styled';

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

function createData(order, rate, quantity, totalPrice) {
  return { order, rate, quantity, totalPrice };
}

// Data Array
const rows = [
  createData('Frozen yoghurt', 3, 2, 6.0),
  createData('Ice cream sandwich', 5, 2, 9.0),
  createData('Eclairs', 7, 2, 16.0),
  createData('Cupcake', 9, 2, 3.7),
  createData('Gingerbread', 11, 2, 16.0),
  createData('Pizza', 12, 2, 20.54),
];

export default function CustomizedTables() {
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
                      {row.quantity}
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
