
exports.seed = function(knex, Promise) {
  return knex('books').del()
    .then(function () {
      return knex('books').insert([
        {id: 1, title: `Rich Dad Poor Dad: What the Rich Teach 
        Their Kids About Money That the Poor and Middle Class Do Not!`,
         publisher: 'Amazon',
          author: 'Robert T. Kiyosaki',
          description: `April 2017 marks 20 years since Robert Kiyosaki’s 
          Rich Dad Poor Dad first made waves in the Personal Finance arena.
          It has since become the #1 Personal Finance book of all time... 
          translated into dozens of languages and sold around the world.`,
          photo: 'https://images-na.ssl-images-amazon.com/images/I/51u8ZRDCVoL._SX330_BO1,204,203,200_.jpg' 
        },
        {id: 2, title: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future',
         publisher: 'Amazon',
          author: 'Ashlee Vance',
           description: `In the spirit of Steve Jobs and Moneyball, Elon Musk is both an illuminating and authorized
            look at the extraordinary life of one of Silicon Valley’s most exciting, unpredictable, and ambitious
             entrepreneurs—a real-life Tony Stark—and a fascinating exploration of the renewal of American invention`,
            photo: 'https://images-na.ssl-images-amazon.com/images/I/51uWemcw0gL._SX329_BO1,204,203,200_.jpg' },
        {id: 3,
           title: 'The Kite Runner',
            publisher: 'Amazon',
             author: 'Khaled Hosseini',
              description: `The #1 New York Times bestselling debut novel that introduced Khaled Hosseini 
              to millions of readers the world over.`,
               photo: 'https://jamesclear.com/wp-content/uploads/2017/04/The-Kite-Runner-by-Khaled-Hosseini-444x700.jpg' }
      ]);
    });
};
