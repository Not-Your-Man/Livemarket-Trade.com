import React from 'react';

const MeterBar = ({ value, max }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="w-60 h-3 bg-white rounded-full overflow-hidden">
      <div
        className="h-full bg-green-500"
        style={{ width: `${percentage}%`, backgroundColor: 'rgb(34,197,94)' }}
      ></div>
    </div>
  );
};

export default MeterBar;
