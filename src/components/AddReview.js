import React from 'react';
import BookManager from '../personaLibrary';

let e = React.createElement;
let text;
let title;
let star;

export default class ReviewForm extends React.Component {
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

  handleClick() {
    if (star == undefined) {
      star = 1;
    }

    BookManager.addReview(this.props.bookId, title, text, star);
    this.props.func();
    this.title.value='';
    this.stars.value='1';
    this.text.value='';
    star = 1;
  }

  handleTextupdate(e) {
    text = e.target.value
  }

  handleTitleupdate(e) {
    title = e.target.value
  }

  handleStarupdate(e) {
    star = e.target.value
  }

  render() {
    return React.createElement(
      'div',
      {className:'border-top border-dark mt-3'},
      e('div', {className:'p-2'}, 'Add review'),
      e(
          'div',
          {},
          e('div', {className:'row'},
            e('div', {className:'col'},
              e('div', {className:'text-secondary'}, 'Enter review title'),
              e('input', {id:'inpt', className:'form-control', onChange:this.handleTitleupdate.bind(this), ref:(input)=>this.title=input}, null)
            ),
            e('div', {className:'col'},
              e('span', {}, 'Choose the rating : '),
              e("select", {className:'form-select', onChange:this.handleStarupdate.bind(this), ref:(input)=>this.stars=input},
                e("option", {value: "1"}, "1"),
                e("option", {value: "2"}, "2"),
                e("option", {value: "3"}, "3"),
                e("option", {value: "4"}, "4"),
                e("option", {value: "5"}, "5")
              )
            )
          ),
          e('div', {className:'text-secondary'}, 'Review text'),
          e('textarea', {id:'textAr', className:'form-control', onChange:this.handleTextupdate.bind(this), ref:(input)=>this.text=input}, null),
          e('br', {}, null),
          e('button', {className:'btn btn-light form-control border', onClick:this.handleClick.bind(this)}, 'Add')
      ),
      e('div', {}, null)
    );
  }

}
