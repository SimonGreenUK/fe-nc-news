import React from 'react';
import * as api from '../utils/api';
import Button from './Button';

class Voter extends React.Component {
  state = {
    optimisticVotes: 0
  };
  render() {
    return (
      <div>
        <p>{this.props.votes + this.state.optimisticVotes} votes</p>
        <Button
          onClick={this.handleClick}
          name={1}
          disabled={this.state.optimisticVotes === 1}
        >
          Up vote
        </Button>
        <Button
          onClick={this.handleClick}
          name={-1}
          disabled={this.state.optimisticVotes === -1}
        >
          Down vote
        </Button>
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
