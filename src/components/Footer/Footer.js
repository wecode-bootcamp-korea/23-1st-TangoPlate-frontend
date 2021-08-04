import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="footerContainer">
          <div className="footerTop">
            <div className="logoAndSlogan">
              <img
                className="footerLogo"
                src="images/tangoGreyLogo.svg"
                alt=""
              />
              <p className="subtitle">Eat, Share, Be Happy</p>
            </div>
            <div className="companyIntro">
              <h3>회사소개</h3>
              <h3>탱고플레이트 팀원</h3>
              <h3>클론 정보</h3>
              <h3>브랜드 가이드라인</h3>
              <h3>탱고플레이트 팀워크</h3>
              <h3>광고 문의</h3>
            </div>
            <div className="siteInfo">
              <h3>공지사항</h3>
              <h3>이용약관</h3>
              <h3>비회원 이용자 이용정책</h3>
              <h3>개인정보처리방침</h3>
              <h3>위치기반서비스 이용약관</h3>
              <h3>커뮤니티 가이드라인</h3>
              <h3>청소년보호정책</h3>
              <h3>홀릭 소개</h3>
              <h3>문의하기</h3>
            </div>
            <div className="snsLink">
              <span>
                <i className="fab fa-facebook-f"></i>
              </span>
              <span>
                <i className="fab fa-instagram"></i>
              </span>
            </div>
          </div>

          <div className="footerMiddle">
            <div className="goodPlace">
              <span>
                근처맛집: 노스트레스버거 | 바스버거 | 하동관 | 은희네해장국 |
                담소순대국 | 프로티너 | 반룡산 | 카토멘 | 비야게레로 | 부타이 |
                맥도날드 | 미트앤번버거샵 | firebell | 하얼빈가정식 |
              </span>
            </div>
          </div>

          <div className="footerBottom">
            <div className="companyInfo">
              <p>위코드</p>
              <p>서울특별시 강남구 테헤란로 427 위워크</p>
              <p>탱고플레이트</p>
              <p>사업자 등록번호 000-00-00000</p>
              <p>통신판매업 신고는 영업장 소재지 구청으로</p>
              <p>고객센터는 운영하지않습니다</p>
              <p className="copyright">2021 TangoPlate ALL right Let's go</p>
            </div>
            <div className="foreignLanguage">
              <p className="supportLanguage">
                <span className="support supportKorean">한국어 </span>|
                <span className="support supportEnglish"> Korean </span>|
                <span className="support supportMandarin"> 韓國語</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
