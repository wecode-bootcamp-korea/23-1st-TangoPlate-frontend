import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav className="menu">
        <div className="leftWrapper">
          <Link to="#">
            <img src="images/tangoLogo.png" alt="tangoPlate로고" />
          </Link>
          <Link to="#">
            <i className="fas fa-search"></i>
          </Link>
          <input placeholder="지역, 식당 또는 음식" type="text" />
        </div>

        <ul className="rightWrapper">
          <li>
            <Link to="#">
              <span className="eatDealMenu">
                EAT딜
                <img
                  alt="새로운 맛집 알람"
                  src="https://mp-seoul-image-production-s3.mangoplate.com/web/resources/uo3o88vopcmdsket.png"
                />
              </span>
            </Link>
          </li>

          <li>
            <Link to="#">
              <span>맛집 리스트</span>
            </Link>
          </li>

          <li>
            <Link to="#">
              <span>망고 스토리</span>
            </Link>
          </li>

          <Link to="#">
            <i className="far fa-user">
              <span className="userInfoAlarm">3</span>
            </i>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
