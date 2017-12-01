import React from 'react'

const Leaderboard = ({ leaderboard, selectedTeam }) => {
  let sortedLeaderboard = leaderboard.sort((a, b) => b.clicks - a.clicks);
  let fromIndex, toIndex;

  if(selectedTeam) {
    var teamIndex = sortedLeaderboard.findIndex((team) => team.name === selectedTeam);
    let length = sortedLeaderboard.length;
    if (teamIndex <= 3) {
      fromIndex = 0;
      toIndex = 6;
    }
    else if (teamIndex >= length - 3){
      fromIndex = length - 7;
      toIndex = length - 1;
    }
    else {
      fromIndex = teamIndex - 3;
      toIndex = teamIndex + 3;
    }
  }
  else {
    fromIndex = 0;
    toIndex = 9;
  }

  let teamScores = sortedLeaderboard.reduce((accumulator, team, index) => {
    let id = teamIndex === index ? "selected-team-row" : "";

    if (index >= fromIndex && index <= toIndex) {
      return accumulator.concat(
        <tr key = {team.name} id = {id}>
          <td>{index + 1}</td>
          <td className = "team">{team.name}</td>
          <td className = "clicks">{team.clicks}</td>
        </tr>
      )
    }
    else {
      return accumulator;
    }
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th className = "team">TEAM</th>
          <th className = "clicks">CLICKS</th>
        </tr>
      </thead>
      <tbody>
        {teamScores}
      </tbody>
    </table>
  )
}

export default Leaderboard;
