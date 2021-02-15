require('dotenv').config();
const Server = require('./models/server.models');

require('dotenv').config();

const server = new Server();

server.listen();