import React from 'react';

class CommentAdder extends React.Component {
  state = {
    commentBody: ''
  };
  render() {
    return (
      <>
        <h6>Current user: {this.props.loggedInUser}</h6>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text-area"
              onChange={this.handleChange}
              name="commentBody"
              value={this.state.commentBody}
              placeholder="Add a comment..."
            />
          </label>
          <button>Comment</button>
        </form>
      </>
    );
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addComment(this.props.loggedInUser, this.state.commentBody);
  };
}

export default CommentAdder;
