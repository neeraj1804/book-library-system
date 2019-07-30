import { call, put, select } from 'redux-saga/effects';
import apiConfig from '../../../config/apiConfig';
import * as actions from '../../../actions';
import ajaxCreator from '../ajaxCreator';

export function* listBooksWorker() {
    try{
        yield put(actions.getBooksRequest());
        const response = yield call(ajaxCreator, apiConfig.getBooks, 'get', { timeout: true });
        yield put(actions.getBooksSuccess(response.data));
    }catch(error){
        error.timestamp = new Date().getTime();
        yield put(actions.getBooksError(error));
    }
}

const getBooks = (state) => state.books;

export function* getBookWorker(params) {
    try{
        yield put(actions.getBookRequest());
        const books = yield select(getBooks);
        let response = {};
        if(books.length === 0){
            response = yield call(ajaxCreator, apiConfig.getBook, 'get', { timeout: true, params });
            response = response.data;
        }else{
            response = books.find(b => b.id === params.id);
        }
        yield put(actions.getBookSuccess(response));
    }catch(error){
        error.timestamp = new Date().getTime();
        yield put(actions.getBookError(error));
    }
}

export function* deleteBookWorker(data) {
    try{
        yield put(actions.deleteBookRequest());
        const response = yield call(ajaxCreator, apiConfig.deleteBook, 'post', { timeout: true, data });
        yield put(actions.deleteBookSuccess(response.data));
    }catch(error){
        error.timestamp = new Date().getTime();
        yield put(actions.deleteBookError(error));
    }
}

export function* addBookWorker(data) {
    try{
        yield put(actions.addBookRequest());
        const response = yield call(ajaxCreator, apiConfig.addBook, 'post', { timeout: true, data });
        response.data = Object.assign(response.data, data);
        yield put(actions.addBookSuccess(response.data));
    }catch(error){
        error.timestamp = new Date().getTime();
        yield put(actions.addBookError(error));
    }
}

export function* editBookWorker(data) {
    try{
        yield put(actions.editBookRequest());
        const response = yield call(ajaxCreator, apiConfig.editBook, 'post', { timeout: true, data });
        yield put(actions.editBookSuccess(data));
    }catch(error){
        error.timestamp = new Date().getTime();
        yield put(actions.editBookError(error));
    }
}