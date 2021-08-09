import React from 'react';
import './SearchForm.scss';

class SearchForm extends React.Component {
  render() {
    return (
      <form className="searchForm">
        <i className="fas fa-search fa-lg"></i>
        <input
          type="text"
          className="searchInput"
          maxLength="30"
          placeholder="맛집"
          onFocus={this.props.focusInput}
          onBlur={this.props.focusInput}
        />
        <button className="searchButton">검색</button>
      </form>
    );
  }
}

export default SearchForm;
