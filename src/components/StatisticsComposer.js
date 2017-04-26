import React, { Component } from 'react';

import { store } from '../store';

export const StatisticsComposer = (Statistic) => class extends Component {
  render() {
    const { steps, completed, timer } = store;

    const props = {
      timer,
      steps,
      completed
    };

    return <Statistic { ...props } />;
  }
};
