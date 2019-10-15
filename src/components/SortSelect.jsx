import React from 'react';

class SortSelect extends React.Component {
  state = {
    sortArticlesSelect: ''
  };
  render() {
    return (
      <div>
        <form>
          <label>
            <select
              onChange={this.handleChange}
              name="sortArticlesSelect"
              value={this.state.sortArticlesSelect}
            >
              <option value="created_at">Date</option>
              <option value="votes">Votes</option>
              <option value="comment_count">Comments</option>
            </select>
          </label>
        </form>
      </div>
    );
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value }, () => {
      this.props.updateArticleSort(this.state.sortArticlesSelect);
    });
  };
}

export default SortSelect;
