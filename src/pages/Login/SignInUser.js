import React from 'react';
import { WISH_URL, WISHED_LIST } from '../../config';
import Button from './InputContainer/Button/Button';
import './SignInUser.scss';

class SigninUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserInfo: true,
      data: [],
      isWanted: false,
      isamty: true,
    };
  }

  componentDidMount() {
    this.getdata();
  }

  handleWanted = id => {
    const search = [...this.state.data];
    let wnt = true;
    search.forEach(el => {
      if (el.id === id) {
        wnt = !el.is_wished;
      }
    });
    console.log(wnt);
    if (wnt) {
      fetch(`${WISH_URL}${id}/wish`, {
        method: 'POST',
        headers: { authorization: localStorage.getItem('token') },
      })
        .then(response => response.json())
        .then(response => {
          console.log(response);
          this.getdata();
        });
    } else {
      fetch(`${WISH_URL}${id}/wish`, {
        method: 'DELETE',
        headers: { authorization: localStorage.getItem('token') },
      })
        .then(response => response.json())
        .then(response => {
          console.log(response);
          this.getdata();
        });
    }
  };

  getdata = () => {
    console.log(this.state.data);
    console.log(WISHED_LIST);
    fetch(WISHED_LIST, {
      headers: { authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(response => {
        // console.log(response.MESSAGE === 'no_wish');
        if (response.MESSAGE === 'no_wish') {
          this.setState({
            isamty: true,
          });

          console.log(response);

          // } else {
          //   this.setState({
          //     data: response.MESSAGE,
          //     isamty: false,
          //   });
        } else {
          this.setState({
            data: [...response.MESSAGE],
            isamty: false,
          });
        }
      });
  };
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
    if (!this.state.isUserInfo) {
      this.getdata();
    }
  };

  render() {
    const { username, email } = this.props;
    const { onOffModal } = this.props;
    const { finish, goToLogout } = this;
    const { isUserInfo, data, isamty } = this.state;
    const wanted =
      data &&
      data.map(
        ({ id, name, images, category, rating, location, is_wished }) => {
          return (
            <div className="wantedItem" key={id}>
              <img className="wantedItemImg" src={images} alt="userimg" />
              <div className="wantedItemInfo">
                <div class="wantedItemTitleAndRating">
                  <span class="wantedItemTitle">{name}</span>
                  <span class="wantedItemRating">{rating}</span>
                </div>
                <span class="wantedAdressAndCategory">{`${location} - ${category}`}</span>
              </div>
              <button
                className="wantedButton"
                onClick={() => this.handleWanted(id)}
                id={id}
              >
                {/* <i className="far fa-star starButton"></i> */}
                <i
                  className={
                    is_wished
                      ? 'fas fa-star starButton '
                      : 'far fa-star starButton'
                  }
                ></i>
              </button>
            </div>
          );
        }
      );
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
          {!isUserInfo && !isamty && wanted}

          {!isUserInfo && isamty && (
            <div className="content">
              <i className="far fa-star wantedIcon"></i>
              <p class="EmptyWatedListTitle">격하게 가고싶다..</p>
              <p class="EmptyWatedListDescription">
                식당의 '별' 아이콘을 누르면 가고싶은 곳을 쉽게 저장할 수
                있습니다.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SigninUser;
