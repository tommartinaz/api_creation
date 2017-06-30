
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('publishers').del()
    .then(function () {
      // Inserts seed entries
      return knex('publishers').insert([
        {name: 'Tor'},
        {name: 'Del Rey'},
        {name: 'Bantam'},
        {name: 'George Allen and Unwin'},
        {name: 'Wynwood Press'},
        {name: 'Doubleday'}
      ]);
    });
};
