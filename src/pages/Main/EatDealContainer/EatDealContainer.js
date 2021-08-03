import React from 'react';
import './EatDealContainer.scss';

class EatDealContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      shopData: [],
    };
  }

  componentDidMount() {
    fetch('/data/shopInfoData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          shopData: data,
        });
      });
  }

  render() {
    const { shopData } = this.state;
    return (
      <div className="eatDealContainer">
        <span className="containerTitle">EAT딜을 판매중인 식당</span>
        <div className="shopList">
          {shopData.map(data => {
            return (
              <div className="shopInfo" key={data.id}>
                <img src={data.img} alt="image_file" className="shopMenu" />
                <span className="shopTitle">{data.shop}</span>
                <span className="shopDetailInfo">{data.location}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default EatDealContainer;
