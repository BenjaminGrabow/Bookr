exports.seed = function(knex, Promise) {
  return knex('reviews').del()
    .then(function () {
      return knex('reviews').insert([
        {id: 1, reviewer: 'Ryan',
      review: 'Awesome book !',
      photo: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      book_id: 1
    },
        {id: 2, reviewer: 'Peter',
      review: 'Good read, was fully worth my time.',
      photo: 'https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      book_id: 1
    },
        {id: 3, reviewer: 'Lisa',
      review: 'Fascinating book !',
      photo: 'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      book_id: 1
    },     
    {id: 4, reviewer: 'Ben',
    review: 'I loved to spend time with this book.',
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    book_id: 2
  },
      {id: 5, reviewer: 'Karim',
    review: 'Awesome book !',
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    book_id: 3
  },
      {id: 6, reviewer: 'Daniel',
    review: 'Super interesting story.',
    photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    book_id: 3
  }
      ]);
    });
};
