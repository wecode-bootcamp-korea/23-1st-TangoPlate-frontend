import React from 'react';
import Nav from '../../components/Nav/Nav';
import ShopListHeader from './ShopListHeader';
import ShopListMain from './ShopListMain';
import Footer from '../../components/Footer/Footer';

class ShopList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moreReview: 'reviewWrapperClose',
      closeReview: '더보기',
    };
  }

  buttonHandler = () => {
    if (this.state.moreReview === 'reviewWrapperOpen') {
      return this.setState({
        moreReview: 'reviewWrapperClose',
        closeReview: '더보기',
      });
    } else {
      return this.setState({
        moreReview: 'reviewWrapperOpen',
        closeReview: '줄이기',
      });
    }
  };

  render() {
    return (
      <div className="shopList">
        <Nav />
        <ShopListHeader />
        <ShopListMain
          moreReview={this.state.moreReview}
          buttonHandle={this.buttonHandler}
          close={this.state.closeReview}
        />
        <Footer />
      </div>
    );
  }
}

export default ShopList;
