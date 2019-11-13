
exports.seed = function (knex, Promise) {
  return knex('books').del()
    .then(function () {
      return knex('books').insert([
        {
          id: 1, title: `Rich Dad Poor Dad: What the Rich Teach 
        Their Kids About Money That the Poor and Middle Class Do Not!`,
          publisher: 'Amazon',
          author: 'Robert T. Kiyosaki',
          description: `April 2017 marks 20 years since Robert Kiyosaki’s 
          Rich Dad Poor Dad first made waves in the Personal Finance arena.
          It has since become the #1 Personal Finance book of all time... 
          translated into dozens of languages and sold around the world.`,
          photo: 'https://images-na.ssl-images-amazon.com/images/I/51u8ZRDCVoL._SX330_BO1,204,203,200_.jpg',
          price: 30
        },
        {
          id: 2, title: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future',
          publisher: 'Amazon',
          author: 'Ashlee Vance',
          description: `In the spirit of Steve Jobs and Moneyball, Elon Musk is both an illuminating and authorized
            look at the extraordinary life of one of Silicon Valley’s most exciting, unpredictable, and ambitious
            entrepreneurs—a real-life Tony Stark—and a fascinating exploration of the renewal of American invention`,
          photo: 'https://images-na.ssl-images-amazon.com/images/I/51uWemcw0gL._SX329_BO1,204,203,200_.jpg',
          price: 55
        },
        {
          id: 3,
          title: 'The Kite Runner',
          publisher: 'Amazon',
          author: 'Khaled Hosseini',
          description: `The #1 New York Times bestselling debut novel that introduced Khaled Hosseini 
              to millions of readers the world over.`,
          photo: 'https://jamesclear.com/wp-content/uploads/2017/04/The-Kite-Runner-by-Khaled-Hosseini-444x700.jpg',
          price: 20
        },
        {
          id: 4, title: `Thinking, Fast and Slow`,
          publisher: 'Amazon',
          author: 'Daniel Kahneman',
          description: `The phenomenal international bestseller - 2 million copies sold - that will change the way you make decisions

          'A lifetime's worth of wisdom' Steven D. Levitt, co-author of Freakonomics
          'There have been many good books on human rationality and irrationality, but only one masterpiece.
           That masterpiece is Thinking, Fast and Slow' Financial Times`,
          photo: 'https://images-na.ssl-images-amazon.com/images/I/41jZIThj0aL._SX324_BO1,204,203,200_.jpg',
          price: 10.19
        },
        {
          id: 5, title: 'The Power of Habit: Why We Do What We Do, and How to Change',
          publisher: 'Amazon',
          author: 'Charles Duhigg',
          description: `We can always change. In The Power of Habit, award-winning New York Times business reporter Charles 
          Duhigg translates cutting-edge behavioural science into practical self-improvement action, distilling advanced neuroscience
           into fascinating narratives of transformation. `,
          photo: 'https://images-na.ssl-images-amazon.com/images/I/41owDNwBMNL._SX324_BO1,204,203,200_.jpg',
          price: 12.99
        },
        {
          id: 6,
          title: 'Deep Work: Rules for Focused Success in a Distracted World ',
          publisher: 'Amazon',
          author: 'Cal Newport',
          description: `One of the most valuable skills in our economy is 
          becoming increasingly rare. If you master this skill, you'll achieve
           extraordinary results.
          Deep Work is an indispensable guide to anyone seeking focused success in a distracted world.`,
          photo: 'https://images-na.ssl-images-amazon.com/images/I/41QoykqonNL._SX317_BO1,204,203,200_.jpg',
          price: 20.99
        },
        {
          id: 7, title: `The Organized Mind: Thinking Straight in the Age of Information Overload`,
          publisher: 'Amazon',
          author: ' Daniel Levitin',
          description: `Author and neuroscientist Daniel Levitin tackles the
           problems of twenty-first century information overload in his New 
          York Times and Sunday Times bestselling book The Organized Mind.`,
          photo: 'https://images-na.ssl-images-amazon.com/images/I/414PFUnar-L._SX324_BO1,204,203,200_.jpg',
          price: 30.99
        },
        {
          id: 8, title: 'Business English - Must-know phrases that can save your job ',
          publisher: 'Amazon',
          author: 'Henry Fischer',
          description: `This is a phrasebook - nothing more, nothing less. Keep it short. Keep it simple.
          Learn Business English anywhere, anytime with this simple eBook. 
          You plan a business letter, meeting, presentation or phone call - this eBook is the perfect crib.
          More than 500 useful phrases. English only. No nonsense, just essence!
          We wish you good luck and great success with all upcoming business events!`,
          photo: 'https://images-eu.ssl-images-amazon.com/images/I/51FzmD7fIuL.jpg',
          price: 27.50
        },
        {
          id: 9,
          title: 'Strangers: The Unforgettable Crime Thriller from the #1 Bestseller ',
          publisher: 'Amazon',
          author: 'Paul Finch',
          description: `When Lucy Clayburn goes undercover to find a prolific female serial killer, she puts herself
           in the line of fire in the criminal underworld.`,
          photo: 'https://images-na.ssl-images-amazon.com/images/I/51rmIoSs6hL._SX327_BO1,204,203,200_.jpg',
          price: 18.99
        },
        {
          id: 10, title: `Ashes to Ashes: An Unputdownable Thriller from the Sunday Times Bestseller`,
          publisher: 'Amazon',
          author: 'Paul Finch',
          description: `The Sunday Times bestseller returns with his next unforgettable crime thriller. 
          Fans of MJ Arlidge and Stuart MacBride won't be able to put this down. John Sagan is a forgettable man.
           You could pass him in the street and not realise he's there. But then, that's why he's so dangerous. 
           A torturer for hire, Sagan has terrorised - and mutilated - countless victims.
           And now he's on the move. DS Mark 'Heck' Heckenburg must chase the trail, even when it leads him to his hometown of Bradburn
            - a place he never thought he'd set foot in again. But Sagan isn't the only problem. Bradburn is being terrorised by a lone
             killer who burns his victims to death. And with the victims chosen at random, no-one knows who will be next. Least of all Heck...`,
          photo: 'https://images-na.ssl-images-amazon.com/images/I/51piaAbVXYL._SX321_BO1,204,203,200_.jpg',
          price: 10.19
        },
        {
          id: 11, title: 'The Dry: The Sunday Times Crime Book of the Year 2017',
          publisher: 'Amazon',
          author: 'Jane Harper',
          description: `Jane Harper's new novel, The Lost Man, is out now.
          WINNER OF THE BRITISH BOOK AWARDS CRIME THRILLER BOOK OF THE YEAR 2018
          WINNER OF THE CWA GOLD DAGGER AWARD 2017
          Amazon.com's #1 Pick for Best Mystery & Thriller 2017
          'One of the most stunning debuts I've ever read...Read it!' David Baldacci
          'Packed with sneaky moves and teasing possibilities that keep the reader guessing...
          The Dry is a breathless page-turner'
           Janet Maslin, New York Times `,
          photo: 'https://images-na.ssl-images-amazon.com/images/I/41vdFebA9KL._SX310_BO1,204,203,200_.jpg',
          price: 12.99
        },
        {
          id: 12,
          title: 'Bill Gates: A Biography',
          publisher: 'Amazon',
          author: 'Michael B. Becraft',
          description: `The cofounder of Microsoft, Bill Gates helped transform 
          society by ushering in the era of ubiquitous personal computing. This book examines the life and
           achievements of this standout American inventor and philanthropist`,
          photo: 'https://images-na.ssl-images-amazon.com/images/I/41E2B5boBiL._SX313_BO1,204,203,200_.jpg',
          price: 29.99
        },
        {
          id: 13, title: `INSPIRED: How to Create Tech Products Customers Love`,
          publisher: 'Amazon',
          author: 'Marty Cagan',
          description: `How do today's most successful tech companies--Amazon, Google, Facebook, 
          Netflix, Tesla--design, develop, and deploy the products that have earned the love of
           literally billions of people around the world? Perhaps surprisingly, they do it very 
           differently than the vast majority of tech companies. In INSPIRED, technology product 
           management thought leader Marty Cagan provides readers with a master class in how to
            structure and staff a vibrant and successful product organization, and how to discover
             and deliver 
          technology products that your customers will love--and that will work for your business.`,
          photo: 'https://images-na.ssl-images-amazon.com/images/I/41iRRYgWxYL._SX329_BO1,204,203,200_.jpg',
          price: 30.19
        },
        {
          id: 14, title: 'Investments',
          publisher: 'Amazon',
          author: 'Zvi Bodie',
          description: `Bodie, Kane, and Marcus' Investments is the leading textbook for the
           graduate/MBA investments market. It is recognized as the best blend of practical and 
           theoretical coverage, while maintaining an appropriate rigor and clear writing style.
            Its unifying theme is that security markets are nearly efficient, meaning that most 
            securities are usually priced appropriately given their risk and return attributes.
             The text places greater emphasis on asset allocation, and offers a much broader and 
             deeper treatment
           of futures, options, and other derivative security markets than most investment texts.`,
          photo: 'https://images-na.ssl-images-amazon.com/images/I/41Q1eAeMalL._SX392_BO1,204,203,200_.jpg',
          price: 39.90
        },
        {
          id: 15,
          title: 'Ego is the Enemy: The Fight to Master Our Greatest Opponent',
          publisher: 'Amazon',
          author: 'Ryan Holiday',
          description: `It's wrecked the careers of promising young geniuses. It's evaporated
           great fortunes and run companies into the ground. It's made adversity unbearable and 
           turned struggle into shame. Every great philosopher has warned against it, in our most
            lasting stories and countless works of art, in all culture and all ages. Its name? Ego,
             and it is the enemy - of ambition, of success and of resilience. In Ego is the Enemy,
              Ryan Holiday shows us how and why ego is such a powerful internal opponent to be 
              guarded against at all stages of our careers and lives, and that we can only create
               our best work when we identify, acknowledge and disarm its dangers. Drawing on an
                array of inspiring characters and narratives from literature, philosophy and history,
                 the book explores the nature and dangers of ego to illustrate how you can be humble
                  in your aspirations, gracious in your success and resilient in your failures. The 
                  result is an inspiring and timely reminder that humility and confidence are our 
                  greatest friends when confronting the challenges of a culture that tends to
          flames of ego, a book full of themes and life lessons that will resonate, uplift and inspire.`,
          photo: 'https://images-na.ssl-images-amazon.com/images/I/51os4QMx98L._SX365_BO1,204,203,200_.jpg',
          price: 17.99
        },
        {
          id: 16, title: `The Culture Map: Decoding How People Think, Lead, and Get Things Done Across Cultures`,
          publisher: 'Amazon',
          author: 'Erin Meyer',
          description: `An international business expert helps you understand and navigate cultural
           differences in this insightful
           and practical guide, perfect for both your work and personal life.`,
          photo: 'https://images-na.ssl-images-amazon.com/images/I/51XqPmTMfFL._SX326_BO1,204,203,200_.jpg',
          price: 10.19
        },
        {
          id: 17, title: '100 Side Hustles: Unexpected Ideas for Making Extra Money Without Quitting Your Day Job ',
          publisher: 'Amazon',
          author: 'Chris Guillebeau',
          description: `Best-selling author Chris Guillebeau presents a full-color ideabook featuring 100 stories of 
          regular people launching successful side businesses that almost anyone can do.           `,
          photo: 'https://images-na.ssl-images-amazon.com/images/I/41RbF89Kz9L._SX394_BO1,204,203,200_.jpg',
          price: 16.99
        },
        {
          id: 18,
          title: 'Corporate Finance, Global Edition',
          publisher: 'Amazon',
          author: 'Jonathan Berk',
          description: `For MBA/graduate students taking a course in corporate finance.
           An Emphasis on Core Financial Principles to Elevate Individuals' Financial Decision
            Making Using the unifying valuation framework based on the Law of One Price,
             top researchers Jonathan Berk and Peter DeMarzo have set the new canon for corporate 
             finance textbooks. Corporate Finance, Fourth Edition blends coverage of time-tested
              principles and the latest advancements with the practical perspective of the financial
               manager, so students have the knowledge and tools they need to make sound financial
                decisions in their careers. For a streamlined book specifically tailored to the
                 topics covered in the first one-semester course,
           Corporate Finance: The Core is also available by Jonathan Berk and Peter DeMarzo. `,
          photo: 'https://images-na.ssl-images-amazon.com/images/I/51bft8CLN4L._SX258_BO1,204,203,200_.jpg',
          price: 25.99
        },
        {
          id: 19, title: `The Business Model Navigator: 55 Models That Will Revolutionise Your Business`,
          publisher: 'Amazon',
          author: 'Oliver Gassmann',
          description: `The brains behind The Business Model Navigator have discovered
           that just 55 business models are responsible for 90% of the world's most
            successful businesses. These 55 models – from the Add-On model used by
             Ryanair to the Subscription model used by Spotify – provide the blueprints 
             you need to revolutionise your business and drive powerful change.
          As well as providing a practical framework for adapting and innovating your
           business model, this book also includes each of the 55 models in a quick-read
            format that covers:
          What it is
          Who invented it and who uses it now
          When and how to apply it
          “An excellent toolkit for developing your business model . ”
          Dr Heinz Derenbach, CEO, Bosch Software Innovations`,
          photo: 'https://images-na.ssl-images-amazon.com/images/I/41tEyiJZzQL._SX332_BO1,204,203,200_.jpg',
          price: 40.99
        },
        {
          id: 20, title: 'Fintech: The New DNA of Financial Services',
          publisher: 'Amazon',
          author: 'Pranay Gupta',
          description: `This extraordinary book, written by leading players in a burgeoning
           technology revolution, is about the merger of finance and technology (fintech),
            and covers its various aspects and how they impact each discipline within the
             financial services industry. It is an honest and direct analysis of where each
              segment of financial services will stand. Fintech: The New DNA of Financial Services
               provides an in-depth introduction to understanding the various areas of fintech and
                terminology such as AI, big data, robo-advisory, blockchain, cryptocurrency, 
                InsurTech, cloud computing, crowdfunding and many more. Contributions from fintech
                 innovators discuss banking, insurance and investment management
           applications, as well as the legal and human resource implications of fintech in the
            future.`,
          photo: 'https://images-na.ssl-images-amazon.com/images/I/41et1LLljPL._SX346_BO1,204,203,200_.jpg',
          price: 27.99
        },
        {
          id: 21,
          title: 'Never Split the Difference: Negotiating as if Your Life Depended on It',
          publisher: 'Amazon',
          author: 'Chris Voss',
          description: `After a stint policing the rough streets of Kansas City, Missouri, Chris 
          Voss joined the FBI,
           where his career as a kidnapping negotiator brought him face-to-face with bank
            robbers, gang leaders and terrorists. Never Split the Difference takes you inside
             his world of high-stakes negotiations, revealing the nine key principles that helped
              Voss and his colleagues succeed when it mattered the most – when people’s lives were
               at stake. 
          Rooted in the real-life experiences of an intelligence professional at the top
           of his game, Never Split the Difference will give you the competitive edge in any 
           discussion.`,
          photo: 'https://images-na.ssl-images-amazon.com/images/I/5119RQ4ZRlL._SX324_BO1,204,203,200_.jpg',
          price: 12.99
        },
        {
          id: 22, title: `Crashed: How a Decade of Financial Crises Changed the World`,
          publisher: 'Amazon',
          author: 'Adam Tooze',
          description: `In September 2008 the Great Financial Crisis, triggered by the collapse
           of Lehman brothers, shook the world. A decade later its spectre still haunts us. As
            the appalling scope and scale of the crash was revealed, the financial institutions 
            that had symbolised the West's triumph since the end of the Cold War, seemed -
           through greed, malice and incompetence - to be about to bring the entire system to its
            knees.`,
          photo: 'https://images-na.ssl-images-amazon.com/images/I/51jN0UakNYL._SX324_BO1,204,203,200_.jpg',
          price: 14.19
        },
        {
          id: 23,
          title: 'The International Law on Foreign Investment',
          publisher: 'Amazon',
          author: 'M Sornarajah',
          description: `Following the Trans-Pacific Partnership (TPP) and Transatlantic Trade 
          and Investment Partnership (TTIP), the demonstrations against investor-state arbitration
           and the wide discussion during the 2016 US presidential election, the climate surrounding 
           foreign investment law is one of controversy and change, and with implications for human
            rights and environmental protection, foreign investment law has gained widespread public
             attention and visibility. Addressing the pressing need to examine foreign investment 
             law in the context of public international law, the role of the multinational corporation
              in foreign investment and issues of liability for environmental and other damage, this
               new edition analyses contractual and treaty-based methods of investment
           protection and examines the effectiveness of bilateral and regional investment treaties.`,
          photo: 'https://images-na.ssl-images-amazon.com/images/I/51CbVwsOeCL._SX346_BO1,204,203,200_.jpg',
          price: 20.99
        },
        {
          id: 24, title: `Reinventing the Product: How to Transform your Business and Create Value in the Digital Age`,
          publisher: 'Amazon',
          author: 'Eric Schaeffer',
          description: `Digital technology is simultaneously friend and foe: highly 
          disruptive, yet it cannot be ignored. Companies that fail to make use of it put 
          themselves in the line of fire for disintermediation or even eradication. But digital 
          technology is also the biggest opportunity to reposition incumbent product-making
           businesses by thinking about how they
           conceive, make, distribute and support the next generation of goods in the marketplace.`,
          photo: 'https://images-na.ssl-images-amazon.com/images/I/41f6WMVJIWL._SX343_BO1,204,203,200_.jpg',
          price: 30.99
        }
      ]);
    });
};
