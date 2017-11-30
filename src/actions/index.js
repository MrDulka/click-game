export const CLICK = 'CLICK';
export const REQUEST_LEADERBOARD = 'REQUEST_LEADERBOARD';
export const RECEIVE_LEADERBOARD = 'RECEIVE_LEADERBOARD'
export const SET_SESSION = 'SET_SESSION';

export const doClick = (team, session) => {
  return {
    type: CLICK,
    team,
    session
  }
}

export const setSession = (team, id) => {
  return {
    type: SET_SESSION,
    team,
    id
  }
}

export const requestLeaderboard = () => {
  return {
    type: REQUEST_LEADERBOARD
  }
}

export const receiveLeaderboard = (leaderboard) => {
  return {
    type: RECEIVE_LEADERBOARD,
    leaderboard
  }
}

export const fetchLeaderboard = () => dispatch => {
  dispatch(requestLeaderboard());
  return fetch('https://klikuj.herokuapp.com/api/v1/leaderboard')
  .then(response => response.json())
  .then(data => {
    let leaderboard = data.map(team => {
      return {
        name: team.team,
        clicks: team.clicks
      }
    });
    dispatch(receiveLeaderboard(leaderboard));
  });
}
