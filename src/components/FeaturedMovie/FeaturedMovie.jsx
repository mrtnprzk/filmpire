import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import useStyles from './styles';

const FeaturedMovie = ({ movie }) => {
  const classes = useStyles();

  if (!movie) {
    return null;
  }

  return (
    <Box className={classes.featuredCardContainer}> {/* component={Link} to={`/movie/${movie.id}`} */}
      <Card className={classes.card} classes={{ root: classes.cardRoot }}>
        <CardMedia
          media="picture"
          alt={movie.title}
          image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          title={movie.title}
          className={classes.cardMedia}
        />
        {/* <Box padding="20px">
          <CardContent className={classes.cardContent} classes={{ root: classes.cardContentRoot }}>
            <Typography variant="h5" gutterBottom>{movie?.title}</Typography>
            <Typography variant="body2">{movie?.overview}</Typography>
          </CardContent>
        </Box> */}
      </Card>
    </Box>
  );
};

export default FeaturedMovie;
