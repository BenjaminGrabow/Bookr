const Books = require("../helpers/bookr-model");

async function validatePostId(req, res, next) {
  const newBook = await Books.createNewBook(req.body);
  const book = await Books.getBookById(newBook[0]);
  try {
    if (newBook) {
      req.book = book;
      next();
    } else {
      res.status(400).json({ message: 'invalid Id ' })
    }
  } catch (error) {
    res.status(500).json({ errorMessage: 'request dont could process' })
  }
};

async function validateDeleteId(req, res, next) {
  const { id } = req.params
  const deleteBook = await Book.deleteBookById(id);
  try {
    if (deleteBook) {
      req.book = book;
      next();
    } else {
      res.status(400).json({ message: 'invalid Id ' })
    }
  } catch (error) {
    res.status(500).json({ errorMessage: 'request dont could process' })
  }
};

async function validatePutId(req, res, next) {
  const { title, author, publisher, description } = req.body;

  const result = await Book.updateBookById({ title, author, publisher, description }, req.params.id);

  try {
    if (result) {
      req.book = book;
      next();
    } else {
      res.status(400).json({ message: 'invalid Id ' })
    }
  } catch (error) {
    res.status(500).json({ errorMessage: 'request dont could process' })
  }
};


module.exports = {
  validatePostId,
  validateDeleteId,
  validatePutId
};
