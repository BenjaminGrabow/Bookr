const router = require('express').Router();

const Book = require('../helpers/bookr-model.js');

const { validatePost, validateDeleteId, validatePutId } = require('../middleware/middleware');

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

router.post("/",validatePost, (req, res) => {
      res.status(200).json(req.book);
});

router.put("/:id",validatePutId, (req, res) => {
      res.status(200).json(req.book);
});

router.delete('/:id' ,validateDeleteId, (req, res) => {
      res.status(200).json({ message: "book got deleted !"});
});

  module.exports = router;