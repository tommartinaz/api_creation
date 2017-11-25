const knex = require('../db/knex');

module.exports = {
    get_all_books: (req, res) => {
        knex('books')
          .then((books) => {
            res.send(books);
          });
    },

    get_one_book: (req, res) => {
        knex('books').where('id', req.params.id)
          .then((books) => {
            res.send(books);
          });
    },

    add_book: (req, res) => {
        knex('books').insert({
            title: req.body.title,
            genre_id: req.body.genre_id,
            year_published: req.body.year_published,
            author_id: req.body.author_id,
            publisher_id: req.body.publisher_id,
            cover_img: req.body.cover_img
          })
          .then((books) => {
            res.send(books);
          });
    },

    edit_book: (req,res) => {
        knex('books')
            .where('id', req.params.id)
            .update({
                title: req.body.title,
                genre_id: req.body.genre_id,
                year_published: req.body.year_published,
                author_id: req.body.author_id,
                publisher_id: req.body.publisher_id,
                cover_img: req.body.cover_img
            })
            .then(books => {
                res.redirect('/books');
            });
    },

    delete_book: (req,res) => {
        knex('books')
            .where('id', req.params.id)
            .del()
            .then(books => {
                res.redirect('/books');
            });
    }
}