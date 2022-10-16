import React from 'react';
import Book from './Book';
import Menu from './Menu';
import AddBook from './AddBook';
import Nothing from './Nothing'
import BookManager from '../personaLibrary';

let e = React.createElement;

export default class ReadBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upd: props.update
    }
  }

  // to update the parent in order to change the child component 
  updateState = (arg) => {
    let upd;

    if (this.state.upd == 1) {
      upd = 0;
    }
    else {
      upd = 1;
    }

    this.setState({upd : upd});
  };

  render() {

    let books = [];
    let cnt = 0;
    for (let book of BookManager.getBooks()) {
      if (book.read == 1) {
        books.push(e(Book, {...book, func:this.updateState}, null));
        cnt++;
      }
    }

    if (cnt == 0) {
      books.push(e(Nothing, {}, null));
    }

    return React.createElement(
      'div',
      {className:'container'},
      e('br', {}, null),
      e(Menu, {}, null),
      e('br', {}, null),
      books
    );
  }

}
