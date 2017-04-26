import React from 'react';
import { RaisedButton } from 'material-ui';

export const PuzzleUnit = ({ col, colIndex, rowIndex, shift, size }) => (
  <div style={{ padding: '2px', width: size - 4 + 'px' }}>
    { col > 0 && <RaisedButton label={ col }
                               style={{ width: (size - 4 + 'px'), height: (size - 4 + 'px'), minWidth: (size - 4 + 'px') }}
                               labelStyle={{ margin: (size / 7 + 'px'), lineHeight: size - 4 + 'px', fontSize: '30px' }}
                               onTouchTap={ () => shift(rowIndex, colIndex) }/> }
  </div>
);
