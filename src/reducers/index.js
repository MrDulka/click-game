import { CLICK, SET_LEADERBOARD, SET_SESSION } from '../actions';

export const reducer = (state = {}, action) => {
  switch(action.type) {
    case SET_LEADERBOARD:
      return Object.assign({}, state, {
        leaderboard: [...action.leaderboard]
      });

    case SET_SESSION:
      let sessionClicks = state.session.id === action.session ? state.session.sessionClicks : 0;
      return Object.assign({}, state, {
        session: {
          id: action.id,
          team: action.team,
          sessionClicks: sessionClicks
        }
      });

    case CLICK:
      let teamFound = false;
      let updatedLeaderboard = state.leaderboard.map(team => {
        if(team.name === action.team) {
          teamFound = true;
          return Object.assign({}, team, {
            clicks: team.clicks + 1
          });
        }
        return team;
      });
      if (!teamFound){
        updatedLeaderboard.push({
          name: action.team,
          clicks: 1
        });
      }

      let updatedSession = state.session;
      if (state.session.id === action.session) {
        updatedSession = Object.assign({}, state.session, {
        sessionClicks: state.session.sessionClicks + 1
        })
      }

      return Object.assign({}, state, {
        leaderboard: updatedLeaderboard,
        session: updatedSession
      });

    default:
      return state;
  }
}
