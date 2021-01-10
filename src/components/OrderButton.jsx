import { Button, Grid } from '@material-ui/core';
import { Fastfood, LocalPharmacy } from '@material-ui/icons';
import React from 'react';
import styled from '@emotion/styled';

const ButtonDiv = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
`;

function OrderButton() {
  return (
    <ButtonDiv>
      <Grid container justify='space-evenly'>
        <Grid item xs={3} sm={6}>
          <Button
            variant='contained'
            color='primary'
            endIcon={<LocalPharmacy />}
          >
            Order More
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' color='secondary' endIcon={<Fastfood />}>
            Order
          </Button>
        </Grid>
      </Grid>
    </ButtonDiv>
  );
}

export default OrderButton;