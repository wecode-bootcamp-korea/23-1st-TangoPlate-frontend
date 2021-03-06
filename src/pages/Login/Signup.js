import React from 'react';
import { SIGNUP_URL } from '../../config';
import InputContainer from './InputContainer/InputContainer';
import Button from './InputContainer/Button/Button';
import './Sign.scss';

class Signup extends React.Component {
  finish = e => {
    e.stopPropagation();
  };

  goToSign = e => {
    e.preventDefault();
    const { email, username, phoneNumber, password } = this.props;
    const { onOffModal } = this.props;
    fetch(SIGNUP_URL, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        nickname: username,
        password: password,
        phone_number: phoneNumber,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.MESSAGE === 'SUCCESS') {
          alert('축하합니다');
          onOffModal('signup');
          onOffModal('signin');
          onOffModal('isUserLogout');
        } else {
          alert(
            '이름과 이메일 형식을 지켜주세요 . 비밀번호는 5글자 이상입니다.'
          );
        }
      });
  };

  render() {
    const { username, email, password, phoneNumber } = this.props;
    const { goToSign, finish } = this;
    const { changeState, onOffModal } = this.props;
    const signupDisable =
      username === true ||
      phoneNumber === true ||
      email.indexOf('@') === -1 ||
      password.length < 5;
    return (
      <>
        <div
          className="signPage modalback"
          onClick={() => this.props.onOffModal('signup')}
        >
          <div className="signContainer" onClick={finish}>
            <img
              className="logo"
              alt="tangologo"
              src="/images/shopDetail/tangoLogo.png"
            />
            <InputContainer
              inputBox={inputBox}
              goTo={goToSign}
              onOffModal={onOffModal}
              changeState={changeState}
            >
              <Button
                className={
                  !signupDisable
                    ? 'signButton signButtonOn'
                    : 'signButton signButtonOff '
                }
                buttonName="회원가입하기"
                goTo={goToSign}
                disabled={signupDisable}
              />
            </InputContainer>
          </div>
        </div>
      </>
    );
  }
}

export default Signup;

const inputBox = [
  { id: 1, name: 'username', type: 'text', placeholder: '성명' },
  {
    id: 2,
    name: 'email',
    type: 'text',
    placeholder: '이메일',
  },
  {
    id: 3,
    name: 'phone_number',
    type: 'text',
    placeholder: '전화번호',
  },
  {
    id: 4,
    name: 'password',
    type: 'password',

    placeholder: '비밀번호',
  },
];
