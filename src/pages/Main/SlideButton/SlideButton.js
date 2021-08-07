import React from 'react';
import './SlideButton.scss';

class SlideButton extends React.Component {
  render() {
    const { click, isLeftSide } = this.props;
    return (
      <>
        <div
          onClick={click}
          className={`rightBtn ${isLeftSide ? '' : 'hidden'}`}
        >
          <i className="fas fa-chevron-right" />
        </div>
        <div
          onClick={click}
          className={`leftBtn ${isLeftSide ? 'hidden' : ''}`}
        >
          <i className="fas fa-chevron-left" />
        </div>
      </>
    );
  }
}

export default SlideButton;
