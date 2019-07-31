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
  .createTable('user_preference', user => {
    user.increments();
    user.text('photo', 50);
    user.text('first_name', 50);
    user.text('last_name', 50);
    user
      .integer("user_id")
      .unsigned()
      .unique()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
    .createTable('books', books => {
      books.increments();
      books.text('title', 50).notNullable();
      books.text('author', 50).notNullable();
      books.text('publisher', 50).notNullable();
      books.text('photo', 50);
      books.text('description', 1000);
      books.integer('price');
    })
    .createTable('reviews', review => {
      review.increments();
      review.text('reviewer', 50).notNullable();
      review.text('review', 500).notNullable();
      review.text('photo', 50);
      review.text('star1', 20);
      review.text('star2', 20);
      review.text('star3', 20);
      review.text('star4', 20);
      review.text('star5', 20);
      review
        .integer("book_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("books")
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('user_preference')
    .dropTableIfExists('books')
    .dropTableIfExists('reviews');
};
