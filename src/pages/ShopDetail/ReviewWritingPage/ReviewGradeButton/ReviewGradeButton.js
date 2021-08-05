import React from 'react';
import './ReviewGradeButton.scss';

class ReviewGradeButton extends React.Component {
  render() {
    const { SelectGrade, gradeIconSrc, isButtonClicked, content } = this.props;

    return (
      <button className="reviewGradeButton" onClick={SelectGrade}>
        <img alt="gradeIcon" src={`/images/shopDetail/${gradeIconSrc}.svg`} />
        <span className={isButtonClicked ? 'gradeButtonOnText' : ''}>
          {content}
        </span>
      </button>
    );
  }
}

export default ReviewGradeButton;
