import React, { Component } from 'react';
import './FilterButton.scss';

export class FilterButton extends Component {
  handleFilterButton = e => {};

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
  {
    id: 5,
    buttonName: '#세계음식',
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
