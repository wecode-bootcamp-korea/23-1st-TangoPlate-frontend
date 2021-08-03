import React from 'react';
import { withRouter } from 'react-router-dom';
import ReveiwGradeButton from './ReveiwGradeButton/ReveiwGradeButton';
import './ReveiwWritingPage.scss';
import ReviewPostingButton from './ReveiwPostingButton/ReviewPostingButton';
class ReveiwWritingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grade: 5,
      ReviewEditorText: '',
    };
  }

  SelectGrade = score => {
    this.setState({
      grade: score,
    });
  };

  ReviewEditorText = e => {
    this.setState({ ReviewEditorText: e.target.value });
  };

  render() {
    console.log(this.state.ReviewEditorText);
    const { grade } = this.state;
    return (
      <section className="ReveiwWritingPage">
        <div className="ReveiwWritingPageInner">
          <div className="ReviewWritingPageTitle">
            <strong className="RestaurantName">스시작</strong>
            <span className="RestaurantSubMessage">
              에 대한 솔직한 리뷰를 써주세요.
            </span>
          </div>
          <div className="RestaurantReveiwBox">
            <div className="RestaurantReveiwGrade">
              <ReveiwGradeButton
                SelectGrade={() => this.SelectGrade(5)}
                gradeIconSrc={grade === 5 ? 51 : 50}
              />
              <ReveiwGradeButton
                SelectGrade={() => this.SelectGrade(3)}
                gradeIconSrc={grade === 3 ? 31 : 30}
              />
              <ReveiwGradeButton
                SelectGrade={() => this.SelectGrade(1)}
                gradeIconSrc={grade === 1 ? 11 : 10}
              />
            </div>
            <div className="RestaurantReveiwMessage">
              <textarea
                className="ReviewEditor"
                onChange={this.ReviewEditorText}
                maxlength="10000"
                required
                placeholder="최정민님, 주문하신 메뉴는 어떠셨나요? 식당의 분위기와 서비스도 궁금해요!"
              ></textarea>
            </div>
          </div>
          <p className="ReviewEditorTextLengthBox">
            <span className="ReviewEditorCurrentTextLength">0</span>
            <span className="ReviewEditorTextLengthDivider">/</span>
            <span className="ReviewEditorMaxTextLength">10,000</span>
          </p>
          <ReviewPostingButton Buttontype="취소" />
          <ReviewPostingButton Buttontype="리뷰 올리기" />
        </div>
      </section>
    );
  }
}

export default withRouter(ReveiwWritingPage);
