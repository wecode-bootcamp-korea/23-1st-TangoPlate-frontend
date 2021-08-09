import React from 'react';
import { SIGNIN_URL } from '../../config';
import { withRouter } from 'react-router';
import InputContainer from './InputContainer/InputContainer';
import Button from './InputContainer/Button/Button';
import './Sign.scss';

class Signin extends React.Component {
  goToSignup = e => {
    const { onOffModal } = this.props;
    e.preventDefault();
    onOffModal('signup');
    onOffModal('signin');
  };

  goToSignin = e => {
    e.preventDefault();
    const { email, password } = this.props.state;
    const { onOffModal, changeState } = this.props;
    fetch(SIGNIN_URL, {
      method: 'POST',
      body: JSON.stringify({ email: email, password: password }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.TOKEN) {
          localStorage.setItem('token', result.TOKEN);
          localStorage.setItem('nickname', result.NICKNAME);
          localStorage.setItem('email', result.EMAIL);
          onOffModal('signin');
          onOffModal('logout');
          changeState('username', result.NICKNAME);
          changeState('email', result.EMAIL);
          this.props.history.push('/shopdetail');
        } else {
          alert('이메일과 비밀번호를 확인해주세요 !');
        }
      });
  };
  finish = e => {
    e.stopPropagation();
  };
  render() {
    const { email, password } = this.props.state;
    let signIndisable = email.indexOf('@') === -1 || password.length < 5;
    const { goToSignin, goToSignup, finish } = this;
    const { changeState, onOffModal } = this.props;
    return (
      <div className="signPage modalback" onClick={() => onOffModal('signin')}>
        <div className="signContainer" onClick={finish}>
          <img
            className="logo"
            alt="tangologo"
            src="/images/shopDetail/tangoLogo.png"
          />
          <InputContainer
            inputBox={inputBox}
            onOffModal={onOffModal}
            changeState={changeState}
            goTo={goToSignin}
          >
            <Button
              className={
                !signIndisable
                  ? 'signButton signButtonOn'
                  : 'signButton signButtonOff '
              }
              buttonName="로그인"
              goTo={goToSignin}
              disabled={signIndisable}
              changeState={changeState}
            />
            <Button
              className="signButton signButtonOn"
              buttonName="회원가입 하기"
              goTo={goToSignup}
            />
          </InputContainer>
        </div>
      </div>
    );
  }
}

export default withRouter(Signin);

const inputBox = [
  {
    id: 1,
    name: 'email',
    type: 'text',
    placeholder: '사용자 이메일',
  },
  {
    id: 2,
    name: 'password',
    type: 'password',
    placeholder: '비밀번호',
  },
];
