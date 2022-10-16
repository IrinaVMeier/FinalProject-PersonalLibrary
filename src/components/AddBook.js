import React from 'react';
import BookManager from '../personaLibrary';

let e = React.createElement;

let title;
let author;
let ibsn;
let genre;

export default class Wishlist extends React.Component {
  handleClick() {
    BookManager.createBook(title, author, genre, ibsn);
    this.props.func();
    this.bookName.value='';
    this.bookAuthor.value='';
    this.isbn.value='';
    this.genre.value='';
  };

  handleTitleUpdate(e) {
    title = e.target.value
  }

  handleAuthorUpdate(e) {
    author = e.target.value
  }

  handleIbsnUpdate(e) {
    ibsn = e.target.value
  }

  handleGenreUpdate(e) {
    genre = e.target.value
  }

  render() {
    return React.createElement(
      'div',
      {className:'jumbotron'},
      e('h5', {}, 'New Book'),
      e('div', {className:'row'},
        e('div', {className:'col'},
          e('input', {className:'form-control', placeholder:'Book name', ref:(input)=>this.bookName=input, onChange:this.handleTitleUpdate.bind(this)}, null)
        ),
        e('div', {className:'col'},
          e('input', {className:'form-control', placeholder:'Book author', ref:(input)=>this.bookAuthor=input, onChange:this.handleAuthorUpdate.bind(this)}, null)
        )
      ),
      e('div', {className:'row'},
        e('div', {className:'col'},
          e('input', {className:'form-control', placeholder:'ISBN', ref:(input)=>this.isbn=input, onChange:this.handleIbsnUpdate.bind(this)}, null)
        ),
        e('div', {className:'col'},
          e('input', {className:'form-control', placeholder:'Genre', ref:(input)=>this.genre=input, onChange:this.handleGenreUpdate.bind(this)}, null)
        )
      ),
      e('br', {}, null),
      e('button', {className:'btn btn-light form-control border', onClick:this.handleClick.bind(this)}, 'Create')
    );
  }

}
