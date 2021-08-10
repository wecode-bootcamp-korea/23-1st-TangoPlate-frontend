import React from 'react';
import { RESTAURANT_DETAIL_URL } from '../../config';
import RestaurantReview from './RestaurantReview/RestaurantReview';
import RestaurantInfo from './RestaurantInfo/RestaurantInfo';
import './ShopDetail.scss';

class ShopDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWanted: false,
      data: [],
      updateReviewdata: [],
      quantity: 9,
      isMoreButtonHidden: false,
    };
  }
  goToWrtingPage = () => {
    this.props.history.push('/shopdetail-reviewwritingpage');
  };

  //   handleWanted = () => {
  //     let update = [...this.state.data];
  //     update.
  // this.setState({

  // });
  //    is_wished
  //   };

  handleDelete = response => {
    let Reviewdata = [];
    for (let i = 0; i <= 4; i++) {
      if (response.results[0].review[i]) {
        Reviewdata = Reviewdata.concat(response.results[0].review[i]);
      }
    }

    this.setState({
      data: response.results[0],
      updateReviewdata: [...Reviewdata],
    });
  };

  moreButton = () => {
    const { data, quantity } = this.state;
    let reviewlength = [];
    reviewlength = reviewlength.concat(data.review);
    let Reviewdata = [];
    if (reviewlength.length > quantity) {
      for (let i = 0; i <= quantity; i++) {
        Reviewdata = Reviewdata.concat(data.review[i]);
      }
      this.setState({
        updateReviewdata: [...Reviewdata],
        quantity: quantity + 5,
      });
    } else if (4 > quantity - reviewlength.length > 0) {
      for (let i = quantity - 4; i < reviewlength.length; i++) {
        Reviewdata = Reviewdata.concat(data.review[i]);
      }
      let remain = [...this.state.updateReviewdata];
      remain = remain.concat(Reviewdata);
      this.setState({
        updateReviewdata: [...remain],
        quantity: quantity + 4,
        isMoreButtonHidden: true,
      });
    }
  };
  // mock data
  // componentDidMount() {
  //   fetch('/data/restaurantdetail.json')
  //     .then(res => res.json())
  //     .then(response => {
  //       let updateReviewdata = [];
  //       for (let i = 0; i <= 4; i++) {
  //         if (response.results[0].review[i]) {
  //           updateReviewdata = updateReviewdata.concat(
  //             response.results[0].review[i]
  //           );
  //         }
  //         if (response.results[0].review.length <= 5) {
  //           this.setState({
  //            isMoreButtonHidden: true,
  //           });
  //         }
  //       }

  //       this.setState({
  //         data: response.results[0],
  //         updateReviewdata: [...updateReviewdata],
  //       });
  //     });
  // }
  // server 연결
  componentDidMount() {
    fetch(RESTAURANT_DETAIL_URL, {
      headers: { authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(response => {
        let updateReviewdata = [];

        for (let i = 0; i <= 4; i++) {
          if (response.results[0].review[i]) {
            updateReviewdata = updateReviewdata.concat(
              response.results[0].review[i]
            );
          }
          if (response.results[0].review.length <= 5) {
            this.setState({
              isMoreButtonHidden: true,
            });
          }
        }

        this.setState({
          data: response.results[0],
          isMoreButtonHidden: [...updateReviewdata],
        });
      });
  }

  render() {
    const { data, updateReviewdata, moreButtonHidden } = this.state;
    const { name, is_wished, rating, id } = data;
    const reviews = updateReviewdata.map(
      ({ description, created_at, images, rating, review_id }) => {
        return (
          <RestaurantReview
            key={review_id}
            review_id={review_id}
            Restaurantid={id}
            description={description}
            created_at={created_at}
            images={images}
            rating={rating}
            handleDelete={this.handleDelete}
          />
        );
      }
    );

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
                className={`reviewAndLikeIcon ${is_wished ? 'isWanted' : ''}`}
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
          <div className={moreButtonHidden ? 'more hidden' : 'more'}>
            <button className="moreButton" onClick={this.moreButton}>
              5개 더보기 ▼
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopDetail;
