import React from 'react';
import ListInfo from './ListInfo/ListInfo';
import SlideButton from './SlideButton/SlideButton';
import './ShopListContainer.scss';

class ShopListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      listData: [],
      isLeftSide: true,
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
      isLeftSide: !this.state.isLeftSide,
    });
  };

  render() {
    const { listData, isLeftSide } = this.state;
    return (
      <div className="shopListContainer">
        <span className="containerTitle">믿고 보는 맛집 리스트</span>
        <div className="rowContainer">
          <div className={isLeftSide ? 'filterListLeft' : 'filterListRight'}>
            {listData.map((data, idx) => {
              return <ListInfo info={data} key={idx} />;
            })}
          </div>
        </div>
        <SlideButton click={this.moveImg} rightButton={this.state.isLeftSide} />
      </div>
    );
  }
}

export default ShopListContainer;
