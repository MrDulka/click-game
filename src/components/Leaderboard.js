import React from 'react'

const Leaderboard = ({ leaderboard }) => {
  let sortedLeaderboard = leaderboard.sort((a, b) => b.clicks - a.clicks);
  let topTen = sortedLeaderboard.slice(0, 10);
  let teamScores = topTen.map((team, index) => {
    return (
      <tr key = {team.name}>
        <td>{index + 1}</td>
        <td className = "team">{team.name}</td>
        <td className = "clicks">{team.clicks}</td>
      </tr>
    )
  });

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
