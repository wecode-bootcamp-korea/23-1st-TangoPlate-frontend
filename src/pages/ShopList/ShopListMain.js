import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ShopListMain.scss';

export class ShopListMain extends Component {
  render() {
    const {
      shopId,
      shopName,
      shopImage,
      shopRating,
      shopAddress,
      buttonToggle,
      isWished,
      userName,
      userReview,
      // handler
      likeHandle,
      buttonHandle,
      index,
    } = this.props;
    return (
      <div className="shopListMain">
        <main>
          <img className="reviewPicture" alt="식당 사진" src={shopImage} />
          <div className="reviewContainer">
            <div className="reviewInner">
              <div className="reviewTitleWrapper">
                <div className="shopTitle">
                  {index + 1}. {shopName} <span>{shopRating}</span>
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
              <img className="userPic" src="./images/foodSample.jpg" alt=" " />
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
