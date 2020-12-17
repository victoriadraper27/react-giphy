import React, { Component } from 'react';

export default class Gif extends Component {
  handleClaick = () => {
    const { gifId, changeSelectedGif } = this.props;
    changeSelectedGif(gifId);
  }

  render() {
    // destructuring the props
    const { gifId } = this.props;
    const url = `https://media.giphy.com/media/${gifId}/giphy.gif`;
    return (
      <img src={url} alt="gif" className="gif" onClick={this.handleClick} />
    );
  }
}
