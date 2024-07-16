import React from 'react';

const MeterBar = ({ value, max }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="w-60 h-3 bg-white rounded-full overflow-hidden">
      <div
        className="h-full bg-red-500"
        style={{ width: `${percentage}%`, backgroundColor: 'rgb(239,68,68)' }}
      ></div>
    </div>
  );
};

export default MeterBar;
