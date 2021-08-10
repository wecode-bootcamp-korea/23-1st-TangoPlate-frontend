import React from 'react';
import { withRouter } from 'react-router';
import { NEWREVIEW_URL } from '../../../config';
import Button from '../../Login/InputContainer/Button/Button';
import ReviewGradeButton from '../ReviewWritingPage/ReviewGradeButton/ReviewGradeButton';
import './RestaurantReview.scss';

class RestaurantReview extends React.Component {
  handleEdit = e => {
    const { description, rating, images, review_id, Restaurantid } = this.props;

    if (e.target.name === '수정') {
      this.props.history.push('/shopdetail-reviewwritingpage', {
        description,
        images,
        rating,
        review_id,
        Restaurantid,
      });
    }
    if (e.target.name === '삭제') {
      if (window.confirm('삭제하실건가ㄴ요?')) {
        fetch(NEWREVIEW_URL, {
          method: 'DELETE',
          headers: {
            authorization: localStorage.getItem('token'),
          },
        })
          .then(response => response.json())
          .then(response => {
            console.log(response);
            this.props.handleDelete(response);
            // let updateReviewdata = [];
            // for (let i = 0; i <= 4; i++) {
            //   if (!response.results[0].review[i]) {
            //     updateReviewdata = [];
            //   } else if (response.results[0].review[i]) {
            //     updateReviewdata = updateReviewdata.concat(
            //       response.results[0].review[i]
            //     );
            //   }
            // }

            // this.props.handleWanted(response.results[0], updateReviewdata);
          });
      }

      // } else {
      //   console.log('안돼애ㅐ애');
      // }
    }
  };
  render() {
    const { description, created_at, images, rating, review_id, Restaurantid } =
      this.props;
    console.log('saas', review_id, Restaurantid);
    // console.log(images);
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
          <span className="reviewUserNickName">DohyunNim</span>
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
