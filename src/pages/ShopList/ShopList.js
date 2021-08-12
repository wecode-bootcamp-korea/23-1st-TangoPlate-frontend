import React from 'react';
import Nav from '../../components/Nav/Nav';
import ShopListHeader from './ShopListHeader';
import ShopListMain from './ShopListMain';
import Footer from '../../components/Footer/Footer';
import { FILTER_LIST_URL } from './config.js';

class ShopList extends React.Component {
  constructor() {
    super();
    this.state = {
      shopInfo: [],
    };
  }

  componentDidMount() {
    let url = this.props.match.params.id
      ? `search?search=${this.props.match.params.id}`
      : this.props.location.search;
    fetch(FILTER_LIST_URL + url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          shopInfo: res,
        });
      });
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
    const { shopInfo } = this.state;
    return (
      <div className="shopList">
        <Nav />
        <ShopListHeader />
        {shopInfo.MESSAGE &&
          shopInfo.MESSAGE.map(list => {
            return (
              <ShopListMain
                key={list.id}
                shopId={list.id}
                shopName={list.name}
                shopImage={list.review.image}
                shopRating={list.rating.rating__avg}
                shopAddress={list.address}
                isWished={list.is_wished}
                buttonToggle={list.btn_toggle}
                userName={list.review.user_name}
                userReview={list.review.description}
                handler
                likeHandle={this.handleWishButton}
                buttonHandle={this.handleButton}
              />
            );
          })}
        {shopInfo.restaurant &&
          shopInfo.restaurant.map(list => {
            return (
              <ShopListMain
                key={list.id}
                shopId={list.id}
                shopName={list.name}
                shopImage={list.review.image}
                shopRating={list.rating.rating__avg}
                shopAddress={list.address}
                isWished={list.is_wished}
                buttonToggle={list.btn_toggle}
                userName={list.review.user_name}
                userReview={list.review.description}
                handler
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
