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
        <p>{this.props.book.book.title}</p>
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

import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

toast.configure();

function App() {
  const [product] = React.useState({
    name: "Tesla Roadster",
    price: 64998.67,
    description: "Cool car"
  });

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://ry7v05l6on.sse.codesandbox.io/checkout",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="container">
      <div className="product">
        <h1>{product.name}</h1>
        <h3>On Sale · ${product.price}</h3>
      </div>
      <StripeCheckout
        stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
        token={handleToken}
        amount={product.price * 100}
        name="Tesla Roadster"
        billingAddress
        shippingAddress
      />
    </div>
  );
}