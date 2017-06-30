var express=require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', (req, res) => {
    knex('authors').select()
    .then((authors) => {
        res.send(authors);
    });
});

router.post('/add',(req,res) => {
    knex('authors').insert({
        first_name: req.body.first_name,
        last_name: req.body.last_name
    })
    .then((authors) => {
        res.send(authors);
    });
});

router.patch('/edit/:id', (req,res) => {
    knex('authors').where('id', req.params.id).update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
    })
    .then((authors) => {
        res.redirect('/authors');
    });
});

router.delete('/:id', (req,res) => {
    knex('authors').where('id', req.params.id).del()
    .then((authors) => {
        res.redirect('/authors');
    });
});

router.get('/:id', (req, res) => {
    knex('authors').where('id', req.params.id)
    .then((authors) => {
        res.send(authors);
    });
});

module.exports = router;