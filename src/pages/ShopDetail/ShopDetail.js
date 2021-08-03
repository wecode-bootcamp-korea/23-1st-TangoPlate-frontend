import React from 'react';
import './ShopDetail.scss';
import RestaurantReview from './RestaurantReview/RestaurantReview';
import RestaurantInfo from './RestaurantInfo/RestaurantInfo';
class ShopDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wanted: false,
    };
  }
  goToWrtingPage = e => {
    this.props.history.push('/ShopDetail-reveiwWritingPage');
  };

  wanted = () => {
    this.setState({
      wanted: !this.state.wanted,
    });
  };
  render() {
    const { wanted } = this.state;
    return (
      <div className="ShopDetail">
        <div>
          <aside className="foodimg">
            <img alt="스시작이미지" src="/images/shopDetail/1.jpeg" />
            <img alt="스시작이미지" src="/images/shopDetail/2.jpeg" />
            <img alt="스시작이미지" src="/images/shopDetail/3.jpeg" />
            <img alt="스시작이미지" src="/images/shopDetail/4.jpeg" />
          </aside>
        </div>
        <div className="inner">
          <header className="restaurantHeader">
            <div className="restaurantTitle">
              <span>스시작</span>
              <span className="grade">4.7</span>
            </div>
            <div className="restaurantTitleButton">
              <button
                className="reveiwAndLikeIcon write"
                onClick={this.goToWrtingPage}
              >
                <i className="far fa-edit "></i>
                리뷰쓰기
              </button>
              <button
                className={
                  wanted ? ' reveiwAndLikeIcon wanted' : 'reveiwAndLikeIcon'
                }
                onClick={this.wanted}
              >
                <i className={wanted ? 'fas fa-star ' : 'far fa-star'}></i>
                가고싶다
              </button>
            </div>
          </header>
          <RestaurantInfo />
          <h2 class="RestaurantReviewList">
            <span class="RestaurantNameSuffix"> 리뷰</span>
            <span class="reviewAllCount">(13)</span>
          </h2>
          <RestaurantReview />
          <RestaurantReview />
        </div>
      </div>
    );
  }
}

export default ShopDetail;
