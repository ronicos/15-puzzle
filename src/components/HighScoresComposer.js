import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { store } from '../store';

export const HighScoresComposer = (HighScores) => observer(class extends Component {

  render() {
    const { completed, saveUser: save, sortedScores: highScores } = store;
    const onNameChange                  = (name) => store.userName = name;
    const props = { completed, save, onNameChange, highScores };

    return <HighScores { ...props } />;
  }
});
