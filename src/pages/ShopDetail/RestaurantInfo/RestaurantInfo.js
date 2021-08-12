import React from 'react';
import './RestaurantInfo.scss';

class RestaurantInfo extends React.Component {
  render() {
    const { address, phone_number, category, serving_price, menus } =
      this.props.data;
    const menu =
      menus &&
      menus.map(({ id, item, item_price }) => {
        return (
          <li key={id}>
            <span>{item}</span>
            <span className="price">{item_price}원</span>
          </li>
        );
      });

    return (
      <table className="restaurantInfo">
        <tbody>
          <tr>
            <th>주소</th>
            <td>
              <div className="restaurantInfoAddressText">{address}</div>
              <span className="restaurantAddres">지번</span>
              <span className="restaurantInfoAddressText">
                서울시 송파구 방이동 203
              </span>
            </td>
          </tr>
          <tr>
            <th>전화번호</th>
            <td>{phone_number}</td>
          </tr>
          <tr>
            <th>음식 종류</th>
            <td>{category}</td>
          </tr>
          <tr>
            <th>가격대</th>
            <td>{serving_price}</td>
          </tr>
          <th>메뉴</th>
          <td>
            <ul>{menu}</ul>
          </td>
        </tbody>
      </table>
    );
  }
}

export default RestaurantInfo;

// const menus = [
//   {
//     item: '조개찜(중)',
//     item_price: 48000,
//   },
//   {
//     item: '해물모듬',
//     item_price: 35000,
//   },
//   {
//     item: '가리비숙회',
//     item_price: 25000,
//   },
// ];
