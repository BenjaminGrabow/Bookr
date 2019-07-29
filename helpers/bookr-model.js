const db = require('../database/db.js');


const getAllBooks = () => {
  return db('books');
};

const getBookById = (id) => {
  return db('books')
  .where({ id });
};

const createNewBook = (book) => {
  return db('books')
  .insert(book);
};

const updateBookById = ({ title, author, publisher, description }, id) => {
  return db('books')
  .where({ id })
  .update({ title, author, publisher, description });
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
  deleteBookById
};