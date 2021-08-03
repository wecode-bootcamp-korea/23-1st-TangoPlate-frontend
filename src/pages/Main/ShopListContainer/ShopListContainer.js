import React from 'react';
import './ShopListContainer.scss';

class ShopListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      listData: [],
    };
  }

  componentDidMount() {
    fetch('/data/listInfoData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          listData: data,
        });
      });
  }

  render() {
    const { listData } = this.state;
    return (
      <div className="shopListContainer">
        <span className="containerTitle">믿고 보는 맛집 리스트</span>
        <div className="filterList">
          {listData.map(data => {
            return (
              <div className="listInfo" key={data.id}>
                <img
                  src={data.img}
                  alt="image_file"
                  className="listBackground"
                />
                <span className="listTilte">{data.title}</span>
                <span className="listSubTitle">{data.subTitle}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShopListContainer;
