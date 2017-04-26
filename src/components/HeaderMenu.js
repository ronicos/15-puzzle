import React from 'react';
import { IconButton, IconMenu, MenuItem } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { browserHistory } from 'react-router';

export const HeaderMenu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Game" onTouchTap={ () => browserHistory.push('/') } />
    <MenuItem primaryText="Scores" onTouchTap={ () => browserHistory.push('/scores') } />
  </IconMenu>
);
