import React from 'react';
import './SlideButton.scss';

class SlideButton extends React.Component {
  render() {
    return (
      <>
        <div
          onClick={this.props.click}
          className={this.props.rightButton ? 'clickRight' : 'clickRightHidden'}
        >
          <i className="fas fa-chevron-right"></i>
        </div>
        <div
          onClick={this.props.click}
          className={this.props.rightButton ? 'clickLeftHidden' : 'clickLeft'}
        >
          <i className="fas fa-chevron-left"></i>
        </div>
      </>
    );
  }
}

export default SlideButton;
