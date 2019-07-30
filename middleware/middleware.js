const Books = require("../helpers/bookr-model");

async function validatePostForBook(req, res, next) {
  const request = req.body;

  try {
    if (request.author &&
      request.title &&
      request.publisher) {
      const newBook = await Books.createNewBook(request);
      const book = await Books.getBookById(newBook[0]);
      req.book = book;
      next();
    } else {
      res.status(400).json({ message: 'You must provide at least title, author and publisher !' })
    }
  } catch (error) {
    res.status(500).json({ errorMessage: 'request dont could process' })
  }
};

async function validatePostForReview(req, res, next) {
  const request = req.body;

  try {
    if (request.review) {
      const newReview = await Books.createNewPost(request);
      req.review = newReview;
      next();
    } else {
      res.status(400).json({ message: 'You must provide at least a review !' })
    }
  } catch (error) {
    res.status(500).json({ errorMessage: 'request dont could process' })
  }
};

async function validateDeleteId(req, res, next) {
  const { id } = req.params

  const deleteBook = await Books.deleteBookById(id);
  try {
    if (deleteBook) {
      next();
    } else {
      res.status(400).json({ message: 'invalid Id ' })
    }
  } catch (error) {
    res.status(500).json({ errorMessage: 'request dont could process' })
  }
};

async function validatePutId(req, res, next) {
const { title, author, publisher, description, price } = req.body;

  try {
      const result = await Books.updateBookById({ title, author, publisher, description, price }, req.params.id);
     
      const book = await Books.getBookById(req.params.id);
      
      if (result) {
        req.book = book;
        next();
      } else {
        res.status(400).json({ message: 'invalid Id !' })
      }

  } catch (error) {
    res.status(500).json({ errorMessage: 'request dont could process' })
  }
};


module.exports = {
  validatePostForBook,
  validatePostForReview,
  validateDeleteId,
  validatePutId
};
