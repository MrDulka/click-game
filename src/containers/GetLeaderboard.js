import { connect } from 'react-redux';
import React from 'react';
import Leaderboard from '../components/Leaderboard';
import { fetchLeaderboard } from '../actions';

class GetLeaderboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchLeaderboard());
  }

  render() {
    const { fetchingLeaderboard, leaderboard } = this.props;
    const isEmpty = leaderboard.length === 0;
    return (
      <div>
        {fetchingLeaderboard &&
          <h2>Updating...</h2>
        }
        {isEmpty ?
          <h2>Not loaded yet</h2>
          : <Leaderboard leaderboard = {leaderboard}/>
        }
      </div>
    )


  }
}


const mapStateToProps = state => {
  return {
    leaderboard : state.leaderboard,
    fetchingLeaderboard: state.fetchingLeaderboard
  }
}

export default connect(mapStateToProps)(GetLeaderboard)
