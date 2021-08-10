import React from 'react';
import { withRouter } from 'react-router-dom';
import './SearchForm.scss';

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      matchResult: [],
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
      fetch(`http://10.58.2.176:8000/restaurants/search?search=${searchValue}`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            matchResult: data,
          });
          const { matchResult } = this.state;
          this.props.history.push({
            pathname: './ShopList',
            state: { searchValue: searchValue, matchResult: matchResult },
          });
        });
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
