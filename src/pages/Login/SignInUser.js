import React from 'react';
import Button from './InputContainer/Button/Button';
import './SignInUser.scss';

class SigninUser extends React.Component {
  finish = e => {
    e.stopPropagation();
  };
  goToLogout = () => {
    const { onOffModal, changeState } = this.props;
    localStorage.removeItem('TOKEN');
    onOffModal('login');
    onOffModal('logout');
    changeState('username', '');
    changeState('email', '');
  };
  render() {
    const { username, email } = this.props.state;
    const { onOffModal } = this.props;
    const { finish, goToLogout } = this;
    return (
      <div className="signPage modalback" onClick={() => onOffModal('login')}>
        <i className="triangle"></i>
        <div className="signContainer modal" onClick={finish}>
          <img
            className="userimg"
            src="/images/shopDetail/도현님.png"
            alt="userimg"
          />

          <div class="userProfileName">{username}</div>
          <div class="userProfileName">{email}</div>

          <Button
            className="signButton signButtonOn"
            buttonName="로그아웃"
            goTo={goToLogout}
          />
        </div>
      </div>
    );
  }
}

export default SigninUser;
