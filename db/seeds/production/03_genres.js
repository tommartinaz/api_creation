exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('genres').del()
    .then(function () {
      // Inserts seed entries
      return knex('genres').insert([
        {genre: "Fantasy"},
        {genre: "Science Fiction"},
        {genre: "Drama"},
        {genre: "Horror/Suspense"},
      ]);
    });
};