import React from 'react';

import { Typography, Button } from '@mui/material';
import useStyles from './styles';

const Pagination = ({ page, setPage, totalPages }) => {
  const classes = useStyles();

  const handlePrev = () => {
    if (page !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (page !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (totalPages === 0) {
    return null;
  }

  return (
    <div className={classes.container}>
      <Button onClick={handlePrev} className={classes.button} variant="contained" color="error" type="button">Prev</Button>
      <Typography variant="h4" className={classes.pageNumber}>{page}</Typography>
      <Button onClick={handleNext} className={classes.button} variant="contained" color="error" type="button">Next</Button>
    </div>
  );
};

export default Pagination;
