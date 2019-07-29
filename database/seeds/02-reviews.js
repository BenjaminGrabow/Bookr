exports.seed = function(knex, Promise) {
  return knex('reviews').del()
    .then(function () {
      return knex('reviews').insert([
        {id: 1, reviewer: 'Ryan',
      review: 'Awesome book !',
      book_id: 1
    },
        {id: 2, reviewer: 'Peter',
      review: 'Good read, was fully worth my time.',
      book_id: 1
    },
        {id: 3, reviewer: 'Lisa',
      review: 'Fascinating book !',
      book_id: 1
    },     
    {id: 4, reviewer: 'Ben',
    review: 'I loved to spend time with this book.',
    book_id: 2
  },
      {id: 5, reviewer: 'Karim',
    review: 'Awesome book !',
    book_id: 3
  },
      {id: 6, reviewer: 'Daniel',
    review: 'Super interesting story.',
    book_id: 3
  }
      ]);
    });
};
