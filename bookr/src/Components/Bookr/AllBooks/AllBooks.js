import React from 'react';
import { connect } from 'react-redux';
import { fetchBooks, fetchBook } from '../../../Store/actions';

class AllBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

componentDidMount = () => {
 this.props.fetchBooks();
};

  render() {
    if(this.props.book){
      return (
        <div>
        <a href="/payment"><p>{this.props.book.book.title}</p></a>
        <p>{this.props.book.book.author}</p>
        <p>{this.props.book.book.publisher}</p>
        <p>{this.props.book.book.description}</p>
        {this.props.book.reviews.map(review => {
          return <div>
            <p>{review.reviewer}</p>
            <p>{review.review}</p>
          </div>
        })}

        </div>
      )
    } 
    return ( 
      <div>
{this.props.books ? (this.props.books.map(book => {
return <p onClick={() => this.props.fetchBook(book.id)}>{book.title}</p>
})) : null}
      </div>
     );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    book: state.book
  };
};
 
export default connect(mapStateToProps, { fetchBooks, fetchBook } )(AllBooks);