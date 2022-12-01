import React from 'react';
import DurationStage from './DurationStage/DurationStage';
import './Durations.css';

function Durations() {
  return (
    <div className="durations">
      <DurationStage
        text="1 неделя"
        name="Back-end"
      />
      <DurationStage
        text="4 недели"
        name="Front-end"
        color="grey"
      />
    </div>
  );
}

export default Durations;
