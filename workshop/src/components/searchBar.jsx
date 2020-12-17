import React, { Component } from 'react';

export default class SearchBar extends Component {
  handleChange = (event) => {
    const { fetchGiphy } = this.props;
    fetchGiphy(event.currentTarget.value);
  }

  render() {
    return (
      <input type="text" className="form-search form-control" placeholder="Search for a Gif" onChange={this.handleChange} />
    );
  }
}
