import React from 'react';
import { connect } from 'react-redux';
import { setSession, postClick } from '../actions';
import Clicker from '../components/Clicker';

class SmartClicker extends React.Component {
  constructor(props) {
    super(props);

    this.doClick = this.doClick.bind(this);
  }

  componentDidMount() {
    let { dispatch, team } = this.props;
    let randomString = Math.random().toString();
    dispatch(setSession(team, randomString));
  }

  doClick() {
    let { team, session } = this.props;
    this.props.dispatch(postClick(team, session));
  }

  render() {
    let { sessionClicks, teamClicks } = this.props;
    return (
      <Clicker doClick = {this.doClick} sessionClicks = {sessionClicks}
        teamClicks = {teamClicks} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let team = state.leaderboard.find((team) => team.name === ownProps.team);
  let teamClicks = team ? team.clicks : 0;
  return {
    team: ownProps.team,
    session: state.session.id,
    sessionClicks: state.session.sessionClicks,
    teamClicks
  }
}

export default connect(mapStateToProps)(SmartClicker);
