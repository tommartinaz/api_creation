var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', (req, res) => {
  knex('genres')
  .then(genres => {
    res.send(genres);
  });
});

router.post('/add', (req,res) => {
  knex('genres').insert({
    genre: req.body.genre
  })
  .then(genres => {
    res.send(genres);
  });
});

router.patch('/edit/:id', (req, res) => {
  knex('genres').where('id', req.params.id).update({
    genre: req.body.genre
  })
  .then(genres => {
    res.redirect('/genres');
  });
});

router.delete('/:id', (req, res) => {
  knex('genres').where('id', req.params.id).del()
  .then(genres => {
    res.redirect('/genres');
  });
});

router.get('/:id', (req,res) => {
  knex('genres').where('id', req.params.id)
  .then(genres => {
    res.send(genres);
  })
})

module.exports = router;