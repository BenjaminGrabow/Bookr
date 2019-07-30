const Books = require("../helpers/bookr-model");

async function validatePost(req, res, next) {
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

async function validateDeleteId(req, res, next) {
  // const { id } = req.params

  const deleteBook = await Books.deleteBookById(req.params.id);
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
    }
  } catch (error) {
    res.status(500).json({ errorMessage: 'request dont could process' })
  }
};


module.exports = {
  validatePost,
  validateDeleteId,
  validatePutId
};
