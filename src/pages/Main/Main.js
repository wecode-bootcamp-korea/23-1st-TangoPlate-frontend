import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ShopListContainer from './ShopListContainer/ShopListContainer';
import EatDealContainer from './EatDealContainer/EatDealContainer';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <header className="MainHeader">
          <div className="MainTitle">
            <h2>솔직한 리뷰, 믿을 수 있는 평점!</h2>
            <h2>탱고플레이트</h2>
            <form className="searchForm">
              <FontAwesomeIcon icon={faSearch} className="searchIcon" />
              <input
                type="text"
                className="searchInput"
                maxLength="30"
                placeholder="맛집"
              ></input>
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
