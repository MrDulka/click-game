import React from 'react';
import BackgroundPage from './BackgroundPage';

const Session = ({ match }) => {
  let { team } = match.params;
  let link = encodeURIComponent("clicking-game.herokuapp.com/" + team);
  return (
    <BackgroundPage>
      <h2>Clicking for team <strong>{team}</strong></h2>
      <p>
        Your friends can taste it too! Get them clickin':
        <input type="text" value = {link} readOnly size={link.length}
          className = "session-link"/>
      </p>
    </BackgroundPage>
  )
}

export default Session;
