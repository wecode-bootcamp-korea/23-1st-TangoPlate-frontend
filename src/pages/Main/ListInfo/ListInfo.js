import React from 'react';
import './ListInfo.scss';

class ListInfo extends React.Component {
  render() {
    const { id, img, title, subTitle } = this.props.info;
    return (
      <div className="listInfo" key={id}>
        <img src={img} alt="image_file" className="listBackground" />
        <span className="listTilte">{title}</span>
        <span className="listSubTitle">{subTitle}</span>
      </div>
    );
  }
}

export default ListInfo;
