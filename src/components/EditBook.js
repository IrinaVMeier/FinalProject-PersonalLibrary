import React from 'react';
import BookManager from '../personaLibrary';
import Menu from './Menu';

let e = React.createElement;

let title = '';
let author = '';
let isbn = '';
let genre = '';
let showBook;

export default class EditBook extends React.Component {
  handleClick() {
    ///alert('aaaa')
    BookManager.updateBook(showBook.id, title, author, genre, isbn);
    ///alert('bbbb')
    //this.props.func();
    this.bookName.value = '';
    this.bookAuthor.value = '';
    this.isbn.value = '';
    this.genre.value = '';

    this.setState({});
  };

  handleTitleUpdate(e) {
    title = e.target.value
  }

  handleAuthorUpdate(e) {
    author = e.target.value
  }

  handleIbsnUpdate(e) {
    isbn = e.target.value
  }

  handleGenreUpdate(e) {
    genre = e.target.value
  }

  render() {

    let url = window.location.href;
    let bookId = Number(url.substring(url.lastIndexOf('/') + 1,url.length));
    console.log(url);
    console.log(bookId);

    for (let book of BookManager.getBooks()) {
      if (book.id == bookId) {
        showBook = book;
      }
    }

    //console.log(this.props.match.params.id)
    return React.createElement(
      'div',
      {className:'container'},
      e('br', {}, null),
      e(Menu, {}, null),
      e('br', {}, null),
      e('div', {className:'row'},
        e('div', {className:'col'},
          e('input', {className:'form-control', placeholder:showBook.title, ref:(input)=>this.bookName=input, onChange:this.handleTitleUpdate.bind(this)}, null)
        ),
        e('div', {className:'col'},
          e('input', {className:'form-control', placeholder:showBook.author, ref:(input)=>this.bookAuthor=input, onChange:this.handleAuthorUpdate.bind(this)}, null)
        )
      ),
      e('div', {className:'row'},
        e('div', {className:'col'},
          e('input', {className:'form-control', placeholder:showBook.isbn, ref:(input)=>this.isbn=input, onChange:this.handleIbsnUpdate.bind(this)}, null)
        ),
        e('div', {className:'col'},
          e('input', {className:'form-control', placeholder:showBook.genre, ref:(input)=>this.genre=input, onChange:this.handleGenreUpdate.bind(this)}, null)
        )
      ),
      e('br', {}, null),
      e('div', {className:'row'},
        e('div', {className:'col'},
          e('button', {className:'btn btn-light form-control border', onClick:this.handleClick.bind(this)}, 'Save')
        ),
        e('div', {className:'col'},
          e('a', {href:"/book/" + showBook.id, className:'align-middle'}, 'Back to book...')
        )
      ),
      e('br', {}, null),


    );
  }
};
