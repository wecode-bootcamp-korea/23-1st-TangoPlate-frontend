import React from 'react';
import Nav from '../../components/Nav/Nav';
import ShopListHeader from './ShopListHeader';
import ShopListMain from './ShopListMain';
import Footer from '../../components/Footer/Footer';
// import { FILTER_LIST_URL } from './config.js';

class CategoriList extends React.Component {
  constructor() {
    super();
    this.state = {
      add: [],
    };
  }

  componentDidMount() {
    fetch(`http://10.58.0.96:8000/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          add: res,
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
    const { categori } = this.props.location.state;
    // const { add } = this.state;
    console.log(this.props);
    return (
      <div className="shopList">
        <Nav />
        <ShopListHeader />
        {categori.restaurant &&
          categori.restaurant.map(list => {
            return (
              <ShopListMain
                key={list.id}
                shopId={list.id}
                shopName={list.name}
                // shopImage={list.review.image}
                shopRating={list.rating.rating__avg}
                shopAddress={list.address}
                isWished={list.is_wished}
                buttonToggle={list.btn_toggle}
                // userName={list.review.user_name}
                // userReview={list.review.description}
                // handler
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

export default CategoriList;
