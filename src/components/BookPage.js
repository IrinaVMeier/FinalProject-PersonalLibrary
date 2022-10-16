import React from 'react';
import BookManager from '../personaLibrary';
import Menu from './Menu';
import ReviewList from './ReviewList';
import Stars from './Stars';
import HalfStar from './HalfStar';

let e = React.createElement;


export default class Book extends React.Component {
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
    let showBook;
    let url = window.location.href;
    let bookId = Number(url.substring(url.lastIndexOf('/') + 1,url.length));
    console.log(url);
    console.log(bookId);

    for (let book of BookManager.getBooks()) {
      if (book.id == bookId) {
        showBook = book;
      }
    }

    let stars = [];
    let star = Number(BookManager.getBookStars(showBook.id));
    for (let s = 0; s < Math.floor(star); s++) {
      stars.push(e(Stars, {class:'d-inline'}, null));

    }

    if (star != Math.floor(star)) {
      stars.push(e(HalfStar, {class:'d-inline'}, null));
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
          e('div', {}, 'Title: ' + showBook.title)
        ),
        e('div', {className:'col'},
          e('span', {}, 'Author: ' + showBook.author)
        )
      ),
      e('div', {className:'row'},
        e('div', {className:'col'},
          e('span', {}, 'ISBN: ' + showBook.isbn)
        ),
        e('div', {className:'col'},
          e('span', {}, 'Genre: ' + showBook.genre)
        )
      ),
    /*  e('div', {}, 'Title: ' + showBook.title),
      e('div', {},
        e('span', {}, 'ISBN: ' + showBook.isbn),
        e('span', {}, 'Author: ' + showBook.author)
      ),
      e('div', {},
        e('span', {}, 'Genre: ' + showBook.genre)

      ),*/
      e('div', {className:'row'},
        e('div', {className:'col'},
          e('div', {},
            e('span', {}, 'Book rating :'),
            stars
          )
        ),
        e('div', {className:'col'},
          e('br', {}, null),
          e('a', {href:"/editbook/" + showBook.id}, 'Edit book...')
        )
      ),

      e('div', {className:'border-top border-dark mt-3'}, null),
      e('br', {}, null),
      e(ReviewList, {bookId:bookId, func:this.updateState}, null),
      e('br', {}, null),
    );
  }
};
