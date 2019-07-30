import { fork, all } from 'redux-saga/effects';

/* Get Books */
import {
    listBooksWatcher,
    getBookWatcher,
    deleteBookWatcher,
    addBookWatcher,
    editBookWatcher
} from './watchers/books/booksWatcher';

export default function* rootSaga() {
    yield all([
        fork(listBooksWatcher),
        fork(getBookWatcher),
        fork(deleteBookWatcher),
        fork(addBookWatcher),
        fork(editBookWatcher)
    ]);
}