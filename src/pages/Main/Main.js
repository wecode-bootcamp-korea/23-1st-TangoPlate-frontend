import React from 'react';
import SearchFocus from './SearchFocus/SearchFocus';
import SearchForm from './SearchForm/SearchForm';
import ShopListContainer from './ShopListContainer/ShopListContainer';
// import EatDealContainer from './EatDealContainer/EatDealContainer';
import Footer from '../../components/Footer/Footer';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      isSearchModalActive: true,
    };
  }

  searchStart = () => {
    this.setState({
      isSearchModalActive: !this.state.isSearchModalActive,
    });
  };

  render() {
    const { isSearchModalActive } = this.state;
    return (
      <div className="main">
        <SearchFocus modalActive={isSearchModalActive} />

        <header className="mainHeader">
          <div className="mainTitle">
            <h2>솔직한 리뷰, 믿을 수 있는 평점!</h2>
            <h2>탱고플레이트</h2>
          </div>
          <SearchForm focusInput={this.searchStart} />
        </header>
        <article>
          <ShopListContainer />
          {/* <EatDealContainer /> */}
        </article>
        <Footer />
      </div>
    );
  }
}

export default Main;
