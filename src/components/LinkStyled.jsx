import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const LinkPrimary = styled(Link)`
  color: inherit;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const LinkStyled = props => {
  return <LinkPrimary {...props}></LinkPrimary>;
};

export default LinkStyled;
