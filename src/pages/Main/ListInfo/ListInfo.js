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

    // const { id } = e.target.id;
    // this.history.push(`/shoplist/${e.target.id}`);
    // const { name } = e.target;
    // this.props.gotoshop(e.target.id);
    // this.props.history.push(`/shoplist/${e.target.id}`);
    // fetch(`http://10.58.0.96:8000/${goto}`)
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({
    //       shoplist: res,
    //     });
    //     const { shoplist } = this.state;
    //     this.props.history.push({
    //       pathname: `/shopList/${goto}`,
    //       state: { shoplist: shoplist },
    //     });
    // });
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
