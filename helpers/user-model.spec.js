const db = require('../database/dbConfig');
const User = require('./users-model');

beforeEach(async () => {
  await db('users').truncate();
});

describe('Users.insert', () => {
  it('is able to add users to the db!', async () => {
    // sanity: checking that trucate works, essentially
    let users = await User.find();
    expect(users).toHaveLength(0);

    // set up
    await User.add({
      username: 'Aragorn',
      password: "sdfgdsfg"
    });
    await User.add({
      username: 'Sauron',
      password: "sdfgdsfg"
    });
    users = await User.find();

    // assertion
    expect(users).toHaveLength(2);
  });
});

describe('Users.delete', () => {
  it('is able to delete users to the db!', async () => {
    // sanity: checking that trucate works, essentially
    let users = await User.find();
    expect(users).toHaveLength(0);

    // set up
    await User.add({
      username: 'Aragorn',
      password: "sdfgdsfg"
    });
    await User.add({
      username: 'Sauron',
      password: "sdfgdsfg"
    });
    
    await User.remove(1)
    
    users = await User.find();

    // assertion
    expect(users).toHaveLength(1);
  });
});