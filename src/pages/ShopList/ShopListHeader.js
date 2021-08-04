import React, { Component } from 'react';
import './ShopListHeader.scss';

export class ShopListHeader extends Component {
  render() {
    return (
      <div className="headerContainer">
        <header className="headLine">
          <div className="innerWrapper">
            <h4 className="clickCountAndDate">
              729,662클릭 | <time dateTime="2021-08-02">2021-08-02</time>
            </h4>
            <h2 className="headerTitle">고속버스터미널 맛집 베스트 40곳</h2>
            <h3 className="headerSubTitle">
              "#고속버스터미널 주변 맛집이 얼마나 많은데!"
            </h3>
          </div>
        </header>
      </div>
    );
  }
}

export default ShopListHeader;
