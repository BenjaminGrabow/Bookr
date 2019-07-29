import React from 'react';
import { connect } from 'react-redux';
import { fetchBook } from '../../../Store/actions';

class OneBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

componentDidMount = () => {
this.props.fetchBook(this.props.id)
};

  render() { 
    return ( 
      <div>
{this.props.book ? (this.props.book.map(book => <p>{book.title}</p>)) : null}
      </div>
     );
  }
}

const mapStateToProps = state => {
  return {
    book: state.book,
    id: state.id
  };
};
 
export default connect(mapStateToProps, { fetchBook } )(OneBook);