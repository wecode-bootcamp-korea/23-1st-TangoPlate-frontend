import React from 'react';
import { withRouter } from 'react-router';
import { NEWREVIEW_URL } from '../../../config';
import Button from '../../Login/InputContainer/Button/Button';
import ReviewGradeButton from '../ReviewWritingPage/ReviewGradeButton/ReviewGradeButton';
import './RestaurantReview.scss';

class RestaurantReview extends React.Component {
  handleEdit = e => {
    const { description, rating, images, review_id, Restaurantid, name } =
      this.props;
    const edit = true;
    if (e.target.name === '수정') {
      this.props.history.push('/shopdetail-reviewwritingpage', {
        description,
        images,
        rating,
        review_id,
        Restaurantid,
        edit,
        name,
      });
    }
    if (e.target.name === '삭제') {
      if (window.confirm('삭제하실건가요?')) {
        fetch(`${NEWREVIEW_URL}${Restaurantid}/review/${review_id}`, {
          method: 'DELETE',
          headers: { authorization: localStorage.getItem('token') },
        })
          .then(response => response.json())
          .then(response => {
            this.props.getData();
          });
      }
    }
  };
  render() {
    const { description, created_at, images, rating, user } = this.props;
    const IsUser = localStorage.getItem('email') === user.email;

    return (
      <li className="review">
        <div className="reviewUser">
          <div className="reviewUserPictureWrap">
            <img
              className="reviewUserPicture"
              // src={images}
              src="/images/shopDetail/도현님.png"
              alt="userimg"
            />
          </div>
          <span className="reviewUserNickName">{user.name}</span>
        </div>

        <div className="reviewContent">
          <div className="reviewTextWrap">
            <p className="reviewDate">{created_at}</p>
            <span className="reviewRatingText">
              <ReviewGradeButton gradeIconSrc={rating * 10 + 1} />
            </span>
          </div>
          <p className="reviewText">{description}</p>
          <img
            className="reviewimg"
            src={images}
            // src="/images/shopDetail/도현님.png"
            alt="reviewimg"
          />
        </div>
        <div
          className={
            IsUser ? 'reviewItemOptionButton' : 'reviewItemOptionButton hidden'
          }
        >
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
