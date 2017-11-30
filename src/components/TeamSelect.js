import React from 'react';

const TeamSelect = ({ text, onChange, submitTeam }) => {
  return (
    <div className = "team-select">
      <label htmlFor = "team-name">Enter your team name:</label>
      <input type = "text" value = {text} onChange = {onChange} id = "team-name" placeholder="Your mom"/>
      <button onClick = {submitTeam} className = "select-team-button">CLICK!</button>
    </div>
  );
}

export default TeamSelect;
