import React from 'react';
import Select from './Select';

const SortSelect = props => {
  const handleChange = e => {
    const { value } = e.target;
    props.updateArticleSort(value);
  };

  return (
    <div>
      <form>
        <label>
          <select onChange={handleChange} value={props.sort_by}>
            <option value="created_at">Date</option>
            <option value="votes">Votes</option>
            <option value="comment_count">Comments</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default SortSelect;
