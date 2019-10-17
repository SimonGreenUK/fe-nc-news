import React from 'react';
import * as api from '../utils/api';
import Button from './Button';
import styled from 'styled-components';

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.7rem;
`;

class Voter extends React.Component {
  state = {
    optimisticVotes: 0,
    voteError: false
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
        {this.state.voteError && (
          <ErrorMessage>
            Error: your vote may not have been processed correctly - refresh the
            page
          </ErrorMessage>
        )}
      </div>
    );
  }

  handleClick = e => {
    const { name } = e.target;
    this.setState(currentState => {
      return {
        optimisticVotes: currentState.optimisticVotes + Number(name),
        voteError: false
      };
    });
    api.patchVote(this.props.type, this.props.id, name).catch(() => {
      this.setState({ voteError: true });
    });
  };
}

export default Voter;
