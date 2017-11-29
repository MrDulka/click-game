import React from 'react';

const Session = ({ match }) => {
  return (
    <h1>This is team {match.params.team}</h1>
  )
}

export default Session;
