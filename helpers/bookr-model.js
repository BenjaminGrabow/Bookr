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

const updateBookById = ({ title, photo, author, publisher, description }, id) => {
  return db('books')
  .where({ id })
  .update({ title, photo, author, publisher, description });
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
};