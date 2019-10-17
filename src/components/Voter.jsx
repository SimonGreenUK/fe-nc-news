import React from 'react';
import * as api from '../utils/api';

class Voter extends React.Component {
  state = {
    optimisticVotes: 0
  };
  render() {
    return (
      <div>
        <p>{this.props.votes + this.state.optimisticVotes} votes</p>
        <button
          onClick={this.handleClick}
          name={1}
          disabled={this.state.optimisticVotes === 1}
        >
          Up vote
        </button>
        <button
          onClick={this.handleClick}
          name={-1}
          disabled={this.state.optimisticVotes === -1}
        >
          Down vote
        </button>
      </div>
    );
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
