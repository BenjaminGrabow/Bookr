import React from 'react';
import { connect } from 'react-redux';
import { fetchBooks, fetchBook } from '../../../Store/actions';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

class AllBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

componentDidMount = () => {
 this.props.fetchBooks();
};

async handleToken(token, title, price) {
  const productData = { name: title , price: price
  }

  console.log(token, productData)
  const response = await axios.post(
    "http://localhost:3300/payment",
    { token, productData }
  );
  const { status } = response.data;
  console.log("Response:", response.data);
  if (status === "success") {
    toast("Success! Check email for details", { type: "success" });
  } else {
    toast("Something went wrong", { type: "error" });
  }
}

  render() {
    if(this.props.book){
      return (
        <div>
        <i class="fa fa-window-close"></i>
        <p>{this.props.book.book.title}</p>
        <p>{this.props.book.book.author}</p>
        <p>{this.props.book.book.publisher}</p>
        <p>{this.props.book.book.description}</p>
        <p>{this.props.book.book.price}</p>
        <StripeCheckout
        stripeKey="pk_test_Grqfk8uqKNCJYpAQS2t89UB700wHJklrMa"
        token={(token) => this.handleToken(token, this.props.book.book.title,
           this.props.book.book.price )}
        amount={this.props.book.book.price * 100}
        name="Tesla Roadster"
        billingAddress
        shippingAddress
      />
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