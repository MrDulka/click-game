import React from 'react';
import GetLeaderboard from '../containers/GetLeaderboard';
import EnterTeam from '../containers/EnterTeam';
import BackgroundPage from './BackgroundPage';

const Home = () => {
  return (
    <BackgroundPage>
      <blockquote>
        "Let's admit it, you would be clicking randomly on web anyway"
        <footer>— Albert Einstein</footer>
      </blockquote>
      <div className = "container">
        <EnterTeam />
        <GetLeaderboard />
        <p className = "footer">Want to be top? STFU and click!</p>
      </div>
    </BackgroundPage>
  );
}

export default Home;
