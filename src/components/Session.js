import React from 'react';
import BackgroundPage from './BackgroundPage';

const Session = ({ match }) => {
  return (
    <BackgroundPage>
      <h1>This is team {match.params.team}</h1>
    </BackgroundPage>
  )
}

export default Session;
