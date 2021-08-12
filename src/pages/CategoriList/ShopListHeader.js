import React, { Component } from 'react';
import FilterButton from './FilterButton';
import './ShopListHeader.scss';

export class ShopListHeader extends Component {
  render() {
    return (
      <div className="headerContainer">
        <header className="headLine">
          <div className="innerWrapper">
            <h4 className="clickCountAndDate">
              729,662클릭 | <time dateTime="2021-08-07">2021-08-07</time>
            </h4>
            <h2 className="headerTitle">hi</h2>
            <h3 className="headerSubTitle">hi</h3>
          </div>
          <div className="buttonWrapper">
            <FilterButton />
          </div>
        </header>
      </div>
    );
  }
}

export default ShopListHeader;
