// import React from 'react';
import * as utils from '../utils/utils';

// const CommentCard = props => {
//   const { author, body, created_at, votes } = props;
//   console.log(props.loggedInUser === author);
//   return (
//     <li>
//       <p>
//         <strong>{author}</strong> {utils.formatDate(created_at)}
//       </p>
//       <p>{body}</p>
//       <p>Comment votes: {votes}</p>
//       {props.loggedInUser === author && (
//         <button onClick={handleClick}>Delete comment</button>
//       )}
//     </li>
//   );

// };

// export default CommentCard;

import React from 'react';

class CommentCard extends React.Component {
  render() {
    const {
      author,
      body,
      created_at,
      votes,
      loggedInUser,
      comment_id
    } = this.props;
    return (
      <li>
        <p>
          <strong>{author}</strong> {utils.formatDate(created_at)}
        </p>
        <p>{body}</p>
        <p>Comment votes: {votes}</p>
        {loggedInUser === author && (
          <button onClick={this.handleClick} name={comment_id}>
            Delete comment
          </button>
        )}
      </li>
    );
  }

  handleClick = e => {
    const { name } = e.target;
    this.props.deleteComment(name);
  };
}

export default CommentCard;
