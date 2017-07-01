
exports.up = function(knex, Promise) {
  return knex.schema.createTable('publishers', (table) => {
    table.increments();
    table.string('name').notNullable();

  })
  .createTable('authors', (table) => {
      table.increments();
      table.string('first_name');
      table.string('last_name').notNullable();
  })
  .createTable('genres', (table) => {
      table.increments();
      table.string('genre').notNullable();
  })
  .createTable('books', (table) => {
      table.increments();
      table.string('title').notNullable();
      table.integer('genre_id').references('id').inTable('genres')
      table.integer('year_published');
      table.integer('author_id').references('id').inTable('authors');
      table.integer('publisher_id').references('id').inTable('publishers');
      table.string('cover_img');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books').dropTable('genres').dropTable('authors').dropTable('publishers');
};
