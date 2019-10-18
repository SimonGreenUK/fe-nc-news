import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  padding: 8px 15px;
  border: 2px solid var(--light-gray);
  border-radius: 6px;
  font-family: inherit;
  border-radius: 4px;
  height: 32.5px;
  cursor: pointer;
  min-width: 100px;
  transition: all 0.3s ease;
  :hover {
    border: 2px solid var(--dark-gray);
  }
`;

const SortSelect = props => {
  const handleChange = e => {
    const { value } = e.target;
    props.updateArticleSort(value);
  };

  return (
    <div>
      <form>
        <label>
          <Select onChange={handleChange} value={props.sort_by}>
            <option value="created_at">Date</option>
            <option value="votes">Votes</option>
            <option value="comment_count">Comments</option>
          </Select>
        </label>
      </form>
    </div>
  );
};

export default SortSelect;
