import { observable, computed } from 'mobx';
import moment from 'moment';

import * as Matrix from './matrix';

let timerHandler = null;

const data = {
  @observable board: [],
  @observable highScores: JSON.parse(localStorage.highScores || '[]'),
  @observable steps: 0,
  @observable completed: false,
  @observable startTime: null,
  @observable timer: null,
  @observable userName: null,
  @computed get sortedScores() {
    return data.highScores.sort((a, b) => a.steps - b.steps);
  },
  size: Matrix.matrixSize
};

const clearStatistics = () => {
  data.steps     = 0;
  data.completed = false;
};

const restart = () => {
  Matrix.init();
  Matrix.scramble();

  clearStatistics();

  data.board     = Matrix.matrix;
  data.startTime = Date.now();

  timerHandler = setInterval(() => {
    const time = moment.duration(Date.now() - data.startTime, 'milliseconds').asSeconds();
    data.timer = Math.floor(time);
  }, 1000);
};

const onShiftSuccess = () => {
  data.board     = Matrix.matrix;
  data.steps += 1;
  data.completed = Matrix.isCompleted();

  if (data.completed) {
    clearInterval(timerHandler)
  }
};

const shift = (row, col) => {
  const shifted = Matrix.shift(row, col);

  if (shifted) {
   onShiftSuccess();
  }
};

const shiftTo = (direction) => {
  const shifted = Matrix.shiftTo(direction);

  if (shifted) {
    onShiftSuccess();
  }
};

const saveUser = () => {
  const { steps, timer, userName } = data;
  const user = { userName, timer, steps };

  data.highScores.push(user);
  localStorage.highScores = JSON.stringify(data.highScores);

  clearStatistics();
};

export const store = Object.assign(data, { shift, restart, shiftTo, saveUser });
