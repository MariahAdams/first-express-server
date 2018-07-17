require('dotenv').config();
const { createServer } = require('http');
require('./lib/mongodb');
const app = require('./lib/app');

const PORT = process.env.PORT;
const server = createServer(app);

server.listen(PORT, () => {
    console.log('server running on', server.address().port);
});