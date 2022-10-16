import React from 'react';
import Review from './Review'
import AddReview from './AddReview'
import Nothing from './Nothing'
import BookManager from '../personaLibrary';

let e = React.createElement;

export default class ReviewList extends React.Component {
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
    this.props.func();
  };

  render() {
    //alert(1);
    let reviews = [];
    let cnt = 0;
    for (let review of BookManager.getReviews(this.props.bookId)) {
      reviews.push(e(Review, {...review, bookId:this.props.bookId}, null));
      cnt++;
    }

    if (cnt == 0) {
      reviews.push(e(Nothing, {}, null));
    }

    return React.createElement(
      'div',
      {className:'mt-2'},
      reviews,
      e(AddReview, {bookId:this.props.bookId, func:this.updateState}, null)
    );


  }

}
