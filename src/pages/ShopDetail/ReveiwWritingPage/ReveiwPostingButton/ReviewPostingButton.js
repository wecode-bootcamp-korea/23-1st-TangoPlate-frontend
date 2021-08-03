import React from 'react';
import './ReviewPostingButton.scss';

class ReviewPostingButton extends React.Component {
  render() {
    const { Buttontype } = this.props;
    return (
      <div className="ReviewPostingButtonWrap">
        <button className="ReviewPostingButton">{Buttontype}</button>
      </div>
    );
  }
}

export default ReviewPostingButton;
