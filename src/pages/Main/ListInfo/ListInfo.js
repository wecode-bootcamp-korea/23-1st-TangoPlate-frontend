import React from 'react';
import { withRouter } from 'react-router-dom';
import './ListInfo.scss';

class ListInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      shoplist: [],
    };
  }
  goToCategori = e => {
    let categori = e.target.id;
    console.log(categori);
    this.props.history.push(`/shoplist/${categori}`);
  };

  render() {
    const { id, img, title, subTitle, goto } = this.props.info;
    return (
      <div
        className="listInfo"
        key={id}
        id={goto}
        style={{ backgroundImage: `URL(${img})` }}
        onClick={this.goToCategori}
      >
        <span className="listTilte">{title}</span>
        <span className="listSubTitle">{subTitle}</span>
      </div>
    );
  }
}

export default withRouter(ListInfo);
