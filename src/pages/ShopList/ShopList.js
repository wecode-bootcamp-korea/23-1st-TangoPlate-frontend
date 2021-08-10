import React from 'react';
import ShopListHeader from './ShopListHeader';
import ShopListMain from './ShopListMain';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import { FILTER_LIST_URL } from './config.js';

class ShopList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shopInfo: [],
    };
  }
  componentDidMount() {
    fetch(FILTER_LIST_URL + '?category=3')
      .then(res => res.json())
      .then(res => this.setState({ shopInfo: res.restaurant }));
  }

  handleButton = e => {
    const changeList = [...this.state.shopInfo];
    changeList.forEach(el => {
      if (Number(e.target.name) === el.id) {
        el.btn_toggle = !el.btn_toggle;
      }
    });
    this.setState({
      shopInfo: changeList,
    });
  };

  handleWishButton = e => {
    const changeList = [...this.state.shopInfo];
    changeList.forEach(el => {
      if (Number(e.target.id) === el.id) {
        el.is_wished = !el.is_wished;
      }
    });
    this.setState({
      shopInfo: changeList,
    });
  };

  render() {
    console.log(this.state.shopInfo);
    const { shopInfo } = this.state;
    return (
      <div className="shopList">
        <Nav />
        <ShopListHeader shopInfo={shopInfo.length} />
        {shopInfo &&
          shopInfo.map(list => {
            return (
              <ShopListMain
                key={list.id}
                shopId={list.id}
                shopName={list.name}
                shopImage={list.image}
                shopRating={list.rating}
                shopAddress={list.address}
                isWished={list.is_wished}
                buttonToggle={list.btn_toggle}
                reviewId={list.review_id}
                userId={list.user_id}
                userName={list.user_name}
                userReview={list.description}
                //handler
                likeHandle={this.handleWishButton}
                buttonHandle={this.handleButton}
              />
            );
          })}
        <Footer />
      </div>
    );
  }
}

export default ShopList;
