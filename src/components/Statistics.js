import React from 'react';
import { observer } from 'mobx-react';

import { StatisticsComposer } from './StatisticsComposer';

export const Statistics = observer(StatisticsComposer(({ steps, timer, completed }) => (
  <div>
    <p>
      Steps: { steps }
    </p>
    <p>
      Time: { timer } seconds
    </p>
  </div>
)));
