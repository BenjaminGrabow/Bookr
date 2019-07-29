import React from 'react';
import { connect } from 'react-redux';
// import { fetchBooks } from '../../../Store/actions';

class AllBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

componentDidMount = () => {
 
};

  render() { 
    return ( 
      <div>
{this.props.book ? (this.props.books.map(book => <p>{book.title}</p>)) : null}
      </div>
     );
  }
}

const mapStateToProps = state => {
  return {
    book: state.book
  };
};
 
export default connect(mapStateToProps )(AllBooks);