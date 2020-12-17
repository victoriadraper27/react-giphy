import React, { Component } from 'react';

import Gif from './gif';

export default class GifList extends Component {
  render() {
    const { gifIdList, changeSelectedGif } = this.props;
    return (
      <div className="gif-list">
        { gifIdList.map(gifId => <Gif gifId={gifId} key={gifId} changeSelectedGif={changeSelectedGif} />) }
      </div>
    );
  }
}
