import React from 'react';
import './SearchFocus.scss';

class SearchFocus extends React.Component {
  render() {
    return (
      <div
        className={this.props.modalActive ? 'modalHidden' : 'searchInputFocus'}
      ></div>
    );
  }
}

export default SearchFocus;
