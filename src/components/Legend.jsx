import React from 'react';

function Legend() {
  return (
    <div className="legend">
      <div className="legend-items">
        <div className="legend-item">
          <div className="legend-dot positive"></div>
          <span>Positive</span>
        </div>
        
        <div className="legend-item">
          <div className="legend-dot neutral"></div>
          <span>Neutral</span>
        </div>
        
        <div className="legend-item">
          <div className="legend-dot negative"></div>
          <span>Negative</span>
        </div>
      </div>
    </div>
  );
}

export default Legend;