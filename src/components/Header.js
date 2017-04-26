import React from 'react';
import { observer } from 'mobx-react';
import { AppBar } from 'material-ui';

import { HeaderMenu } from './HeaderMenu';

export const Header = observer(() => (
  <AppBar
    title="15 Puzzle Game"
    iconElementLeft={<div></div>}
    iconElementRight={<HeaderMenu/>}
  />
));
