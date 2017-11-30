import React from 'react';
import GetLeaderboard from '../containers/GetLeaderboard';
import EnterTeam from '../containers/EnterTeam';
import BackgroundPage from './BackgroundPage';

const Home = ({ leaderboard, addToLeaderboard }) => {
  return (
    <BackgroundPage>
      <div className = "home-container">
        <EnterTeam />
        <GetLeaderboard />
        <p className = "footer">Want to be top? STFU and click!</p>
      </div>
    </BackgroundPage>
  );
}

export default Home;
