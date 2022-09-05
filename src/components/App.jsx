import React, { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';

import { CssBaseline } from '@mui/material';
import useStyles from './styles';

import useAlan from './Alan';

import { NavBar, Movies, Profile, MovieInformation, Actors } from '.';

const App = () => {
  const classes = useStyles();

  const alanBtnContainer = useRef();
  useAlan();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/approved" element={<Movies />} />
          <Route exact path="/profile/:id" element={<Profile />} />
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
        </Routes>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
};

export default App;
