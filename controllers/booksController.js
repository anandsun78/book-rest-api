function booksController(Book) {
  function post(req, res) {
    const inputBook = new Book(req.body);
    inputBook.save();
    return res.status(201).json(inputBook);
  }
  function get(req, res) {
    const query = {};
    if (req.query.genre) {
      query.genre = req.query.genre;
    }
    Book.find(query, (err, books) => {
      if (err) {
        return escape.send(err);
      }
      return res.json(books);
    });
  }
  return { get, post };
}

module.exports = booksController;
