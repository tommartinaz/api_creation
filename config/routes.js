const authors = require('../controllers/authors');
const books = require('../controllers/books');
const genres = require('../controllers/genres');
const index = require('../controllers/index');
const publishers = require('../controllers/publishers');
const details = require('../controllers/details');


module.exports = (app) => {


    app.get('/authors', authors.get_authors);
    app.get('/authors/:id', authors.get_one_author);
    app.post('/authors/add', authors.add_author);
    app.patch('/authors/edit/:id', authors.edit_author);
    app.delete('/authors/:id', authors.delete_author);

    app.get('/books', books.get_all_books);
    app.get('/books/:id', books.get_one_book);
    app.post('/books/add', books.add_book);
    app.patch('/books/edit/:id', books.edit_book);
    app.delete('/books/:id', books.delete_book);

    app.get('/genres', genres.get_all_genres);
    app.get('/genres/:id', genres.get_one_genre);
    app.post('/genres/add', genres.add_genre);
    app.patch('/genres/edit/:id', genres.edit_genre);
    app.delete('/genres/:id', genres.delete_genre);
    
    app.get('/publishers', publishers.get_all_publishers);
    app.get('/publishers/:id', publishers.get_one_publisher);
    app.post('/publishers/add', publishers.add_publisher);
    app.patch('/publishers/edit/:id', publishers.edit_publisher);
    app.delete('/publishers/:id', publishers.delete_publisher);

    app.get('/details', details.get_details);
    
}