import React from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../../Store/actions';

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