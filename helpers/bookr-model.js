const db = require('../database/dbConfig.js');


const getAllBooks = () => {
  return db('books');
};

const getBookById = (id) => {
  return db('books')
  .where({ id });
};

const getReviewById = (book_id) => {
  return db('reviews')
  .where({ book_id });
};

const createNewBook = (book) => {
  return db('books')
  .insert(book);
};

const createNewReview = (review) => {
  return db('reviews')
  .insert(review);
};

const updateBookById = ({ title, photo, author, publisher, description, price }, id) => {
  return db('books')
  .where({ id })
  .update({ title, photo, author, publisher, description, price });
};

const deleteBookById = (id) => {
  return db('books')
  .where({ id })
  .del();
};

module.exports = {
  getAllBooks,
  getBookById,
  createNewBook,
  updateBookById,
  deleteBookById,
  getReviewById,
  createNewReview
};