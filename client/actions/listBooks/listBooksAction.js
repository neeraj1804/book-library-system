import * as actionTypes from '../../constants/actionTypes';

export function getBooksInitiate() {
    return {
        type: actionTypes.GET_BOOKS_INITIATE
    };
}

export function getBooksRequest() {
    return {
        type: actionTypes.GET_BOOKS_REQUEST
    }
}

export function getBooksSuccess(data) {
    return {
        type: actionTypes.GET_BOOKS_SUCCESS,
        data
    }
}

export function getBooksError(error) {
    return {
        type: actionTypes.GET_BOOKS_ERROR,
        error
    }
}

export function getBookInitiate(data) {
    return {
        type: actionTypes.GET_BOOK_INITIATE,
        data
    };
}

export function getBookRequest() {
    return {
        type: actionTypes.GET_BOOK_REQUEST
    }
}

export function getBookSuccess(data) {
    return {
        type: actionTypes.GET_BOOK_SUCCESS,
        data
    }
}

export function getBookError(error) {
    return {
        type: actionTypes.GET_BOOK_ERROR,
        error
    }
}