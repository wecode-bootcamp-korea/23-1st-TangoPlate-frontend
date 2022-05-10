import React from 'react';
// import Nav from '../../components/Nav/Nav';
import ShopListHeader from './ShopListHeader';
import ShopListMain from './ShopListMain';
import Footer from '../../components/Footer/Footer';
import { FILTER_LIST_URL } from '../../config';

class ShopList extends React.Component {
  constructor() {
    super();
    this.state = {
      shopInfo: [],
      updateShopInfo: [],
      categoryLength: 0,
      locationLength: 0,
      category: 0,
      location: 0,
      index: 0,
    };
  }

  componentDidMount() {
    console.log(this.props.match.params);
    if (this.props.location.state === true) {
      fetch(FILTER_LIST_URL + '?categoryId')
        .then(res => res.json())
        .then(res => {
          this.setState({ shopInfo: res.restaurant });
        });
    } else {
      let url = this.props.match.params.id
        ? `search?search=${this.props.match.params.id}`
        : this.props.location.search;
      console.log(FILTER_LIST_URL + url);
      fetch(FILTER_LIST_URL + url)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.setState({
            shopInfo: res,
          });
        });
    }
  }

  handleCategoryButton = e => {
    console.log('카테고리버튼');
    if (!this.state.category && !this.state.location) {
      fetch(FILTER_LIST_URL + `?categoryId=${e.target.id}`)
        .then(res => res.json())
        .then(res => {
          this.setState({
            updateShopInfo: res.restaurant,
            category: e.target.id,
            categoryLength: res.restaurant.length,
          });
        });
    } else if (
      this.state.category !== e.target.id &&
      this.state.category !== 0
    ) {
      return;
    } else if (this.state.category === e.target.id) {
      this.setState({
        category: 0,
      });
      if (this.state.location) {
        let sliceData = [...this.state.updateShopInfo];
        const sliceDatas =
          this.state.index === 2
            ? sliceData.slice(0, this.state.locationLength)
            : sliceData.slice(this.state.categoryLength - 1);
        this.setState({
          updateShopInfo: sliceDatas,
        });
      }
    } else if (this.state.location) {
      fetch(FILTER_LIST_URL + `?categoryId=${e.target.id}`)
        .then(res => res.json())
        .then(res => {
          let updateShopInfo = [...this.state.updateShopInfo];
          updateShopInfo = updateShopInfo.concat(res.restaurant);
          this.setState({
            updateShopInfo: updateShopInfo,
            category: e.target.id,
            index: 2,
          });
        });
    }
  };

  handleLocationButton = e => {
    console.log('로케이션버튼');
    if (!this.state.category && !this.state.location) {
      fetch(FILTER_LIST_URL + `?locationId=${e.target.id}`)
        .then(res => res.json())
        .then(res => {
          console.log('res', res);
          this.setState({
            updateShopInfo: res.restaurant,
            location: e.target.id,
            locationLength: res.restaurant.length,
          });
        });
    } else if (
      this.state.location !== e.target.id &&
      this.state.location !== 0
    ) {
      return;
    } else if (this.state.location === e.target.id) {
      this.setState({
        location: 0,
      });
      if (this.state.category) {
        let sliceData = [...this.state.updateShopInfo];
        const sliceDatas =
          this.state.index === 2
            ? sliceData.slice(this.state.locationLength - 1)
            : sliceData.slice(0, this.state.categoryLength);
        this.setState({
          updateShopInfo: sliceDatas,
        });
      }
    } else if (this.state.category) {
      fetch(FILTER_LIST_URL + `?locationId=${e.target.id}`)
        .then(res => res.json())
        .then(res => {
          let updateShopInfo = [...this.state.updateShopInfo];

          updateShopInfo = updateShopInfo.concat(res.restaurant);

          this.setState({
            updateShopInfo: updateShopInfo,
            location: e.target.id,
            index: 1,
          });
        });
    }
  };

  handleButton = e => {
    console.log('더보기');
    let update = [];
    update =
      this.state.category || this.state.location
        ? this.state.updateShopInfo
        : this.state.shopInfo;
    const changeList = [...update];
    changeList.forEach(el => {
      if (Number(e.target.name) === el.id) {
        el.btn_toggle = !el.btn_toggle;
      }
    });
    this.state.category || this.state.location
      ? this.setState({
          updateShopInfo: changeList,
        })
      : this.setState({
          shopInfo: changeList,
        });
  };

  handleWishButton = e => {
    console.log('위시');
    let update = [];
    update =
      this.state.category || this.state.location
        ? [...this.state.updateShopInfo]
        : [...this.state.shopInfo];
    const changeList = update;
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
    console.log('들어와라', this.state.shopInfo);
    let update = [];
    if (this.props.location.state === true) {
      update =
        this.state.category || this.state.location
          ? [...this.state.updateShopInfo]
          : [...this.state.shopInfo];
      update.sort((a, b) => {
        return b.rating - a.rating;
      });
    }
    const { shopInfo } = this.state;
    console.log(shopInfo.MESSAGE);
    console.log(shopInfo.restaurant);
    return (
      <div className="shopList">
        {/* <Nav /> */}
        <ShopListHeader
          handleCategoryButton={this.handleCategoryButton}
          handleLocationButton={this.handleLocationButton}
          shopInfo={update.length}
          hidden={this.props.location.state}
          toggleLocation={this.state.location}
          toggleCategory={this.state.category}
        />
        {shopInfo.MESSAGE &&
          shopInfo.MESSAGE.map((list, index) => {
            return (
              <ShopListMain
                key={list.id}
                index={index}
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
          shopInfo.restaurant.map((list, index) => {
            return (
              <ShopListMain
                key={list.id}
                shopId={list.id}
                shopName={list.name}
                shopImage={list.latest_review.image}
                shopRating={list.rating.rating__avg}
                shopAddress={list.address}
                isWished={list.is_wished}
                buttonToggle={list.btn_toggle}
                userName={list.latest_review.user_name}
                userReview={list.latest_review.description}
                index={index}
                likeHandle={this.handleWishButton}
                buttonHandle={this.handleButton}
              />
            );
          })}
        {update &&
          update.map((list, index) => {
            return (
              <ShopListMain
                index={index}
                key={index}
                shopId={list.id}
                shopName={list.name}
                shopImage={list.latest_review.image}
                shopRating={list.rating.rating__avg}
                shopAddress={list.address}
                isWished={list.is_wished}
                buttonToggle={list.btn_toggle}
                userName={list.latest_review.user_name}
                userReview={list.latest_review.description}
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
