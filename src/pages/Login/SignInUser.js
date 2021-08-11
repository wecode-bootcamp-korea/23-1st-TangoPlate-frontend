import React from 'react';
import Button from './InputContainer/Button/Button';
import './SignInUser.scss';

class SigninUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserInfo: true,
    };
  }
  finish = e => {
    e.stopPropagation();
  };
  goToLogout = () => {
    const { onOffModal, changeState } = this.props;
    localStorage.removeItem('token');
    localStorage.removeItem('nickname');
    localStorage.removeItem('email');
    onOffModal('isUserLogin');
    onOffModal('isUserLogout');
    changeState('username', '');
    changeState('email', '');
  };
  handleUserinfoOrWanted = () => {
    this.setState({
      isUserInfo: !this.state.isUserInfo,
    });
  };

  render() {
    const { username, email } = this.props;
    const { onOffModal } = this.props;
    const { finish, goToLogout } = this;
    const { isUserInfo } = this.state;
    return (
      <div
        className="signPage modalback"
        onClick={() => onOffModal('isUserLogin')}
      >
        <i className="triangle"></i>
        <div className="signUserContainer modal" onClick={finish}>
          <div className="optionButtonBox">
            <Button
              className={
                isUserInfo ? 'selectUserinfoWanted userinfo' : 'userinfo'
              }
              buttonName="내정보"
              goTo={this.handleUserinfoOrWanted}
            ></Button>
            <Button
              className={
                isUserInfo ? 'userinfo' : 'selectUserinfoWanted userinfo'
              }
              buttonName="가고싶다"
              goTo={this.handleUserinfoOrWanted}
            ></Button>
          </div>
          {isUserInfo && (
            <div className="content">
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
          )}
          {!isUserInfo && (
            <div className="wantedItem">
              <img
                className="wantedItemImg"
                src="/images/shopDetail/도현님.png"
                alt="userimg"
              />
              <div className="wantedItemInfo">
                <div class="wantedItemTitleAndRating">
                  <span class="wantedItemTitle">영명국밥</span>
                  <span class="wantedItemRating">4.2</span>
                </div>
                <span class="wantedAdressAndCategory">광주 광산구 - 한식</span>
              </div>
              <button className="wantedButton" onClick={this.handleWanted}>
                <i className="far fa-star starButton"></i>
                {/* <i className={is_wished ? 'fas fa-star ' : 'far fa-star'}></i> */}
              </button>
            </div>
          )}
          {/* 
          {!isUserInfo && (
            <div className="content">
              <i className="far fa-star wantedIcon"></i>
              <p class="EmptyWatedListTitle">격하게 가고싶다..</p>
              <p class="EmptyWatedListDescription">
                식당의 ‘별’ 아이콘을 누르면 가고싶은 곳을 쉽게 저장할 수
                있습니다.
              </p>
            </div>
          )} */}
        </div>
      </div>
    );
  }
}

export default SigninUser;
