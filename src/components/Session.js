import React from 'react';
import BackgroundPage from './BackgroundPage';
import SmartClicker from '../containers/SmartClicker';
import GetLeaderboard from '../containers/GetLeaderboard';

const Session = ({ match }) => {
  let { team } = match.params;
  let link = encodeURI("clicking-game.herokuapp.com/" + team);
  return (
    <BackgroundPage>
      <h2>Clicking for team <strong>{team}</strong></h2>
      <p>
        Your friends can taste it too! Get them clickin':
        <input type="text" value = {link} readOnly size={link.length}
          className = "session-link"/>
      </p>
      <div className = "container">
        <SmartClicker team = {team}/>
        <GetLeaderboard team = {team}/>
      </div>
    </BackgroundPage>
  )
}

export default Session;
