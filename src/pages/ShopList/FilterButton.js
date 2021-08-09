import React, { Component } from 'react';
import './FilterButton.scss';

export class FilterButton extends Component {
  render() {
    return (
      <div className="filterButton">
        <div className="foodButton">
          {FOOD_BUTTON_LIST.map(list => {
            return (
              <button key={list.id} className="foodButtonList">
                {list.buttonName}
              </button>
            );
          })}
        </div>
        <div className="locationButton">
          {LOCATION_BUTTON_LIST.map(list => {
            return (
              <button key={list.id} className="locationButtonList">
                {list.buttonName}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FilterButton;

const FOOD_BUTTON_LIST = [
  {
    id: 1,
    buttonName: '#한식',
  },
  {
    id: 2,
    buttonName: '#양식',
  },
  {
    id: 3,
    buttonName: '#중식',
  },
  {
    id: 4,
    buttonName: '#일식',
  },
];

const LOCATION_BUTTON_LIST = [
  {
    id: 5,
    buttonName: '#선릉',
  },
  {
    id: 6,
    buttonName: '#강남',
  },
  {
    id: 7,
    buttonName: '#삼성',
  },
  {
    id: 8,
    buttonName: '#역삼',
  },
];
