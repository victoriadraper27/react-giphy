import React from 'react';

class Hello extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <h1>{ `Hello ${name}` }</h1>
    )
  }
}

export default Hello;
