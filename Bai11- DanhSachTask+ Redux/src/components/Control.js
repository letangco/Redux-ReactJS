import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
  
  onSearch = (value) => {
    // console.log(value);
    this.props.onSearch(value);
  }
  onSort = (sortBy, sortValue) => {
    this.props.onSort(sortBy, sortValue);
  }
  render() {
    return (
      <div className="row mt-15">
        <Search onSearch={this.onSearch} />
        <Sort onSort={this.onSort} sortBy={this.props.sortBy} sortValue={this.props.sortValue} />
      </div>
    );
  }


}

export default Control;
