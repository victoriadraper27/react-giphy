import React, { Component } from 'react';

import SearchBar from './searchBar';
import Gif from './gif';
import GifList from './gifList';

const giphy = require('giphy-api')('xfTDdSQJBS6269cWPCyanBbZIBKiyHoQ');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGifId: 'WuGSL4LFUMQU',
      gifIdList: ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]
    };
    this.fetchGiphy("puppy");
  }

  fetchGiphy = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({ gifIdList: res.data.map(gif => gif.id) });
    });
  }

  changeSelectedGif = (newSelectedGifId) => {
    this.setState({ selectedGifId: newSelectedGifId });
  };


  render() {
    const { selectedGifId, gifIdList } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar fetchGiphy={this.fetchGiphy} />
          <div className="selected-gif">
            <Gif gifId={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifIdList={gifIdList} changeSelectedGif={this.changeSelectedGif} />
        </div>
      </div>
    );
  }
}
