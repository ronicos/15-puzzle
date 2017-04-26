import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { store } from '../store';

export const BoardComposer = (Board) => observer(class extends Component {

  componentDidMount() {
    document.addEventListener("keydown", this.handleArrows, false);

    console.log('mounted');
  }

  componentWillUnmount() {
    document.removeEventListener("keyDown", this.handleArrows, false);
  }

  handleArrows(e) {
    store.shiftTo(e.key);
  }

  render() {
    const { board, shift, size } = store;

    const props = {
      shift,
      board,
      size
    };

    return <Board { ...props } />;
  }
});
