const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users'

        // Middlewares
        this.middlewares();

        this.routes();



    }

    routes() {

        this.app.use(this.usersPath, require('../routes/user.routes'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }

    middlewares() {

        this.app.use(cors());

        // LEctura y parseo de body
        this.app.use(express.json());

        this.app.use(express.static('public'));
    }

}

module.exports = Server;