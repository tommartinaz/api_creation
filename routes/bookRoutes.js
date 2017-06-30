var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function (req, res) {
  knex('books')
    .then((books) => {
      res.send(books);
    });
});

router.post('/add', (req, res) => {
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
});

router.patch('/edit/:id', (req,res) => {
  knex('books').where('id', req.params.id).update({
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
});

router.delete('/:id', (req,res) => {
  knex('books').where('id', req.params.id).del()
  .then(books => {
    res.redirect('/books');
  });
});

router.get('/:id', (req, res) => {
knex('books').where('id', req.params.id)
  .then((books) => {
    res.send(books);
  });
});


module.exports = router;