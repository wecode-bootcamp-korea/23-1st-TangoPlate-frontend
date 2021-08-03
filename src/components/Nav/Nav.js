import React from 'react';
import './Nav.scss';
class Nav extends React.Component {
  render() {
    return (
      <div className="Nav">
        <nav className="menu">
          <div className="leftWrapper">
            <a href="#">
              <img src="images/tangoLogo.png" alt="tangoPlate로고" />
            </a>
            <i className="fas fa-search"></i>
            <input placeholder="지역, 식당 또는 음식" type="text" />
          </div>

          <ul className="rightWrapper">
            <li>
              <a href="#">
                <span className="firstChild">
                  EAT딜
                  <img
                    src="https://mp-seoul-image-production-s3.mangoplate.com/web/resources/uo3o88vopcmdsket.png"
                    alt="새로운 맛집 알람"
                  />
                </span>
              </a>
            </li>

            <li>
              <a href="#">
                <span>맛집 리스트</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span>망고 스토리</span>
              </a>
            </li>

            <a href="#">
              <i className="far fa-user"></i>
            </a>

            <span className="userInfoAlarm">3</span>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
