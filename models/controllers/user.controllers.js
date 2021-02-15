const { response, request } = require('express');

const usersGet = (req = request, res = response) => {

    const query = req.query;

    res.json({
        msg: 'get API',
        query
    });
}


const usersPost = (req, res = response) => {

    const { nombre, edad } = req.body

    res.json({
        msg: 'post API',
        nombre,
        edad
    });
}


const usersDelete = (req, res = response) => {

    res.json({
        msg: 'delete API'
    });
}


const usersPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API',
        id
    });
}

module.exports = {
    usersGet,
    usersPost,
    usersDelete,
    usersPut
}