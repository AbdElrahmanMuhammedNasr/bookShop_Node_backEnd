// const router = require('express').Router();
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'this is out secret key'

exports.generateToken = ((req, res, next) => {
    console.log(req.body)
    const token = jwt.sign({_id: 'my Id'}, SECRET_KEY);
    // res.json({
        // token: token
    // })
    res.header('auth-token', token).send(token);
    next();
})

exports.verifyToken = ((req, res, next) => {
    const bearHeader = req.header('auth-token').split(' ')[1];
    if (!bearHeader) res.json({  message: 'No token'})
    try {
        console.log('here')
        jwt.verify(bearHeader, SECRET_KEY);
        next();
    } catch (e) {
        res.status(400).json({
            meaage: 'not allow'
        })
        next();

    }
});

