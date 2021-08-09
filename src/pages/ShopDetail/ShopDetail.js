import React from 'react';
import { REVIEW_URL } from '../../config';
import RestaurantReview from './RestaurantReview/RestaurantReview';
import RestaurantInfo from './RestaurantInfo/RestaurantInfo';
import './ShopDetail.scss';

class ShopDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wanted: false,
      data: [],
      updateReviewdata: [],
      quantity: 9,
      moreButtonHidden: false,
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
    let updateReviewdata = [];
    for (let i = 0; i <= 4; i++) {
      if (response.results[0].review[i]) {
        updateReviewdata = updateReviewdata.concat(
          response.results[0].review[i]
        );
      }
    }

    this.setState({
      data: response.results[0],
      updateReviewdata: [...updateReviewdata],
    });
  };

  moreButton = () => {
    const { data, quantity } = this.state;
    let updateReviewdata = [];
    let reveiw = [...data.review];
    if (reveiw.length > quantity) {
      for (let i = 0; i <= quantity; i++) {
        updateReviewdata = updateReviewdata.concat(data.review[i]);
      }
      this.setState({
        updateReviewdata: [...updateReviewdata],
        quantity: quantity + 5,
      });
    } else if (4 > quantity - reveiw.length > 0) {
      for (let i = quantity - 4; i < reveiw.length; i++) {
        updateReviewdata = updateReviewdata.concat(data.review[i]);
      }
      let remain = [...this.state.updateReviewdata];
      remain = remain.concat(updateReviewdata);
      this.setState({
        updateReviewdata: [...remain],
        quantity: quantity + 4,
        moreButtonHidden: true,
      });
    }
  };
  // mock data
  // componentDidMount() {
  //   fetch('http://localhost:3000/data/restaurantdetail.json')
  //     .then(res => res.json())
  //     .then(response => {
  //       // console.log(response);
  //       let updateReviewdata = [];
  //       for (let i = 0; i <= 4; i++) {
  //         if (response.results[0].review[i]) {
  //           updateReviewdata = updateReviewdata.concat(
  //             response.results[0].review[i]
  //           );
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
    fetch(REVIEW_URL, {
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
              moreButtonHidden: true,
            });
          }
        }

        this.setState({
          data: response.results[0],
          updateReviewdata: [...updateReviewdata],
        });
      });
  }

  render() {
    const { data, updateReviewdata, moreButtonHidden } = this.state;
    const { name, is_wished, rating } = data;
    console.log(updateReviewdata);
    const reviews =
      updateReviewdata &&
      updateReviewdata.map(({ description, created_at, images, rating }) => {
        return (
          <RestaurantReview
            description={description}
            created_at={created_at}
            images={images}
            rating={rating}
            handleDelete={this.handleDelete}
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
