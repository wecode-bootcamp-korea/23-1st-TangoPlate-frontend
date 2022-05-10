import React from 'react';
import { withRouter } from 'react-router-dom';
import './SearchForm.scss';

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      shoplist: [],
    };
  }

  searchText = e => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchValue } = this.state;
    if (searchValue.length === 0) {
      alert('검색어를 입력해 주세요.');
    } else {
      this.props.history.push(`/shoplist/${searchValue}`, 'search?search=');
    }
  };

  render() {
    return (
      <form className="searchForm" onSubmit={this.handleSubmit}>
        <i className="fas fa-search fa-lg" />
        <input
          type="text"
          className="searchInput"
          maxLength="30"
          placeholder="맛집"
          onFocus={this.props.focusInput}
          onBlur={this.props.focusInput}
          onInput={this.searchText}
        />
        <input
          type="button"
          className="searchButton"
          onClick={this.handleSubmit}
          value="검색"
        />
      </form>
    );
  }
}

export default withRouter(SearchForm);
