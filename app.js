const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

const posts = require('./Controller/posts');
const Auth = require('./security/JWTAuth')

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.post('/api/login',Auth.generateToken)
app.get('/get-books',Auth.verifyToken,posts.getAllBooks);
app.get('/get-book/:bookName',Auth.verifyToken, posts.getOneBook);


app.listen(3100)


// mongoose.connect('mongodb://localhost/insta',{ useNewUrlParser: true }).then(result =>{
//     console.log('connection')
// });
