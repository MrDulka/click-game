import React from 'react';
import { connect } from 'react-redux';
import { fetchLeaderboard } from '../actions';
import Leaderboard from '../components/Leaderboard';

class GetLeaderboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchLeaderboard());
  }

  render() {
    const { fetchingLeaderboard, leaderboard, team } = this.props;
    const isEmpty = leaderboard.length === 0;

    return (
      <div>
        {fetchingLeaderboard &&
          <h2>Updating...</h2>
        }
        {isEmpty ?
          <h2>Leaderboard not loaded yet</h2>
          : <Leaderboard leaderboard = {leaderboard} selectedTeam = {team} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    leaderboard : state.leaderboard,
    fetchingLeaderboard: state.fetchingLeaderboard,
    team: ownProps.team
  }
}

export default connect(mapStateToProps)(GetLeaderboard)
