import { combineReducers } from 'redux';

import {
    booksReducer,
    bookReducer
} from './books/booksReducer';

const rootReducer = combineReducers({
    books: booksReducer,
    book: bookReducer
});

export default rootReducer;