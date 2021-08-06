import React from 'react';
import './InputBox.scss';

class InputBox extends React.Component {
  handleChange = e => {
    const { value } = e.target;
    const { name, changeState } = this.props;
    changeState(name, value);
  };
  render() {
    const { name, value, type, id, placeholder, goTo } = this.props;
    return (
      <form className="inputBox" onSubmit={e => goTo(e)}>
        <input
          className="input"
          name={name}
          type={type}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default InputBox;
