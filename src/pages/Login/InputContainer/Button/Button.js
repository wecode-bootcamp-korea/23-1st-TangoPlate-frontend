import React from 'react';
import './Button.scss';
class Button extends React.Component {
  render() {
    const { className, buttonName, disabled, goTo } = this.props;
    return (
      <button className={className} disabled={disabled} onClick={goTo}>
        {buttonName}
      </button>
    );
  }
}

export default Button;
