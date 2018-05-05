const knex = require('../db/knex');

module.exports = {
    get_all_publishers: (req, res) => {
        knex('publishers')
        .then(pubs => {
          res.send(pubs);
        });
    },

    get_one_publisher: (req, res) => {
        knex('publishers').where('id', req.params.id)
        .then(pubs => {
          res.send(pubs);
        });
    },

    add_publisher: (req, res) => {
        knex('publishers').insert({
          name: req.body.name
        }, '*')
        .then(pubs => {
          res.send(pubs[0]);
        });
    },

    edit_publisher: (req, res) => {
        knex('publishers').where('id', req.params.id).update({
          name: req.body.name
        }, '*')
        .then(pubs => {
          res.send(pubs[0]);
        });
    },

    delete_publisher: (req, res) => {
        knex('publishers').where('id', req.params.id).del()
        .then(pubs => {
          res.sendStatus(204);
        });
    }
}
