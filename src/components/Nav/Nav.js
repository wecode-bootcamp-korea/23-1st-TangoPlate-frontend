import React from 'react';
import './Nav.scss';

import Signin from '../../pages/Login/Signin';
import Signup from '../../pages/Login/Signup';
import SigninUser from '../../pages/Login/SignInUser';
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      phoneNumber: '',
      password: '',
      isSignInModalOn: false,
      isSignUpModalOn: false,
      isUserLogin: false,
      isUserLogout: true,
    };
  }
  componentDidMount() {
    if (localStorage.getItem('token')) {
      const nickname = localStorage.getItem('nickname');
      const email = localStorage.getItem('email');
      this.setState({
        isSignInModalOn: !this.state.isSignInModalOn,
        isUserLogout: !this.state.isUserLogout,
        username: nickname,
        email: email,
      });
    }
  }

  // componentDidUpdate(_, prevState) {
  //   if (prevState.userLogin !== this.state.userLogin) {
  //     if (localStorage.getItem('token') && this.state.userLogin) {

  //     }
  //   }
  // }

  checkLogin() {
    if (localStorage.getItem('token')) {
      const nickname = localStorage.getItem('nickname');
      const email = localStorage.getItem('email');
      this.setState({
        isSignInModalOn: !this.state.isSignInModalOn,
        isUserLogout: !this.state.isUserLogout,
        username: nickname,
        email: email,
      });
    }
  }

  changeState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  onOffModal = name => {
    if (name === 'signup') {
      this.setState({
        isSignUpModalOn: !this.state.isSignUpModalOn,
      });
    } else if (name === 'signin') {
      this.setState({
        isSignInModalOn: !this.state.isSignInModalOn,
      });
    } else if (name === 'isUserLogout') {
      this.setState({
        isUserLogout: !this.state.isUserLogout,
      });
    } else if (name === 'isUserLogin') {
      this.setState({
        isUserLogin: !this.state.isUserLogin,
      });
    }
  };

  render() {
    const { username, email, phoneNumber, password } = this.state;
    return (
      <div className="Nav">
        <nav className="menu">
          <div className="leftWrapper">
            <button>
              <img src="images/tangoLogo.png" alt="tangoPlate로고" />
            </button>
            <i className="fas fa-search"></i>
            <input placeholder="지역, 식당 또는 음식" type="text" />
          </div>

          <ul className="rightWrapper">
            <li>
              <button>
                <span className="firstChild">
                  EAT딜
                  <img
                    src="https://mp-seoul-image-production-s3.mangoplate.com/web/resources/uo3o88vopcmdsket.png"
                    alt="새로운 맛집 알람"
                  />
                </span>
              </button>
            </li>

            <li>
              <button>
                <span>맛집 리스트</span>
              </button>
            </li>

            <li>
              <button>
                <span>망고 스토리</span>
              </button>
            </li>

            <button
              onClick={() =>
                this.state.isUserLogout
                  ? this.onOffModal('signin')
                  : this.onOffModal('isUserLogin')
              }
            >
              <i className="far fa-user"></i>
            </button>

            <span className="userInfoAlarm">3</span>
          </ul>
        </nav>
        <div>
          {this.state.isUserLogout && this.state.isSignInModalOn && (
            <Signin
              onOffModal={this.onOffModal}
              changeState={this.changeState}
              email={email}
              password={password}
            />
          )}
          {this.state.isSignUpModalOn && (
            <Signup
              onOffModal={this.onOffModal}
              changeState={this.changeState}
              username={username}
              phoneNumber={phoneNumber}
              email={email}
              password={password}
            />
          )}
          {this.state.isUserLogin && (
            <SigninUser
              onOffModal={this.onOffModal}
              changeState={this.changeState}
              username={username}
              email={email}
            ></SigninUser>
          )}
        </div>
      </div>
    );
  }
}

export default Nav;
