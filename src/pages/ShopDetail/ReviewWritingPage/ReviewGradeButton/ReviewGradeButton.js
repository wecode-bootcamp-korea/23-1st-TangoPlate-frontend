import React from 'react';
import './ReviewGradeButton.scss';

class ReviewGradeButton extends React.Component {
  render() {
    const { SelectGrade, gradeIconSrc, isButtonClicked, content } = this.props;

    return (
      <div>
        <button className="reviewGradeButton" onClick={SelectGrade}>
          <img alt="gradeIcon" src={`/images/shopDetail/${gradeIconSrc}.svg`} />
          <span className={isButtonClicked ? 'gradeButtonOnText' : ''}>
            {content}
          </span>
        </button>
      </div>
    );
  }
}

export default ReviewGradeButton;
