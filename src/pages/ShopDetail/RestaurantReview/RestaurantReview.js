import React from 'react';
import './RestaurantReview.scss';
import ReveiwGradeButton from '../ReveiwWritingPage/ReveiwGradeButton/ReveiwGradeButton';

class RestaurantReview extends React.Component {
  render() {
    return (
      <li className="RestaurantReview">
        <div className="RestaurantReviewUser">
          <div className="RestaurantReviewUserPictureWrap">
            <img
              className="RestaurantReviewUserPicture"
              src="/images/shopDetail/도현님.png"
            />
          </div>
          <span className="RestaurantReviewUserNickName">DohyunNim</span>
        </div>

        <div className="RestaurantReviewContent">
          <div className="RestaurantReviewTextWrap">
            <span className="RestaurantReviewDate">14 시간 전</span>
            <span className="RestaurantReviewRatingText">
              <ReveiwGradeButton gradeIconSrc={51} />
            </span>
          </div>
          <p className="RestaurantReviewText">너무 맛있어 !</p>
        </div>
      </li>
    );
  }
}

export default RestaurantReview;
