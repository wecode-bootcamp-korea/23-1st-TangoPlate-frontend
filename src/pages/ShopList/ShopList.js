import React from 'react';
import Nav from '../../components/Nav/Nav';
import ShopListHeader from './ShopListHeader';
import ShopListMain from './ShopListMain';
import Footer from '../../components/Footer/Footer';

class ShopList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shopInfo: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.0.54:8000/restaurants?category=3')
      // fetch('http://172.16.2.214:8000/restaurants/search?search=초밥')
      .then(res => res.json())
      .then(res => this.setState({ shopInfo: res.restaurant }));
    // fetch('/data/shopData.json')
    // .then(res => res.json())
    // .then(res => this.setState({ shopInfo: res }));
  }

  buttonHandler = e => {
    const changeList = [...this.state.shopInfo];
    changeList.map(el => {
      if (Number(e.target.name) === el.id) {
        console.log('aaa');
        el.btn_toggle = !el.btn_toggle;
      }
    });
    this.setState({
      shopInfo: changeList,
    });
  };

  likeHandler = e => {
    const changeList = [...this.state.shopInfo];
    changeList.map(el => {
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
        {shopInfo &&
          shopInfo.map(list => {
            return (
              <ShopListMain
                //mock data key
                // id={list.id}
                // img={list.img}
                // shopName={list.shopName}
                // shopRate={list.shopRate}
                // shopAddress={list.shopAddress}
                // userPic={list.userPic}
                // userId={list.userId}
                // userReview={list.userReview}
                // isLiked={list.isLiked}
                // buttonToggle={list.buttonToggle}
                //back data key
                shopId={list.id}
                shopName={list.name}
                shopRating={list.rating}
                shopAddress={list.address}
                isWished={list.is_wished}
                buttonToggle={list.btn_toggle}
                reviewId={list.review_id}
                userId={list.user_id}
                userName={list.user_name}
                userReview={list.description}
                //handler
                likeHandle={this.likeHandler}
                buttonHandle={this.buttonHandler}
              />
            );
          })}
        <Footer />
      </div>
    );
  }
}

export default ShopList;
