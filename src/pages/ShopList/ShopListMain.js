import React, { Component } from 'react';
import './ShopListMain.scss';

export class ShopListMain extends Component {
  render() {
    return (
      <div className="shopListMain">
        <main>
          <img
            className="reviewPicture"
            src="images/foodSample.jpg"
            alt="식당 사진"
          />
          <div className="reviewContainer">
            <div className="reviewInner">
              <div className="reviewTitleWrapper">
                <div className="shopTitle">
                  1. 탱플 <span>4.7</span>
                </div>
                <span className="shopAddress">
                  서울특별시 마포구 토정로 316 성진빌딩 1F
                </span>
              </div>
              <div className="wannaGoWrapper">
                <i className="far fa-star wannaGo"></i>
                <div>가고싶다</div>
              </div>
            </div>
            <div className="reviewWrapper">
              <img className="userPic" src="images/foodSample.jpg" alt=" " />
              <div className="reviewDetail">
                <p className="userReview">
                  <span className="userId">탱고춤을춘다탬버린</span>
                  망고플레이트 클론하면서 여기저기 맛집 많이 보니깐 내 배가
                  고프고 맛있어 보이는게 너무나도 많아서 기분이 좋다. 다음엔
                  망고플레이트로 맛집 찾아보고 맛집 헌팅하러 다녀야지. 여기서
                  이제 더보기 기능을 써야 하는데 어떻게 쓰는지는 다음시간에 계속
                </p>
              </div>
            </div>
            <h3 className="goToDetail">탱플 더보기 {'>'}</h3>
          </div>
        </main>
      </div>
    );
  }
}

export default ShopListMain;
