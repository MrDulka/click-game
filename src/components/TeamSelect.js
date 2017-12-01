import React from 'react';

const TeamSelect = ({ text, onChange, submitTeam }) => {
  return (
    <div className="row">
      <div className="column">
        <label htmlFor = "team-name">Enter your team name:</label>
        <input type = "text" value = {text} onChange = {onChange} id = "team-name"
          placeholder="Your mom"/>
      </div>
      <div className="column">
        <button onClick = {submitTeam}>CLICK!</button>
      </div>
    </div>
  );
}

export default TeamSelect;
