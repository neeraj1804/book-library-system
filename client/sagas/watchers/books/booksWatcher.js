import { call, take } from 'redux-saga/effects';
import * as actionTypes from '../../../constants/actionTypes';
import * as booksWorkers from '../../workers/books/booksWorker';

export function* listBooksWatcher(){
    while(true){
        yield take(actionTypes.GET_BOOKS_INITIATE);
        yield call(booksWorkers.listBooksWorker);
    }
}

export function* getBookWatcher() {
    while(true){
        const action = yield take(actionTypes.GET_BOOK_INITIATE);
        yield call(booksWorkers.getBookWorker, action.data);
    }
}

export function* deleteBookWatcher(){
    while(true){
        const action = yield take(actionTypes.DELETE_BOOK_INITIATE);
        yield call(booksWorkers.deleteBookWorker, action.data);
    }
}

export function* addBookWatcher(){
    while(true){
        const action = yield take(actionTypes.ADD_BOOK_INITIATE);
        yield call(booksWorkers.addBookWorker, action.data);
    }
}

export function* editBookWatcher(){
    while(true){
        const action = yield take(actionTypes.EDIT_BOOK_INITIATE);
        yield call(booksWorkers.editBookWorker, action.data);
    }
}