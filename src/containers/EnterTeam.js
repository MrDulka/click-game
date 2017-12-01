import React from 'react';
import { connect } from 'react-redux';
import { setSession } from '../actions';
import TeamSelect from '../components/TeamSelect';
import { withRouter } from 'react-router';

class EnterTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitTeam = this.submitTeam.bind(this);
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  submitTeam() {
    if (!this.state.text){
      return
    }
    this.props.history.push('/'+this.state.text);
    this.setState({text: ''});
  }

  render() {
    return (
    <TeamSelect
      text = {this.state.text}
      onChange = {this.handleChange}
      submitTeam = {this.submitTeam} />
    );
  }
}

export default connect()(withRouter(EnterTeam));
