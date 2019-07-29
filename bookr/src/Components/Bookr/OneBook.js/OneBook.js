import React from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../../Store/actions';

class AllBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

componentDidMount = () => {
 this.props.fetchBooks();
};

  render() { 
    return ( 
      <div>
{this.props.books ? (this.props.books.map(book => <p>{book.title}</p>)) : null}
      </div>
     );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  };
};
 
export default connect(mapStateToProps, { fetchBooks } )(AllBooks);