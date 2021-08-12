import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './ShopListHeader.scss';
import FilterButton from './FilterButton';

export class ShopListHeader extends Component {
  render() {
    return (
      <div className="headerContainer">
        <header className="headLine">
          <div className="innerWrapper">
            <h4 className="clickCountAndDate">탱고플레이트</h4>
            <h2 className="headerTitle">
              추천 맛집 베스트 {this.props.shopInfo}곳
            </h2>
            <h3 className="headerSubTitle">"Food 1 + Location 1 골라주세요"</h3>
          </div>
          <div className="buttonWrapper">
            <FilterButton
              handleCategoryButton={this.props.handleCategoryButton}
              handleLocationButton={this.props.handleLocationButton}
              toggleLocation={this.props.toggleLocation}
              toggleCategory={this.props.toggleCategory}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default withRouter(ShopListHeader);
