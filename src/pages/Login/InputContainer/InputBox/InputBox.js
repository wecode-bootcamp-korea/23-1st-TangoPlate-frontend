import React from 'react';
import './InputBox.scss';

class InputBox extends React.Component {
  handleChange = e => {
    const { value } = e.target;
    const { name, changeState } = this.props;
    changeState(name, value);
  };
  render() {
    const { name, imgUrl, type, id, placeholder, goTo } = this.props;
    return (
      <form className="inputBox" onSubmit={goTo}>
        <input
          className="input"
          name={name}
          type={type}
          id={id}
          value={imgUrl}
          placeholder={placeholder}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default InputBox;
