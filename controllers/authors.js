const knex = require('../db/knex');

module.exports = {
    get_authors: (req, res) => {
        knex('authors').select()
        .then((authors) => {
            res.send(authors);
        });
    },

    get_one_author: (req, res) => {
        knex('authors').where('id', req.params.id)
        .then((authors) => {
            res.send(authors);
        });
    },

    add_author: (req,res) => {
        knex('authors').insert({
            first_name: req.body.first_name,
            last_name: req.body.last_name
        })
        .then((authors) => {
            res.send(authors);
        });
    },

    edit_author: (req,res) => {
        knex('authors').where('id', req.params.id).update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
        })
        .then((authors) => {
            res.redirect('/authors');
        });
    },

    delete_author: (req,res) => {
        knex('authors').where('id', req.params.id).del()
        .then((authors) => {
            res.redirect('/authors');
        });
    }
}