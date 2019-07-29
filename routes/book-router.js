const router = require('express').Router();

const Book = require('../helpers/bookr-model.js');

router.get('/', async (req, res) => {
  
  try {
    const books = await Book.getAllBooks();
    
  res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'Cannot retrieve the books' });
  }
});

router.get("/:id", async (req, res) => {
  const getBook = await Book.getBookById(req.params.id);
  const reviews = await Book.getReviewById(req.params.id);
  try {
    if(getBook && reviews) {
      getBook.map(book => {
        res.status(200).json({ book, reviews: reviews});
      });
     } else if(getBook) {
      res.status(200).json(getBook);
     } else {
      res.status(400).json({ message: 'invalid Id ' });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: `request could'nt process` });
  }
});

router.get("/reviews/:id", async (req, res) => {
  const reviews = await Book.getReviewById(req.params.id);
  try {
   res.status(200).json(reviews)
  } catch (error) {
    res.status(500).json({ errorMessage: `request could'nt process` });
  }
});

router.post("/books", async (req, res) => {

  const arrayOfId = await Text.createNewBook(req.body);

  const arrayOfBook = await Text.getBookById(arrayOfId[0]);

  try {
    if (arrayOfId) {
      res.json(arrayOfBook[0]);
    } else {
      res.status(400).json({ message: 'invalid Id ' });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: `request could'nt process` });
  }
});

router.put("/:id", async (req, res) => {
  const { title, author, publisher, description } = req.body;

  const result = await Book.updateBookById({ title, author, publisher, description }, req.params.id);

  try {
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(400).json({ message: 'invalid Id ' });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: `request could'nt process` });
  }
});

router.delete('/:id', async (req, res) => {
  const deleteBook = await Book.deleteBookById(req.params.id);

  try {
    if (deleteBook) {
      res.status(200).json(deleteBook);
    } else {
      res.status(400).json({ message: 'invalid Id ' });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: `request could'nt process` });
  }
});

  module.exports = router;