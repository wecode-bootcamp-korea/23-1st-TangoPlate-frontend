import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav className="menu">
        <div className="leftWrapper">
          <Link to="/">
            <img src="images/tangoLogo.png" alt="tangoPlate Logo" />
          </Link>
        </div>
        <ul className="rightWrapper">
          <li>
            <p className="eatDealMenu">
              EAT딜
              <img
                src="https://mp-seoul-image-production-s3.mangoplate.com/web/resources/uo3o88vopcmdsket.png"
                alt="새로운 맛집 알람"
              />
            </p>
          </li>
          <li>
            <p>맛집 리스트</p>
          </li>
          {/* 망고스토리라는 메뉴가 구성된다면 활성화
         <li>
            <span className="storyMenu">
              망고 스토리
              <span className="userInfoAlarm">3</span>
            </span>
          </li> */}
          <div className="myPage">
            <i className="far fa-user fa-2x" />
          </div>
        </ul>
      </nav>
    );
  }
}

export default Nav;
