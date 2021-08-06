import React from 'react';
import { withRouter } from 'react-router';
import Button from '../../Login/InputContainer/Button/Button';
import ReviewGradeButton from '../ReviewWritingPage/ReviewGradeButton/ReviewGradeButton';
import './RestaurantReview.scss';

class RestaurantReview extends React.Component {
  handleEdit = e => {
    const { description, images } = this.props;
    console.log('수정', e.target.name);
    if (e.target.name === '수정') {
      this.props.history.push('/shopdetail-reviewwritingpage', {
        description,
        images,
      });
    }
    if (e.target.name === '삭제') {
      alert('삭제하실건가요?');
    }
  };
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
        <div className="reviewItemOptionButton">
          <Button
            className="reviewItemEditButton"
            buttonName="수정"
            goTo={this.handleEdit}
          />
          <Button
            className="reviewItemEditButton"
            buttonName="삭제"
            goTo={this.handleEdit}
          />
        </div>
      </li>
    );
  }
}

export default withRouter(RestaurantReview);
