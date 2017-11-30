export const CLICK = 'CLICK';
export const SET_LEADERBOARD = 'SET_LEADERBOARD';
export const SET_SESSION = 'SET_SESSION';

export const doClick = (team, session) =>{
  return {
    type: CLICK,
    team,
    session
  }
}

export const setLeaderboard = (leaderboard) =>{
  return {
    type: SET_LEADERBOARD,
    leaderboard
  }
}

export const setSession = (team, id) => {
  return {
    type: SET_SESSION,
    team,
    id
  }
}
