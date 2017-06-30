
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        {first_name: "Terry", last_name: "Brooks"},
        {first_name: "John", last_name: "Grisham"},
        {first_name: "Raymond E.", last_name: "Feist"},
        {first_name: "George R. R.", last_name: "Martin"},
        {first_name: "Stephen", last_name: "King"},
        {first_name: "J.K.", last_name: "Rowling"},
        {first_name: "J.R.R.", last_name: "Tolkein"},
        {first_name: "Joel", last_name: "Rosenberg"},
      ]);
    });
};
