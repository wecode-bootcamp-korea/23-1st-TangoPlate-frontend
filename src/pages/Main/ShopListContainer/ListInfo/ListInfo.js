import React from 'react';

class ListInfo extends React.Component {
  render() {
    return (
      <div className="listInfo" key={this.props.Info.id}>
        <img
          src={this.props.Info.img}
          alt="image_file"
          className="listBackground"
        />
        <span className="listTilte">{this.props.Info.title}</span>
        <span className="listSubTitle">{this.props.Info.subTitle}</span>
      </div>
    );
  }
}

export default ListInfo;
