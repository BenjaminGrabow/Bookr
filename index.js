require('dotenv').config();

const server = require('./api/server.js');
const StatsD = require('node-dogstatsd').StatsD;
const dogstatsd = new StatsD();

dogstatsd.increment('page.views')

const port = process.env.PORT || 3400;
server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port}\n`);
});
