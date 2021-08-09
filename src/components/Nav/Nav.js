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
      phone_number: '',
      password: '',
      isSignInModalOn: false,
      isSignUpModalOn: false,
      login: false,
      logout: true,
    };
  }
  componentDidMount() {
    if (localStorage.getItem('token')) {
      const nickname = localStorage.getItem('nickname');
      const email = localStorage.getItem('email');
      this.setState({
        isSignInModalOn: !this.state.isSignInModalOn,
        logout: !this.state.logout,
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
    } else if (name === 'logout') {
      this.setState({
        logout: !this.state.logout,
      });
    } else if (name === 'login') {
      this.setState({
        login: !this.state.login,
      });
    }
  };

  render() {
    console.log(this.state);
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
                this.state.logout
                  ? this.onOffModal('signin')
                  : this.onOffModal('login')
              }
            >
              <i className="far fa-user"></i>
            </button>

            <span className="userInfoAlarm">3</span>
          </ul>
        </nav>
        {/* <div className="signup" onClick={this.onOffModal}> */}
        <div>
          {this.state.logout && this.state.isSignInModalOn && (
            <Signin
              onOffModal={this.onOffModal}
              changeState={this.changeState}
              state={this.state}
            />
          )}
          {this.state.isSignUpModalOn && (
            <Signup
              onOffModal={this.onOffModal}
              changeState={this.changeState}
              state={this.state}
            />
          )}
          {this.state.login && (
            <SigninUser
              onOffModal={this.onOffModal}
              changeState={this.changeState}
              state={this.state}
            ></SigninUser>
          )}
        </div>
      </div>
    );
  }
}

export default Nav;
