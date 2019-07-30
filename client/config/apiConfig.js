const host = "http://localhost";
const port = 8080;

const links = {
    getBooks: `${host}:${port}/getBooks`,
    getBook: `${host}:${port}/getBook`,
    deleteBook: `${host}:${port}/deleteBook`,
    editBook: `${host}:${port}/editBook`,
    addBook: `${host}:${port}/addBook`
};

export default links;