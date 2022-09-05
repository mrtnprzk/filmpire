import React from 'react';

import { Typography, Box } from '@mui/material';
import useStyles from './styles';

import { Movie } from '..';

const RatedCards = ({ title, data }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h5" gutterBottom>{title}</Typography>
      <Box display="flex" flexWrap="wrap">
        {data?.results.map((result, index) => (
          <Movie key={result.id} movie={result} i={index} />
        ))}
      </Box>
    </Box>
  );
};

export default RatedCards;
