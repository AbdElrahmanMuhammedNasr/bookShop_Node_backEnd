exports.getAllBooks = ((req, res, next) => {
    res.status(200).json([
        {
            image: 'https://cdn.pixabay.com/photo/2016/04/30/13/12/texture-1362879_960_720.jpg',
            name: 'Travel',
            description: 'sometimes by accident, sometimes on purpose (injected humour and the like',
            author: 'Darwin',
            rating: 2,
        },

        {
            image: 'https://cdn.pixabay.com/photo/2017/12/27/18/07/book-3043275_960_720.jpg',
            name: 'Go to hell',
            description: 'sometimes by accident, sometimes on purpose (injected humour and the like',
            author: 'Darwin',
            rating: 2,
        },
        {
            image: 'https://cdn.pixabay.com/photo/2018/07/01/20/01/book-3510326_960_720.jpg',
            name: 'Travel2',
            description: 'sometimes by accident, sometimes on purpose (injected humour and the like',
            author: 'Darwin',
            rating: 2,
        },

        {
            image: 'https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_960_720.jpg',
            name: 'Go to hell2',
            description: 'sometimes by accident, sometimes on purpose (injected humour and the like',
            author: 'Darwin',
            rating: 2,
        },
        {
            image: 'https://cdn.pixabay.com/photo/2016/10/14/16/39/book-1740515_960_720.png',
            name: 'Travel3',
            description: 'sometimes by accident, sometimes on purpose (injected humour and the like',
            author: 'Darwin',
            rating: 2,
        },

        {
            image: 'https://cdn.pixabay.com/photo/2016/10/14/16/39/book-1740515_960_720.png',
            name: 'Go to hell3',
            description: 'sometimes by accident, sometimes on purpose (injected humour and the like',
            author: 'Darwin',
            rating: 2,
        },
        {
            image: 'https://cdn.pixabay.com/photo/2016/04/30/13/12/texture-1362879_960_720.jpg',
            name: 'Travel',
            description: 'sometimes by accident, sometimes on purpose (injected humour and the like',
            author: 'Darwin',
            rating: 2,
        },

        {
            image: 'https://cdn.pixabay.com/photo/2017/12/27/18/07/book-3043275_960_720.jpg',
            name: 'Go to hell',
            description: 'sometimes by accident, sometimes on purpose (injected humour and the like',
            author: 'Darwin',
            rating: 2,
        },
        {
            image: 'https://cdn.pixabay.com/photo/2018/07/01/20/01/book-3510326_960_720.jpg',
            name: 'Travel2',
            description: 'sometimes by accident, sometimes on purpose (injected humour and the like',
            author: 'Darwin',
            rating: 2,
        },

        {
            image: 'https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_960_720.jpg',
            name: 'Go to hell2',
            description: 'sometimes by accident, sometimes on purpose (injected humour and the like',
            author: 'Darwin',
            rating: 2,
        },
        {
            image: 'https://cdn.pixabay.com/photo/2016/10/14/16/39/book-1740515_960_720.png',
            name: 'Travel3',
            description: 'sometimes by accident, sometimes on purpose (injected humour and the like',
            author: 'Darwin',
            rating: 2,
        }]  
        );

});

exports.getOneBook = ((req, res, next) => {
    const bookName = req.params.bookName;
    console.log(bookName)
    res.status(200).json({
        image:'https://cdn.pixabay.com/photo/2016/04/30/13/12/texture-1362879_960_720.jpg',
        name: bookName,
        author:'AbdElrahman',
        format:'Kindle Edition',
        rating:2,
        numOFRating:45,
        price:210,
        additional:{
            Hardcover:240,
            Publisher:'Tamer',
            Language:'English',
            Dimensions:'6 * 7',
            weight:1.7
        }
    
    });

});
