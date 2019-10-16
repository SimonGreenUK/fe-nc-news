import React from 'react';

class Voter extends React.Component {
  state = {
    optimisticVotes: 0
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick} name={1}>
          Up vote
        </button>
        <button onClick={this.handleClick} name={-1}>
          Down vote
        </button>
      </div>
    );
  }
}

export default Voter;
