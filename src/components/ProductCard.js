import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import styled from '@emotion/styled';
import product_data from '../data/ProductData';
import { Grid } from '@material-ui/core';
import ProductShowMore from './ProductShowMore';

//Default Styles
const useStyles = makeStyles((theme) => ({
  cardwidth: {
    maxWidth: 245,
    minWidth: 245,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    marginTop: '30',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

// Header CSS
const Header = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
`;

export default function RecipeReviewCard() {
  const classes = useStyles();

  //Mapping through the data
  const pcard = product_data.map((item) => (
    <Grid item xs={6} sm={3} key={item.id}>
      <Card className={classes.cardwidth}>
        <CardHeader
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={item.product_title}
          subheader={item.product_subheader}
        />
        <CardMedia
          className={classes.media}
          component='div'
          image={item.thumb}
          src={item.thumb}
          title='Yogurt'
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {item.description}
          </Typography>
        </CardContent>
        <ProductShowMore product_method={item.product_method} />
      </Card>
    </Grid>
  ));

  return (
    <>
      <Header>
        <h1>Popular Items</h1>
      </Header>
      <Grid container spacing={3} justify='center'>
        {pcard}
      </Grid>
    </>
  );
}
