import React from 'react';
import GetLeaderboard from '../containers/GetLeaderboard';
import BackgroundPage from './BackgroundPage';

const Home = ({ leaderboard, addToLeaderboard }) => {
  return (
    <BackgroundPage>
      <div className = "home-container">
        <GetLeaderboard />
        <p className = "footer">Want to be top? STFU and click!</p>
      </div>
    </BackgroundPage>
  )
}

export default Home;
