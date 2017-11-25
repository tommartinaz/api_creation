const knex = require('../db/knex');

module.exports = {
    get_all_genres: (req, res) => {
        knex('genres')
        .then(genres => {
          res.send(genres);
        });
    },

    get_one_genre: (req,res) => {
        knex('genres').where('id', req.params.id)
        .then(genres => {
          res.send(genres);
        })
    },

    add_genre: (req,res) => {
        knex('genres').insert({
          genre: req.body.genre
        })
        .then(genres => {
          res.send(genres);
        });
    },

    edit_genre: (req, res) => {
        knex('genres').where('id', req.params.id).update({
          genre: req.body.genre
        })
        .then(genres => {
          res.redirect('/genres');
        });
    },

    delete_genre: (req, res) => {
        knex('genres').where('id', req.params.id).del()
        .then(genres => {
          res.redirect('/genres');
        });
    }
}