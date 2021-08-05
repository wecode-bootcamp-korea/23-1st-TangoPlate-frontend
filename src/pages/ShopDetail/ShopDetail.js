import React from 'react';
import { REVIEW_URL } from '../../config';
import RestaurantReview from './RestaurantReview/RestaurantReview';
import RestaurantInfo from './RestaurantInfo/RestaurantInfo';
import './ShopDetail.scss';

class ShopDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // wanted: false,
      data: [],
    };
  }
  goToWrtingPage = e => {
    this.props.history.push('/shopdetail-reviewwritingpage');
  };

  // handleWanted = () => {
  //   this.setState({
  //     wanted: !this.state.wanted,
  //   });
  // };

  componentDidMount() {
    fetch(REVIEW_URL, {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(response => {
        this.setState({
          data: response.results[0],
        });
      });
  }

  render() {
    const { data } = this.state;
    const { name, rating, is_wished, review } = data;
    const reviews =
      review &&
      review.map(({ description, created_at, images }) => {
        return (
          <RestaurantReview
            description={description}
            created_at={created_at}
            images={images}
          />
        );
      });

    return (
      <div className="shopDetail">
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
              <span>{name}</span>
              <span className="grade">{rating}</span>
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
                className={`reviewAndLikeIcon ${is_wished ? 'wanted' : ''}`}
                onClick={this.handleWanted}
              >
                <i className={is_wished ? 'fas fa-star ' : 'far fa-star'}></i>
                가고싶다
              </button>
            </div>
          </header>
          <RestaurantInfo data={data} />
          <h2 className="restaurantReviewList">
            <span> 리뷰</span>
            <span className="reviewAllCount">(13)</span>
          </h2>
          {reviews}
        </div>
      </div>
    );
  }
}

export default ShopDetail;
