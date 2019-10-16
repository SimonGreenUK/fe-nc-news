import React from 'react';
import * as api from '../utils/api';

class Voter extends React.Component {
  state = {
    optimisticVotes: 0
  };
  render() {
    return (
      <div>
        <p>{this.state.optimisticVotes} votes</p>
        <button onClick={this.handleClick} name={1}>
          Up vote
        </button>
        <button onClick={this.handleClick} name={-1}>
          Down vote
        </button>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ optimisticVotes: this.props.votes });
  }

  handleClick = e => {
    const { name } = e.target;
    this.setState(currentState => {
      return {
        optimisticVotes: currentState.optimisticVotes + Number(name)
      };
    });
    api.patchVote(this.props.type, this.props.id, name);
  };
}

export default Voter;
