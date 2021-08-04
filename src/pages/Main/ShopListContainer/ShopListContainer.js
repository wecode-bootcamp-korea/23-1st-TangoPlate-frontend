import React from 'react';
import ListInfo from './ListInfo/ListInfo';
import SlideButton from './SlideButton/SlideButton';
import './ShopListContainer.scss';

class ShopListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      listData: [],
      listPage: true,
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

  moveImg = () => {
    this.setState({
      listPage: !this.state.listPage,
    });
  };

  render() {
    const { listData, listPage } = this.state;
    return (
      <div className="shopListContainer">
        <span className="containerTitle">믿고 보는 맛집 리스트</span>
        <div className="rowContainer">
          <div className={listPage ? 'filterListLeft' : 'filterListRight'}>
            {listData.map((data, idx) => {
              return <ListInfo Info={data} key={idx} />;
            })}
          </div>
        </div>
        <SlideButton click={this.moveImg} data={this.state.listPage} />
      </div>
    );
  }
}

export default ShopListContainer;
