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
  color: var(--light-gray-text);
`;

const VoteButton = styled(Button)`
  padding-top: 5px;
  color: var(--turquoise-main);
  width: 60px;
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
        <VoteButton
          onClick={() => this.handleClick(1)}
          disabled={this.state.optimisticVotes === 1}
        >
          <svg
            width="15"
            height="15"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="thumbs-up"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"
            ></path>
          </svg>
        </VoteButton>
        <VoteButton
          onClick={() => this.handleClick(-1)}
          disabled={this.state.optimisticVotes === -1}
        >
          <svg
            width="15"
            height="15"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="thumbs-down"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M466.27 225.31c4.674-22.647.864-44.538-8.99-62.99 2.958-23.868-4.021-48.565-17.34-66.99C438.986 39.423 404.117 0 327 0c-7 0-15 .01-22.22.01C201.195.01 168.997 40 128 40h-10.845c-5.64-4.975-13.042-8-21.155-8H32C14.327 32 0 46.327 0 64v240c0 17.673 14.327 32 32 32h64c11.842 0 22.175-6.438 27.708-16h7.052c19.146 16.953 46.013 60.653 68.76 83.4 13.667 13.667 10.153 108.6 71.76 108.6 57.58 0 95.27-31.936 95.27-104.73 0-18.41-3.93-33.73-8.85-46.54h36.48c48.602 0 85.82-41.565 85.82-85.58 0-19.15-4.96-34.99-13.73-49.84zM64 296c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm330.18 16.73H290.19c0 37.82 28.36 55.37 28.36 94.54 0 23.75 0 56.73-47.27 56.73-18.91-18.91-9.46-66.18-37.82-94.54C206.9 342.89 167.28 272 138.92 272H128V85.83c53.611 0 100.001-37.82 171.64-37.82h37.82c35.512 0 60.82 17.12 53.12 65.9 15.2 8.16 26.5 36.44 13.94 57.57 21.581 20.384 18.699 51.065 5.21 65.62 9.45 0 22.36 18.91 22.27 37.81-.09 18.91-16.71 37.82-37.82 37.82z"
            ></path>
          </svg>
        </VoteButton>
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
