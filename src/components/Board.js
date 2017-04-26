import React from 'react';
import { observer } from 'mobx-react';

import { BoardComposer } from './BoardComposer';
import { PuzzleUnit } from './PuzzleUnit';

@observer
@BoardComposer
export class Board extends React.Component {

  render() {
    const size = 90;
    const { board, shift, size: puzzleUnits } = this.props;

    const props = board.map((row, rowIndex) => row.map((col, colIndex) => ({
      col, colIndex, rowIndex, shift, size, key: colIndex
    })));

    return (
      <div style={{ border: '1px solid #bbb', width: (size * puzzleUnits) + 'px' }}>
        {
          props.map((rowProps, index) => {
            return (
              <div style={{ display: 'flex' }} key={ index }>
                {
                  rowProps.map((colProps) => <PuzzleUnit { ...colProps } />)
                }
              </div>
            )
          })
        }
      </div>
    );
  }
}
