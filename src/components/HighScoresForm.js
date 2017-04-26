import React from 'react';
import {
  TextField,
  RaisedButton,
} from 'material-ui';

export const HighScoresForm = ({ onNameChange, save }) => (
  <div>
    <p>
      <label>Please enter your name</label>
    </p>
    <TextField onChange={ (_, value) => onNameChange(value) }/>
    <RaisedButton label="Save" primary={ true } onTouchTap={ () => save() }/>
  </div>
);
