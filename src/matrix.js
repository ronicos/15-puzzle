let matrix     = [];
let matrixSize = 4; // dimensions, can be changed

const init = () => {
  matrix.length = 0;

  for (let rowIndex = 0; rowIndex < matrixSize; rowIndex++) {
    matrix.push([]);

    for (let colIndex = 0; colIndex < matrixSize; colIndex++) {
      matrix[rowIndex].push(rowIndex * matrixSize + colIndex);
    }
  }
};

const getCell = (rowIndex, colIndex) => {
  const row = matrix[rowIndex];

  if (!row) {
    return null;
  }

  return isNaN(row[colIndex]) ? null : row[colIndex];
};

const setCell = (rowIndex, colIndex, value) => matrix[rowIndex][colIndex] = value;

const iterateCells = (action) => {
  let iterationIndex = 0;
  for (let rowIndex = 0; rowIndex < matrixSize; rowIndex++) {
    for (let colIndex = 0; colIndex < matrixSize; colIndex++) {
      action(getCell(rowIndex, colIndex), rowIndex, colIndex, iterationIndex++);
    }
  }
};

const swapCells = (firstRowIndex, firstColIndex, secondRowIndex, secondColIndex) => {
  const temp = getCell(firstRowIndex, firstColIndex);

  setCell(firstRowIndex, firstColIndex, getCell(secondRowIndex, secondColIndex));
  setCell(secondRowIndex, secondColIndex, temp);
};

const scramble = () => {
  iterateCells((_, rowIndex, colIndex) => {
    const randomRowIndex  = Math.floor(Math.random() * matrixSize);
    const randomCellIndex = Math.floor(Math.random() * matrixSize);

    swapCells(rowIndex, colIndex, randomRowIndex, randomCellIndex);
  });
};

const canShift = (row, col) => {
  const up    = getCell(row - 1, col) === 0;
  const down  = getCell(row + 1, col) === 0;
  const left  = getCell(row, col - 1) === 0;
  const right = getCell(row, col + 1) === 0;

  return (up || down || left || right);
};

const shift = (row, col) => {
  const possible = canShift(row, col);

  if (!possible) {
    return false;
  }

  iterateCells((value, rowIndex, colIndex) => {
    if (value === 0) {
      swapCells(row, col, rowIndex, colIndex);
    }
  });

  return true;
};

const shiftTo = (direction) => {
  let rowIndex = null;
  let colIndex = null;
  let shifted = false;

  iterateCells((value, row, col) => {
    if (value === 0) {
      rowIndex = row;
      colIndex = col;
    }
  });

  const arrows = {
    ArrowUp: () => getCell(rowIndex + 1, colIndex),
    ArrowDown: () => getCell(rowIndex - 1, colIndex),
    ArrowLeft: () => getCell(rowIndex, colIndex + 1),
    ArrowRight: () => getCell(rowIndex, colIndex - 1),
  };

  const shiftValue = arrows[direction] && arrows[direction]();
  const canShift   = !isNaN(shiftValue);

  if (canShift) {
    iterateCells((value, row, col) => {
      if (!shifted && value === shiftValue) {
        shifted = shift(row, col);
      }
    });
  }

  return shifted;
};

const isCompleted = () => {
  const results = [];

  iterateCells((value, rowIndex, colIndex, iterationIndex) => {
    let isValid = true;

    isValid &= value === iterationIndex + 1;
    isValid |= value === 0 && iterationIndex + 1 === matrixSize * matrixSize;

    results.push(!!isValid);
  });

  return results.reduce((prev, current) => prev && current, true);
};

export {
  matrix,
  matrixSize,
  init,
  iterateCells,
  scramble,
  shift,
  shiftTo,
  isCompleted
};
