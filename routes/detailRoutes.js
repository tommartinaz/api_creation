var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', (req,res) => {
    knex.raw(`select b.title, a.first_name, a.last_name, g.genre, p.name publisher_name, b.cover_img 
        from books b 
        join authors a 
        on a.id = b.author_id
        join genres g
        on b.genre_id = g.id
        join publishers p
        on b.publisher_id = p.id`)
        .then(data => {
            res.send(data.rows);
        });
    
});

module.exports = router;