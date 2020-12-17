import React, { Component } from 'react';

export default class Gif extends Component {
  handleClick = () => {
    const { gifId, changeSelectedGif } = this.props;
    changeSelectedGif(gifId);
  }

  render() {
    // destructuring the props
    const { gifId } = this.props;
    const url = `https://media.giphy.com/media/${gifId}/giphy.gif`;
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <img src={url} alt="gif" className="gif" onClick={this.handleClick} />
    );
  }
}
