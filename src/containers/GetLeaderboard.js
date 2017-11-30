import { connect } from 'react-redux';
import React from 'react';
import Leaderboard from '../components/Leaderboard';

const mapStateToProps = state => {
  return {
    leaderboard : state.leaderboard
  }
}

export default connect(mapStateToProps)(Leaderboard)
