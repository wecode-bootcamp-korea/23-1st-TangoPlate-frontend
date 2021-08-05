import React from 'react';
import ReviewGradeButton from '../ReviewWritingPage/ReviewGradeButton/ReviewGradeButton';
import './RestaurantReview.scss';

class RestaurantReview extends React.Component {
  render() {
    const { description, created_at, images } = this.props;
    return (
      <li className="review">
        <div className="reviewUser">
          <div className="reviewUserPictureWrap">
            <img
              className="reviewUserPicture"
              src={images}
              // src="/images/shopDetail/도현님.png"
              alt="userimg"
            />
          </div>
          <span className="reviewUserNickName">DohyunNim</span>
        </div>

        <div className="reviewContent">
          <div className="reviewTextWrap">
            <span className="reviewDate">{created_at}</span>
            <span className="reviewRatingText">
              <ReviewGradeButton gradeIconSrc={51} />
            </span>
          </div>
          <p className="reviewText">{description}</p>
        </div>
      </li>
    );
  }
}

export default RestaurantReview;
