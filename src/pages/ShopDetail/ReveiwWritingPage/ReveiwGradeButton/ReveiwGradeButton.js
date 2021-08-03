import React from 'react';
import './ReveiwGradeButton.scss';

class ReveiwGradeButton extends React.Component {
  render() {
    const { SelectGrade, gradeIconSrc } = this.props;
    let GoodOrBad = '';
    let classname = '';
    switch (gradeIconSrc) {
      case 51:
        GoodOrBad = '맛있다';
        classname = 'GradeButtonOnText';
        break;
      case 50:
        GoodOrBad = '맛있다';
        break;
      case 31:
        GoodOrBad = '괜찮다';
        classname = 'GradeButtonOnText';
        break;
      case 30:
        GoodOrBad = '괜찮다';
        break;
      case 11:
        GoodOrBad = '별로';
        classname = 'GradeButtonOnText';
        break;
      case 10:
        GoodOrBad = '별로';
        break;
    }
    return (
      <button className="RestaurantReveiwGradeButton" onClick={SelectGrade}>
        <img alt="gradeIcon" src={`/images/shopDetail/${gradeIconSrc}.svg`} />
        <span className={classname}> {GoodOrBad}</span>
      </button>
    );
  }
}

export default ReveiwGradeButton;
