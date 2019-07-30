import React from 'react';
import { connect } from 'react-redux';
import { fetchBooks, fetchBook, closeBook, addReview } from '../../Store/actions';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './bookr.scss';

toast.configure();

class Bookr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: ''
    }
  }

  componentDidMount = () => {
    this.props.fetchBooks();
  };

  handleChange = (e) => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addReview = () => {
   this.props.addReview(this.state.review);

   this.setState({
     review: ''
   });
  };

  async handleToken(token, title, price) {
    const product = {
      name: title, price: price
    }

    console.log(token, product)
    const response = await axios.post(
      "https://bookr-build-week.herokuapp.com/payment",
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

  render() {
    if (this.props.book) {
      return (
        <div
          className="single-book">
          <div className="pic-next-to-main-data">
            <img src={this.props.book.book.photo} alt="book" />
            <div className="main-data">
              <div className="close">
                <i className="fa fa-window-close"
                  onClick={this.props.closeBook} />
              </div>
              <p>{this.props.book.book.title}</p>
              <p>Author: {this.props.book.book.author}</p>
              <p>Publisher: {this.props.book.book.publisher}</p>
            </div>
          </div>
          <p>{this.props.book.book.description}</p>
          <p>{this.props.book.book.price} $</p>
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
                <div className="pic-name">
                  <img scr={review.photo} alt="user" />
                  <p>{review.reviewer}</p>
                </div>
                <div className="review-text">
                  <p>{review.review}</p>
                </div>
              </div>
            })}
          </div>
          <div className="add-review">
            <i 
            onClick={this.addReview}
            className="fa fa-plus-square" />
            <input
              type="text"
              value={this.state.review}
              onChange={this.handleChange}
              placeholder="review"
              name="review" />
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

export default connect(mapStateToProps, { fetchBooks, fetchBook, closeBook, addReview })(Bookr);