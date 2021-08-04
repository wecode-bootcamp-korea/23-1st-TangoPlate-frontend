import React from 'react';
import Nav from '../../components/Nav/Nav';
import ShopListHeader from './ShopListHeader';
import ShopListMain from './ShopListMain';
import Footer from '../../components/Footer/Footer';

class ShopList extends React.Component {
  render() {
    return (
      <div className="shopList">
        <Nav />
        <ShopListHeader />
        <ShopListMain />
        <ShopListMain />
        <ShopListMain />
        <ShopListMain />
        <Footer />
      </div>
    );
  }
}

export default ShopList;
