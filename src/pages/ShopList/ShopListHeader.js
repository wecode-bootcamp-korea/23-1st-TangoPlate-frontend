import React, { Component } from 'react';
import './ShopListHeader.scss';
import FilterButton from './FilterButton';

export class ShopListHeader extends Component {
  render() {
    return (
      <div className="headerContainer">
        <header className="headLine">
          <div className="innerWrapper">
            <h4 className="clickCountAndDate">
              729,662클릭 | <time dateTime="2021-08-07">2021-08-07</time>
            </h4>
            <h2 className="headerTitle">
              선릉 맛집 베스트 {this.props.shopInfo}곳
            </h2>
            <h3 className="headerSubTitle">
              "#선릉 주변 맛집이 얼마나 많은데!"
            </h3>
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
