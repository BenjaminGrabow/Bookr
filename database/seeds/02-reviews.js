exports.seed = function (knex, Promise) {
  return knex('reviews').del()
    .then(function () {
      return knex('reviews').insert([
        {
          id: 1, reviewer: 'Ryan',
          review: 'Awesome book !',
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd2eJVSAd0BO0iOipuHg1wY0gtcf828hnD1d4_CFEucv17YLs',
          star1: 'fa fa-star checked',
          star2: 'fa fa-star checked',
          star3: 'fa fa-star checked',
          star4: 'fa fa-star checked',
          star5: 'fa fa-star checked',
          book_id: 1
        },
        {
          id: 2, reviewer: 'Peter',
          review: 'Good read, was fully worth my time.',
          photo: 'https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          star1: 'fa fa-star checked',
          star2: 'fa fa-star checked',
          star3: 'fa fa-star checked',
          star4: 'fa fa-star checked',
          star5: 'fa fa-star checked',
          book_id: 1
        },
        {
          id: 3, reviewer: 'Lisa',
          review: 'Fascinating book !',
          photo: 'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          star1: 'fa fa-star checked',
          star2: 'fa fa-star checked',
          star3: 'fa fa-star checked',
          star4: 'fa fa-star checked',
          star5: 'fa fa-star',
          book_id: 1
        },
        {
          id: 4, reviewer: 'Ben',
          review: 'I loved to spend time with this book.',
          photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          star1: 'fa fa-star checked',
          star2: 'fa fa-star checked',
          star3: 'fa fa-star checked',
          star4: 'fa fa-star checked',
          star5: 'fa fa-star checked',
          book_id: 2
        },
        {
          id: 5, reviewer: 'Karim',
          review: 'Awesome book !',
          photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          star1: 'fa fa-star checked',
          star2: 'fa fa-star checked',
          star3: 'fa fa-star checked',
          star4: 'fa fa-star',
          star5: 'fa fa-star',
          book_id: 3
        },
        {
          id: 6, reviewer: 'Daniel',
          review: 'Super interesting story.',
          photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          star1: 'fa fa-star checked',
          star2: 'fa fa-star checked',
          star3: 'fa fa-star checked',
          star4: 'fa fa-star checked',
          star5: 'fa fa-star',
          book_id: 3
        }
      ]);
    });
};
