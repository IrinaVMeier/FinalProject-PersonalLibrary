import React from 'react';
import Stars from './Stars';
import BookManager from '../personaLibrary';

let e = React.createElement;

export default class Review extends React.Component {


  render() {

    let stars = [];
    for (let s = 0; s < Number(BookManager.getReviewStars(this.props.bookId, this.props.id)); s++) {
      stars.push(e(Stars, {class:'d-inline'}, null));

    }


    //alert(this.props.bookId)
    return React.createElement(
      'div',
      {},
      e(
          'div',
          {className: 'card-header bg-light p-1 border rounded', id:this.props.id},
          e('span', {className:'d-inline-block w-50 m-3 '}, this.props.title),
          e(
            'span',
            {},
            stars
          )
      ),
      e('div', {className: 'card-body m-3'}, this.props.text)
    );
  }

}
