import React from 'react';
import { withRouter } from 'react-router-dom';
import { NEWREVIEW_URL } from '../../../config';
import ReviewGradeButton from './ReviewGradeButton/ReviewGradeButton';
import InputBox from '../../Login/InputContainer/InputBox/InputBox';
import Button from '../../Login/InputContainer/Button/Button';
import './ReviewWritingPage.scss';

class ReviewWritingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grade: 5,
      reviewEditorText: '',
      img: '',
      edit: false,
    };
  }

  SelectGrade = score => {
    this.setState({
      grade: score,
    });
  };

  postingOrCancel = e => {
    const { reviewEditorText, img } = this.state;
    if (e.target.name === '취소') {
      this.props.history.push('/shopdetail');
    } else if (this.state.edit) {
      fetch(NEWREVIEW_URL, {
        method: 'PUT',
        body: JSON.stringify({ description: reviewEditorText, image: img }),
        headers: { authorization: localStorage.getItem('token') },
      })
        .then(response => response.json())
        .then(response => {
          console.log(response);
        });
    } else {
      fetch(NEWREVIEW_URL, {
        method: 'POST',
        body: JSON.stringify({ description: reviewEditorText, image: img }),
        headers: { authorization: localStorage.getItem('token') },
      })
        .then(response => response.json())
        .then(response => {
          console.log(response);
        });
    }
    this.props.history.push('/shopdetail');
  };

  changeState = (name, value) => {
    this.setState({ [name]: value });
  };

  componentDidMount() {
    console.log(this.props.location);
    if (this.props.location.state) {
      const { description, images } = this.props.location.state;
      this.setState({
        reviewEditorText: description,
        img: images,
        edit: !this.state.edit,
      });
    }
  }

  render() {
    const { grade } = this.state;
    const { SelectGrade, postingOrCancel, changeState } = this;
    console.log(this.props.location.state);
    return (
      <section className="reviewWritingPage">
        <div className="reviewWritingPageInner">
          <div className="reviewWritingPageTitle">
            <strong className="restaurantName">스시작</strong>
            <span className="subMessage">에 대한 솔직한 리뷰를 써주세요.</span>
          </div>
          <div className="reviewBox">
            <div className="reviewGrade">
              <ReviewGradeButton
                SelectGrade={() => SelectGrade(5)}
                gradeIconSrc={grade === 5 ? 51 : 50}
                isButtonClicked={grade === 5}
                content={'맛있다'}
              />
              <ReviewGradeButton
                SelectGrade={() => SelectGrade(3)}
                gradeIconSrc={grade === 3 ? 31 : 30}
                isButtonClicked={grade === 3}
                content={'괜찮다'}
              />
              <ReviewGradeButton
                SelectGrade={() => SelectGrade(1)}
                gradeIconSrc={grade === 1 ? 11 : 10}
                isButtonClicked={grade === 1}
                content={'별로'}
              />
            </div>
            <div className="reviewMessage">
              <textarea
                className="reviewEditor"
                onChange={e => changeState('reviewEditorText', e.target.value)}
                maxlength="10000"
                value={this.state.reviewEditorText}
                required
                placeholder="최정민님, 주문하신 메뉴는 어떠셨나요? 식당의 분위기와 서비스도 궁금해요!"
              ></textarea>
            </div>
          </div>
          <p className="reviewEditorTextLengthBox">
            <span className="reviewEditorCurrentTextLength">0</span>
            <span className="reviewEditorTextLengthDivider">/</span>
            <span className="reviewEditorMaxTextLength">10,000</span>
          </p>

          <InputBox
            name="img"
            type="text"
            placeholder="사진첨부를 하려면 이미지 URL을 입력하세요"
            changeState={e => changeState('img', e.target.value)}
            goTo={e => e.preventDefault()}
            value={this.state.img}
          />

          <div className="reviewPostingButtonWrap">
            <Button
              buttonName="리뷰 올리기"
              className="reviewPostingButton"
              name="리뷰올리기"
              goTo={postingOrCancel}
            />
            <Button
              buttonName="취소"
              name="취소"
              className="reviewPostingButton"
              goTo={postingOrCancel}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(ReviewWritingPage);
