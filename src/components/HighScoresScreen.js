import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { observer } from 'mobx-react';

import { COLORS } from '../theme';
import { HighScoresComposer } from './HighScoresComposer';
import { HighScoresForm } from './HighScoresForm';
import { HighScoresTable } from './HighScoresTable';

export const HighScoresScreen = observer(HighScoresComposer(({ highScores, completed, onNameChange, save }) => {

  const formProps = { onNameChange, save };
  const tableProps = { highScores };

  return (
    <div style={{
      padding: '15px  8px',
      backgroundColor: COLORS.appBackground,
      flex: 99,
      color: COLORS.text
    }}>

      <Row center="xs">
        <Col>

          <h1>
            High Scores
          </h1>

          {
            completed && <HighScoresForm { ...formProps } />
          }

          {
            !completed && <HighScoresTable { ...tableProps } />
          }

        </Col>
      </Row>

    </div>
  );
}));
