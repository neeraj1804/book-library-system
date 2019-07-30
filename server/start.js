/* eslint-disable no-console, global-require */
const express = require('express');
const fs = require('fs');
const path = require('path');
const http = require('http');
const uuid = require('uuid/v4');
const compression = require('compression');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const webpackConfig = require('../webpack.config.dev');

const port = process.env.PORT || 8080;
const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client/assets'));

//Hot reloading
const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));  
//end of hot reloading

app.get("/getBooks", (req, res) => {
    const books = getBooks();
    res.json(books);
});

app.get("/getBook", (req, res) => {
    const id = req.query.id;
    const books = getBooks();
    const book = books.find(b => b.id === id);
    res.status(200).json(book);
});

app.post("/addBook", (req, res) => {
    const books = getBooks();
    const id = uuid();
    const book = {
        id: id,
        name: req.body.name,
        author: req.body.author,
        count: req.body.count,
        description: req.body.description
    }
    books.push(book);
    setBooks(books, () => {
        res.status(200).json({id});
    });
});

app.post("/editBook", (req, res) => {
    const books = getBooks();
    const id = req.body.id;
    const index = books.findIndex((book) => {
        if(book.id === id){
            return true;
        }
    });
    books[index] = {
        id: id,
        name: req.body.name,
        author: req.body.author,
        count: req.body.count,
        description: req.body.description
    }
    setBooks(books, () => {
        res.status(200).json({id});
    });
});

app.post("/deleteBook", (req, res) => {
    const books = getBooks();
    const id = req.body.id;
    const index = books.findIndex((book) => {
        if(book.id === id){
            return true;
        }
    });
    books.splice(index, 1);
    setBooks(books, () => {
        res.status(200).json({id});
    });
});

app.use("/*", (req, res) => {
    if (req.get('host') !== undefined) {
        const url = `${req.protocol}://${req.get('host')}`;
        const newReq = http.request(url, (newRes) => {
          newRes.pipe(res);
        });
        req.pipe(newReq);
    }
});

const getBooks = () => {
    const bookPath = path.resolve(__dirname, "books.json");
    const rawData = fs.readFileSync(bookPath);
    const books = JSON.parse(rawData);
    return books;
};

const setBooks = (books, callback) => {
    const bookPath = path.resolve(__dirname, "books.json");
    fs.writeFile(bookPath, JSON.stringify(books), (err) => {
        if(err) throw err;
        callback();
    });
}

app.listen(port, () => {
    console.log(`listening on ${port}`);
});