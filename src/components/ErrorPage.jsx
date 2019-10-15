import React from 'react';

const ErrorPage = err => {
  const msg = window.history.state
    ? window.history.state.msg
    : 'page not found';
  return (
    <div>
      <h2>Error: {msg}</h2>
    </div>
  );
};

export default ErrorPage;
