exports.up = function (knex) {
  return knex.schema.createTable('users', users => {
    users.increments();
    users
      .string('username', 50)
      .notNullable()
      .unique();
    users.string('password', 50)
      .notNullable();
  })
    .createTable('books', books => {
      books.increments();
      books.text('title', 50).notNullable();
      books.text('author', 50).notNullable();
      books.text('publisher', 50).notNullable();
      books.text('photo', 50);
      books.text('description', 1000);
    })
    .createTable('reviews', reviews => {
      reviews.increments();
      reviews.text('reviewer', 50).notNullable();
      reviews.text('review', 500).notNullable();
      reviews
        .integer("book_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("books");
    });
};

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('books')
    .dropTableIfExists('reviews');
};
