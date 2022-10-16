import React from 'react';

let e = React.createElement;

export default class Stars extends React.Component {
  render() {
    return React.createElement(
      'img', {src:require('../img/star.png')}, null
    );
  }

}
