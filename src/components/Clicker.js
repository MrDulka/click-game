import React from 'react';

const Clicker = ({ doClick, sessionClicks, teamClicks }) => {
  return (
    <div>
      <button className = "btn btn-big" onClick = {doClick}>CLICK!</button>
      <div className="row">
        <div className="column">
          <h3 className = "clicks-label">Your clicks:</h3>
          <p className = "clicks-score">{sessionClicks}</p>
        </div>
        <div className="column">
          <h3 className = "clicks-label">Team clicks:</h3>
          <p className = "clicks-score">{teamClicks}</p>
        </div>
      </div>
    </div>
  )
}

export default Clicker;
