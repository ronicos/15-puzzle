import React from 'react';
import { Router, browserHistory } from 'react-router';

import { App } from './App';
import { GameScreen } from './GameScreen';
import { HighScoresScreen } from './HighScoresScreen';

const routes = {
  path: '/',
  component: App,
  indexRoute: {
    component: GameScreen,
  },
  childRoutes: [{
    path: 'scores',
    component: HighScoresScreen,
  }]
};

export const Navigator = () =>
  <Router
    history={ browserHistory }
    routes={ routes }
  />;
