import React from 'react';
import BookManager from '../personaLibrary';

let e = React.createElement;

export default class Book extends React.Component {
  render() {

    return React.createElement(
      'div',
      {className:'card', id:this.props.id},
        e('div', {className:'card-header'},
        /*e('h2', {}, this.props.title),
        e('div', {}, this.props.author),
        e('a', {href:"/book/" + this.props.id}, 'More...'),
        e('br', {}, null),
        e('button', {className:'btn btn-light border', onClick: () => {BookManager.markAsRead(this.props.id); this.props.func();}}, 'Mark as Read'),
        e('button', {className:'btn btn-light border', onClick: () => {BookManager.deleteBook(this.props.id); this.props.func(); }}, 'Delete'),
        e('br', {}, null),
        e('br', {}, null),
        e('br', {}, null),*/
        e('div', {className:'row'},
          e('div', {className:'col'},
            e('h2', {}, this.props.title)
          ),
          e('div', {className:'col'},
            e('button', {className:'form-control btn btn-light border', onClick: () => {BookManager.markAsRead(this.props.id); this.props.func();}}, 'Mark as Read')
          )
        ),
        e('div', {className:'row'},
          e('div', {className:'col'},
            e('div', {}, this.props.author)
          ),
          e('div', {className:'col'},
            e('button', {className:'form-control btn btn-light border', onClick: () => {BookManager.deleteBook(this.props.id); this.props.func(); }}, 'Delete')
          )
        ),
        e('div', {className:'row'},
          e('div', {className:'col'},
            null
          ),
          e('div', {className:'col'},
            e('br', {}, null),
            e('a', {href:"/book/" + this.props.id}, 'More...')
          )
        )
      )
    );
  }

}
