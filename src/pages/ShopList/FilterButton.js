import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './FilterButton.scss';

export class FilterButton extends Component {
  render() {
    const { toggleLocation, toggleCategory } = this.props;
    console.log('categoty', toggleCategory, 'location', toggleLocation);
    // const buttonDisable = Number(toggleCategory);
    return (
      <div className="filterButton">
        <div className="foodButton">
          {FOOD_BUTTON_LIST.map(list => {
            return (
              <button
                onClick={this.props.handleCategoryButton}
                key={list.id}
                id={list.id}
                className={
                  Number(toggleCategory) === list.id
                    ? 'foodButtonList keepFoodButton'
                    : 'foodButtonList'
                }
                // Number(toggleCategory) ===list.id?disabled:""
              >
                {list.buttonName}
              </button>
            );
          })}
        </div>
        <div className="locationButton">
          {LOCATION_BUTTON_LIST.map(list => {
            return (
              <button
                onClick={this.props.handleLocationButton}
                key={list.id}
                id={list.id}
                className={
                  Number(toggleLocation) === list.id
                    ? 'locationButtonList keepLocationButton'
                    : 'locationButtonList'
                }
              >
                {list.buttonName}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(FilterButton);

const FOOD_BUTTON_LIST = [
  {
    id: 1,
    buttonName: '#한식',
  },
  {
    id: 2,
    buttonName: '#중식',
  },
  {
    id: 3,
    buttonName: '#일식',
  },
  {
    id: 4,
    buttonName: '#양식',
  },
];

const LOCATION_BUTTON_LIST = [
  {
    id: 24,
    buttonName: '#역삼/선릉',
  },
  {
    id: 2,
    buttonName: '#강남',
  },
  {
    id: 17,
    buttonName: '#삼성',
  },
  {
    id: 20,
    buttonName: '#신사/압구정',
  },
  {
    id: 1,
    buttonName: '#가로수길',
  },
];
