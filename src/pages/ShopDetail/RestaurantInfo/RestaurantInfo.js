import React from 'react';
import './RestaurantInfo.scss';

class RestaurantInfo extends React.Component {
  render() {
    return (
      <table className="restaurantInfo">
        <tbody>
          <tr>
            <th>주소</th>
            <td>
              <div className="restaurantInfoAddressText">
                서울특별시 송파구 양재대로71길 13
              </div>
              <span className="restaurantAddres">지번</span>
              <span className="restaurantInfoAddressText">
                서울시 송파구 방이동 203
              </span>
            </td>
          </tr>
          <tr>
            <th>전화번호</th>
            <td>02-422-2017</td>
          </tr>
          <tr>
            <th>음식 종류</th>
            <td>회 / 스시</td>
          </tr>
          <tr>
            <th>가격대</th>
            <td>4만원 이상</td>
          </tr>
          <tr>
            <th>주차</th>
            <td>무료주차 가능 </td>
          </tr>
          <tr>
            <th>영업시간</th>
            <td>12:00 - 22:00</td>
          </tr>
          <tr>
            <th>휴일</th>
            <td>일</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default RestaurantInfo;
