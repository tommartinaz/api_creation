var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', (req,res) => {
        knex('books as b')
        .join('authors as a', 'a.id', '=', 'b.author_id')
        .join('genres as g', 'b.genre_id', '=', 'g.id')
        .join('publishers as p', 'b.publisher_id', '=', 'p.id')
        .select('b.id', 'b.title', 'a.first_name as author_first_name', 'a.last_name as author_last_name', 'g.genre', 'p.name as publisher_name', 'b.year_published', 'b.cover_img')
        .orderBy('b.id')
        .then(data => {
            res.send(data);
        });
    
});

module.exports = router;