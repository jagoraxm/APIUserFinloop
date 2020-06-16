const mongoose = require('mongoose')
const User = require('../models/user')
const service = require('../services')

const getUsers = async (req, res) => {
    
    const filter = {};
    await User.find(filter, function (err, users) {
        if(!users) return res.status(404).send({ message: "No encontro usuarios" })
        if(err) return res.status(500).send({ message: `Error al buscar usuarios: ${err}` })
        return res.status(200).send(users)
    });
    
} 

const getUser = async (req, res) => {
    await User.findOne({ _id: req.params.id }, function (err, user) {
        if(!user) return res.status(404).send({ message: "No existe el usuario" })
        if(err) return res.status(500).send({ message: `Error al buscar usuario: ${err}` })
        return res.status(200).send(user)
    })
}

module.exports =  {
    getUsers, 
    getUser
}