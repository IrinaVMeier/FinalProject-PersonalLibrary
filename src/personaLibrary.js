class Counter {

  static getCounter() {
    let counter = localStorage.getItem('counter');

    if (counter == null)  {
      counter = 1;
    }
    else {
      counter++;
    }

    localStorage.setItem('counter', counter);

    return counter;
  }
}

class Book {
  constructor(title, author, genre, isbn) {
    this.id = Counter.getCounter();
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.isbn = isbn;
    this.read = 0;
    this.reviews = [];
  }

  addReview(author, text, genre, isbn) {
    this.reviews.push(new Review(author, text, genre, isbn));
  }
}

class Review {
  constructor(title, text, star) {
    this.id = Counter.getCounter();
    this.title = title;
    this.text = text;
    this.star = star;
  }
}

class BookManager {
  static books = [];

  static createBook(title, author, genre, isbn) {
    //localStorage.clear();
    let tmp = localStorage.getItem('books');

    if (tmp == null) {
      this.books = [];
    }
    else {
      this.books = JSON.parse(tmp)
    }

    if (title == "" || author == "") {
      alert("Fill out the book title and author");
    }
    else {
      this.books.push(new Book(title, author, genre, isbn));
      localStorage.setItem('books', JSON.stringify(this.books));
    }
  }

  static updateBook(id, title, author, genre, isbn) {
    this.books = JSON.parse(localStorage.getItem('books'));
    for(let book of this.books) {
      if (book.id == id) {
        if (title != '') { book.title = title; }
        if (author != '') { book.author = author; }
        if (genre != '') { book.genre = genre; }
        if (isbn != '') { book.isbn = isbn; }
      }
    }
    //console.log('arr');
    //console.log(this.books);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  static getBooks() {
    this.books = JSON.parse(localStorage.getItem('books'));

    if (this.books == null) {
      this.books = [];
    }

    return this.books;
  }

  static markAsRead(id) {
    this.books = JSON.parse(localStorage.getItem('books'));
    for(let book of this.books) {
      if (book.id == id) {
        book.read = 1;
      }
    }
    localStorage.setItem('books', JSON.stringify(this.books))
  }

  static deleteBook(id) {
    this.books = JSON.parse(localStorage.getItem('books'));
    for(let book of this.books) {
      if (book.id == id) {
        this.books = this.books.filter(function(f) {return f.id != id});
      }
    }
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  static getReviews(idBook) {
    this.books = JSON.parse(localStorage.getItem('books'));
    for(let book of this.books) {
      if (book.id == idBook) {
        return book.reviews;
      }
    }
  }

  static addReview(id, title, text, stars) {
    this.books = JSON.parse(localStorage.getItem('books'));

    for(let book of this.books) {
      if (book.id == id) {

        if (title == "" || text == "") {
          alert('Title or text of the review are missing');
        }
        else {
          book.reviews.push(new Review(title, text, stars));
        }
      }
    }
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  static getReviewStars(bookId, reviewId) {
    this.books = JSON.parse(localStorage.getItem('books'));

    for(let book of this.books) {
      if (book.id == bookId) {
        for(let review of book.reviews) {
          if (review.id == reviewId) {
            return review.star;
          }
        }
      }
    }
  }

  static getBookStars(bookId) {
    this.books = JSON.parse(localStorage.getItem('books'));
    let cnt = 0;
    let stars = 0;
    for(let book of this.books) {
      if (book.id == bookId) {
        for(let review of book.reviews) {
          cnt++;
          stars = stars + Number(review.star);
        }
      }
    }

    if (cnt != 0) {
      return stars/cnt;
    }
    else {
      return 0;
    }
  }
}
let books = JSON.parse(localStorage.getItem('books'));
console.log(books);
//BookManager.createBook('title', 'Author', 'genre', 'isbn');
//BookManager.createBook('title1', 'Author1', 'genre1', 'isbn1');


export default BookManager;
