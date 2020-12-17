import React, { Component } from 'react';

import SearchBar from './searchBar';
import Gif from './gif';
import GifList from './gifList';

const giphy = require('giphy-api')('xfTDdSQJBS6269cWPCyanBbZIBKiyHoQ');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGifId: 'Y0b5YfI4zFWaGKbMQ2',
      gifIdList: ["3o7TKTxeQEKMD1POUg", "4T7e4DmcrP9du", "2yuRoYBGY027wAPYML", "QFSD9tGuryBHy", "B2HqyXi7r6j9W9cCG2", "4dtKSU1d2Jo5i", "wHKRCl4HBSLHq", "5tw4zQVwKT5OwTTdry", "LPQ943m8yMcpy", "1TmrEqADCCCS4", "Y4pAQv58ETJgRwoLxj", "mCRJDo24UvJMA"]
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
