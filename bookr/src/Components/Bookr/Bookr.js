import React from 'react';
import { connect } from 'react-redux';
import { fetchBooks, fetchBook, closeBook } from '../../Store/actions';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './bookr.scss';

toast.configure();

class Bookr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount = () => {
    this.props.fetchBooks();
  };

  async handleToken(token, title, price) {
    const productData = {
      name: title, price: price
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
    if (this.props.book) {
      return (
        <div
        className="single-book">
          <div className="close">
          <i className="fa fa-window-close"
            onClick={this.props.closeBook} />
            </div>
          <p>{this.props.book.book.title}</p>
          <p>Author {this.props.book.book.author}</p>
          <p>Publisher{this.props.book.book.publisher}</p>
          <p>{this.props.book.book.description}</p>
          <p>{this.props.book.book.price}</p>
          <StripeCheckout
            stripeKey="pk_test_Grqfk8uqKNCJYpAQS2t89UB700wHJklrMa"
            token={(token) =>
              this.handleToken(token,
                this.props.book.book.title,
                this.props.book.book.price)}
            amount={this.props.book.book.price * 100}
            name="Tesla Roadster"
            billingAddress
            shippingAddress
          />
          <div className="reviews">
          {this.props.book.reviews.map((review, index) => {
            return <div
            className="review"
              key={index}>
              <p>{review.reviewer}</p>
              <p>{review.review}</p>
            </div>
          })}
          </div>
        </div>
      )
    }
    return (
      <div>
        {this.props.books ? (this.props.books.map((book, index) => {
          return <p
          key={index}
          onClick={() =>
            this.props.fetchBook(book.id)}>{book.title}</p>
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

export default connect(mapStateToProps, { fetchBooks, fetchBook, closeBook })(Bookr);