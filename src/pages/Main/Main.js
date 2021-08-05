import React from 'react';
import Nav from '../Main/Nav/Nav';
import ShopListContainer from './ShopListContainer/ShopListContainer';
import EatDealContainer from './EatDealContainer/EatDealContainer';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Nav />
        <header className="mainHeader">
          <div className="mainTitle">
            <h2>솔직한 리뷰, 믿을 수 있는 평점!</h2>
            <h2>탱고플레이트</h2>
            <form className="searchForm">
              <i className="fas fa-search fa-lg"></i>
              <input
                type="text"
                className="searchInput"
                maxLength="30"
                placeholder="맛집"
              />
              <button className="searchButton">검색</button>
            </form>
          </div>
        </header>
        <article>
          <ShopListContainer />
          <EatDealContainer />
        </article>
      </div>
    );
  }
}

export default Main;
