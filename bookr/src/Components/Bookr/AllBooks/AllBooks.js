import React from 'react';
import { connect } from 'react-redux';

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
 
export default connect(mapStateToProps, { fetchBooks } )(AllBooks);