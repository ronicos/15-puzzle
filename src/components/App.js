import React, { Component } from 'react';

import { Header } from './Header';

export class App extends Component {
  render() {

    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Header />

        { this.props.children }

      </div>
    );
  }
}
