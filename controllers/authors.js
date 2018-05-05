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
        }, '*')
        .then(author => {
            res.send(author[0]);
        });
    },

    edit_author: (req,res) => {
        knex('authors').where('id', req.params.id).update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
        }, '*')
        .then((author) => {
            res.send(author[0]);
        });
    },

    delete_author: (req,res) => {
        knex('authors').where('id', req.params.id).del()
        .then((authors) => {
            res.sendStatus(204);
        });
    }
}
