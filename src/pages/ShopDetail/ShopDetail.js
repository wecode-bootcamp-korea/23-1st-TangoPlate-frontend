import React from 'react';
import { RESTAURANT_DETAIL_URL, WISH_URL } from '../../config';
import RestaurantReview from './RestaurantReview/RestaurantReview';
import RestaurantInfo from './RestaurantInfo/RestaurantInfo';
import './ShopDetail.scss';

class ShopDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      updateReviewdata: [],
      quantity: 9,
      isMoreButtonHidden: false,
      wanted: false,
    };
  }
  goToWrtingPage = () => {
    if (!localStorage.getItem('token')) {
      alert('로그인이 필요합니다 !');
    } else {
      const edit = false;
      this.props.history.push(
        '/shopdetail-reviewwritingpage',
        this.state.data.id,
        edit
      );
    }
  };

  handleWanted = () => {
    if (!this.state.wanted) {
      fetch(`${WISH_URL}${this.state.data.id}/wish`, {
        method: 'POST',
        headers: { authorization: localStorage.getItem('token') },
      })
        .then(response => response.json())
        .then(response => {
          console.log(response);
          this.getData();
        });
    } else {
      fetch(`${WISH_URL}${this.state.data.id}/wish`, {
        method: 'DELETE',
        headers: { authorization: localStorage.getItem('token') },
      })
        .then(response => response.json())
        .then(response => this.getData());
    }
  };

  handleDelete = response => {
    let Reviewdata = [];
    for (let i = 0; i <= 4; i++) {
      if (response.results.reviews[i]) {
        Reviewdata = Reviewdata.concat(response.result.reviews[i]);
      }
    }
    this.setState({
      data: response.result,
      updateReviewdata: [...Reviewdata],
    });
  };

  moreButton = () => {
    const { data, quantity } = this.state;
    let reviewlength = [];
    reviewlength = reviewlength.concat(data.reviews);
    let Reviewdata = [];
    if (reviewlength.length > quantity) {
      for (let i = 0; i <= quantity; i++) {
        Reviewdata = Reviewdata.concat(data.reviews[i]);
      }
      this.setState({
        updateReviewdata: [...Reviewdata],
        quantity: quantity + 5,
      });
    } else if (4 > quantity - reviewlength.length > 0) {
      for (let i = quantity - 4; i < reviewlength.length; i++) {
        Reviewdata = Reviewdata.concat(data.reviews[i]);
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
    this.getData();
  }

  getData = () => {
    console.log(this.props.match.params.id);

    fetch(RESTAURANT_DETAIL_URL)
      .then(res => res.json())
      .then(response => {
        let updateReviewdata = [];
        for (let i = 0; i <= 4; i++) {
          if (response.result.reviews[i]) {
            updateReviewdata = updateReviewdata.concat(
              response.result.reviews[i]
            );
          }
          if (response.result.reviews.length <= 5) {
            this.setState({
              isMoreButtonHidden: true,
            });
          }
        }
        this.setState({
          data: response.result,
          updateReviewdata: [...updateReviewdata],
          wanted: response.result.is_wished,
        });
      });
  };

  render() {
    console.log(this.state.data);
    const { data, updateReviewdata, isMoreButtonHidden } = this.state;
    const { name, rating, is_wished } = data;
    const reviews = updateReviewdata.map(
      ({ description, created_at, images_url, rating, id, user }) => {
        return (
          <RestaurantReview
            key={id}
            review_id={id}
            user={user}
            Restaurantid={data.id}
            description={description}
            created_at={created_at}
            images={images_url}
            rating={rating}
            handleDelete={this.handleDelete}
            getData={this.getData}
          />
        );
      }
    );
    const reveiwimages = updateReviewdata.map(({ images_url }) => {
      return <img alt="스시작이미지" src={images_url} />;
    });
    return (
      <div className="shopDetail">
        <div>
          <aside className="foodimg">
            {/* <img alt="스시작이미지" src="/images/shopDetail/1.jpeg" />
            <img alt="스시작이미지" src="/images/shopDetail/2.jpeg" />
            <img alt="스시작이미지" src="/images/shopDetail/3.jpeg" />
            <img alt="스시작이미지" src="/images/shopDetail/4.jpeg" /> */}
            {reveiwimages}
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
                className="reviewAndLikeIcon write"
                onClick={this.goToWrtingPage}
              >
                <i className="far fa-edit "></i>
                리뷰쓰기
              </button>
              <button
                className={`reviewAndLikeIcon write ${
                  is_wished ? 'isWanted' : ''
                }`}
                onClick={this.handleWanted}
              >
                <i className={is_wished ? 'fas fa-star' : 'far fa-star'}></i>
                가고싶다
              </button>
            </div>
          </header>
          <RestaurantInfo data={data} />
          <h2 className="restaurantReviewList">
            <span> 리뷰</span>
            <span className="reviewAllCount">({updateReviewdata.length})</span>
          </h2>
          {reviews}
          <div className={isMoreButtonHidden ? 'more hidden' : 'more'}>
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
