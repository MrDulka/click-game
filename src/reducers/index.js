import { REQUEST_CLICK, RECEIVE_CLICK, ERROR_CLICK,
REQUEST_LEADERBOARD, RECEIVE_LEADERBOARD, SET_SESSION } from '../actions';

/*
optimisticClick aims to provide better responsivity. It assumes that the request
to server will be successfull and updates the state on the client immediately,
without waiting for the response from the server.
If there is an error and the server response announces an error, it undos the changes
that were made optimistically, making the actions "in reverse".

Another option would be to update the state after the response from server,
it should be enough to write a pessimisticClick reducer for this.
*/
const optimisticClick = (state, action) => {
  switch(action.type) {
    case REQUEST_CLICK: {
      let teamIsNew = true;
      let updatedLeaderboard = state.leaderboard.map(team => {
        if(team.name === action.team) {
          teamIsNew = false;
          return Object.assign({}, team, {
            clicks: team.clicks + 1
          });
        }
        return team;
      });
      if (teamIsNew){
        updatedLeaderboard.push({
          name: action.team,
          clicks: 1
        });
      }

      let updatedSession = state.session;
      if (state.session.id === action.session) {
        updatedSession = Object.assign({}, state.session, {
          sessionClicks: state.session.sessionClicks + 1
        });
      }

      return Object.assign({}, state, {
        leaderboard: updatedLeaderboard,
        session: updatedSession
      });
    }

    case ERROR_CLICK: {
      let newTeamIndex = -1;
      let updatedLeaderboard = state.leaderboard.map((team, index) => {
        if(team.name === action.team) {
          if (team.clicks == 1){
            newTeamIndex = index;
          }
          else {
            return Object.assign({}, team, {
              clicks: team.clicks - 1
            });
          }
        }
        return team;
      });
      if(newTeamIndex > -1) {
        updatedLeaderboard.splice(newTeamIndex, 1)
      }

      let updatedSession = state.session;
      if (state.session.id === action.session) {
        updatedSession = Object.assign({}, state.session, {
          sessionClicks: state.session.sessionClicks - 1
        });
      }

      return Object.assign({}, state, {
        leaderboard: updatedLeaderboard,
        session: updatedSession
      });
    }
    default:
      return state;
  }
}

export const reducer = (state = {}, action) => {
  switch(action.type) {
    case REQUEST_LEADERBOARD:
      return Object.assign({}, state, {
        fetchingLeaderboard: true
      });

    case RECEIVE_LEADERBOARD:
      return Object.assign({}, state, {
        fetchingLeaderboard: false,
        leaderboard: action.leaderboard
      });

    case SET_SESSION:
      let sessionClicks = state.session.id === action.id ? state.session.sessionClicks : 0;
      return Object.assign({}, state, {
        session: {
          id: action.id,
          team: action.team,
          sessionClicks: sessionClicks
        }
      });

    case REQUEST_CLICK:
    case RECEIVE_CLICK:
    case ERROR_CLICK:
      return optimisticClick(state, action);

    default:
      return state;
  }
}
