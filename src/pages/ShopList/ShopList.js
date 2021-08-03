import React from 'react';
import Nav from '../../components/Nav/Nav';
import ShopListHeader from './ShopListHeader';

class ShopList extends React.Component {
  render() {
    return (
      <div className="ShopList">
        <Nav />
        <ShopListHeader />
        <main>
          <ul className="shopContainer">
            <li className="shopList">
              <div className="userReview">
                <figure className="shopItem">
                  <figcaption>
                    <div className="info"></div>
                  </figcaption>
                </figure>
              </div>
            </li>
          </ul>
        </main>
      </div>
    );
  }
}

export default ShopList;
