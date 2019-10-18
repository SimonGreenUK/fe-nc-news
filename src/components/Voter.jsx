import React from 'react';
import * as api from '../utils/api';
import Button from './Button';
import styled from 'styled-components';

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.7rem;
`;

const VotesAmount = styled.p`
  font-size: 0.8rem;
`;

class Voter extends React.Component {
  state = {
    optimisticVotes: 0,
    voteError: false
  };
  render() {
    return (
      <div>
        <VotesAmount>
          {this.props.votes + this.state.optimisticVotes} votes
        </VotesAmount>
        <Button
          onClick={() => this.handleClick(1)}
          disabled={this.state.optimisticVotes === 1}
        >
          Up vote
        </Button>
        <Button
          onClick={() => this.handleClick(-1)}
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

  handleClick = voteChange => {
    this.setState(currentState => {
      return {
        optimisticVotes: currentState.optimisticVotes + voteChange,
        voteError: false
      };
    });
    api.patchVote(this.props.type, this.props.id, voteChange).catch(() => {
      this.setState({ voteError: true });
    });
  };
}

export default Voter;
