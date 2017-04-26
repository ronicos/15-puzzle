import React from 'react';
import { RaisedButton } from 'material-ui';
import { Row, Col } from 'react-flexbox-grid';
import { browserHistory } from 'react-router';
import { observer } from 'mobx-react';

import { COLORS } from '../theme';
import { store } from '../store';
import { Board } from './Board';
import { Statistics } from './Statistics';

export const GameScreen = observer(() => {

  if (store.completed) {
    browserHistory.replace('/scores');
  }

  return (
    <div style={{
      padding: '15px  8px',
      backgroundColor: COLORS.appBackground,
      flex: 99,
      color: COLORS.text
    }}>

      <div>
        <RaisedButton primary={ true } label="Start" onTouchTap={ () => store.restart() }/>

        <Statistics/>
      </div>

      <Row center="xs">
        <Col>

        <Board/>

        </Col>
      </Row>
    </div>
  );
});
