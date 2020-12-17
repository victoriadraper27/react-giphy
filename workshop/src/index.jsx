import '../assets/stylesheets/application.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './components/hello';

import App from './components/app';

// const Hello = (props) => {
//   // destructuring of props
//   const { name } = props;
//   return <h1>{ `Hello ${name}!` }</h1>
// }

    // move to hello file
// class Hello extends React.Component {
//   render() {
//     const { name } = this.props;
//     return (
//       <h1>{ `Hello ${name}` }</h1>
//     )
//   }
// }

const root = document.querySelector("#root");
ReactDOM.render(
    <div>
      <Hello name="Victoria" />
      <Hello name="Jenn" />
      <Hello name="Harry" />
    </div>, root);
