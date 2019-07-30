import * as actionTypes from '../../constants/actionTypes';

export function addBookInitiate(data) {
    return {
        type: actionTypes.ADD_BOOK_INITIATE,
        data
    };
}

export function addBookRequest() {
    return {
        type: actionTypes.ADD_BOOK_REQUEST
    }
}

export function addBookSuccess(data) {
    return {
        type: actionTypes.ADD_BOOK_SUCCESS,
        data
    }
}

export function addBookError(error) {
    return {
        type: actionTypes.ADD_BOOK_ERROR,
        error
    }
}