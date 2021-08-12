import React from 'react';
import InputBox from './InputBox/InputBox';
import Andline from './Andline/Andline';
import './InputContainer.scss';

class InputContainer extends React.Component {
  render() {
    const { changeState, goTo, inputBox } = this.props;
    const inputBoxs = inputBox.map(({ id, type, name, placeholder }) => {
      return (
        <InputBox
          key={id}
          type={type}
          name={name}
          placeholder={placeholder}
          changeState={changeState}
          goTo={goTo}
        />
      );
    });

    return (
      <div className="inputContainer">
        {inputBoxs}
        <Andline />
        {this.props.children}
      </div>
    );
  }
}

export default InputContainer;
