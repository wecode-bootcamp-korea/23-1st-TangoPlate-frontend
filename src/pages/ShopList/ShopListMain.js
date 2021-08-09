import React, { Component } from 'react';
import './ShopListMain.scss';
import { Link } from 'react-router-dom';

export class ShopListMain extends Component {
  render() {
    const {
      //mock data
      // id
      // img
      // shopName
      // shopRate
      // shopAddress
      // userPic
      // userId
      // userReview
      // isLiked
      // buttonToggle
      shopId,
      shopName,
      shopRating,
      shopAddress,
      buttonToggle,
      isWished,
      // reviewId,
      // userId,
      userName,
      userReview,
      // handler
      likeHandle,
      buttonHandle,
    } = this.props;
    return (
      <div className="shopListMain">
        <main>
          <img
            className="reviewPicture"
            src="images/foodSample.jpg"
            alt="식당 사진"
          />
          <div className="reviewContainer">
            <div className="reviewInner">
              <div className="reviewTitleWrapper">
                <div className="shopTitle">
                  {shopId}. {shopName} <span>{shopRating}</span>
                </div>
                <span className="shopAddress">{shopAddress}</span>
              </div>
              <div className="wannaGoWrapper">
                <span>
                  <i
                    onClick={likeHandle}
                    id={shopId}
                    className={isWished ? 'fas fa-star' : 'far fa-star'}
                  ></i>
                </span>

                <div>가고싶다</div>
              </div>
            </div>
            <div className="reviewWrapper">
              <img className="userPic" src="./images/foodsample.jpg" alt=" " />
              <div className="reviewDetail">
                <p className="userReview">
                  <span className="userId">{userName}</span>
                  <span
                    className={
                      buttonToggle ? 'reviewWrapperOpen' : 'reviewWrapperClose'
                    }
                  >
                    {userReview}
                  </span>
                </p>
                <button
                  name={shopId}
                  className="moreReviewButton"
                  onClick={buttonHandle}
                >
                  {buttonToggle ? '줄이기' : '더보기'}
                </button>
              </div>
            </div>
            <h3 className="goToDetail">
              <span>
                <Link to="#">
                  {shopName} 더보기 {'>'}
                </Link>
              </span>
            </h3>
          </div>
        </main>
      </div>
    );
  }
}

export default ShopListMain;
