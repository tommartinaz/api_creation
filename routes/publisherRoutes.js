var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', (req, res) => {
  knex('publishers')
  .then(pubs => {
    res.send(pubs);
  });
});

router.post('/add', (req, res) => {
  knex('publishers').insert({
    name: req.body.name
  })
  .then(pubs => {
    res.redirect('/publishers');
  });
});

router.patch('/edit/:id', (req, res) => {
  knex('publishers').where('id', req.params.id).update({
    name: req.body.name
  })
  .then(pubs => {
    res.redirect('/publishers');
  });
});

router.delete('/:id', (req, res) => {
  knex('publishers').where('id', req.params.id).del()
  .then(pubs => {
    res.redirect('/publishers');
  });
});

router.get('/:id', (req, res) => {
  knex('publishers').where('id', req.params.id)
  .then(pubs => {
    res.send(pubs);
  });
});

module.exports = router;