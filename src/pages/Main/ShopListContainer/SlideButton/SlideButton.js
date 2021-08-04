import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './SlideButton.scss';

class SlideButton extends React.Component {
  render() {
    return (
      <>
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={this.props.click}
          className={this.props.data ? 'clickRight' : 'clickRightHidden'}
        />
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={this.props.click}
          className={this.props.data ? 'clickLeftHidden' : 'clickLeft'}
        />
      </>
    );
  }
}

export default SlideButton;
