export const REQUEST_CLICK = 'REQUEST_CLICK';
export const RECIEVE_CLICK = 'RECIEVE_CLICK';
export const REROLL_CLICK = 'REROLL_CLICK';
export const REQUEST_LEADERBOARD = 'REQUEST_LEADERBOARD';
export const RECEIVE_LEADERBOARD = 'RECEIVE_LEADERBOARD'
export const SET_SESSION = 'SET_SESSION';

const LEADERBOARD_API_URL = 'https://klikuj.herokuapp.com/api/v1/leaderboard';
const CLICK_API_URL = 'https://klikuj.herokuapp.com/api/v1/klik';

export const requestClick = (team, session) => {
  return {
    type: REQUEST_CLICK,
    team,
    session
  }
}

export const receiveClick = (teamClicks, sessionClicks, team, session) => {
  return {
    type: RECEIVE_CLICK,
    teamClicks,
    sessionClicks,
    team,
    session
  }
}

export const rerollClick = (team, session) => {
  return {
    type: REROLL_CLICK,
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
  return fetch(LEADERBOARD_API_URL)
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

export const postClick = (team, session) => dispatch => {
  dispatch(requestClick(team, session));
  return fetch(CLICK_API_URL, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    body: JSON.stringify({team, session})
  })
  .then(
    (response) => response.json(),
    (err) => dispatch(rerollClick(team, session))
  )
  .then(data => {
    if(!data) {
      return;
    }
    dispatch(receiveClick(data.team_clicks, data.your_clicks, team, session));
  })
}
