import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { muiTheme } from './theme';
import { Navigator } from './components/Navigator';

injectTapEventPlugin();

const mountNode = document.getElementById('root');

const Index = () => (
  <MuiThemeProvider muiTheme={ muiTheme }>
    <Navigator />
  </MuiThemeProvider>
);

ReactDOM.render(<Index />, mountNode);

