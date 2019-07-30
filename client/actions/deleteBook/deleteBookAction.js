import * as actionTypes from '../../constants/actionTypes';

export function deleteBookInitiate(data) {
    return {
        type: actionTypes.DELETE_BOOK_INITIATE,
        data
    };
}

export function deleteBookRequest() {
    return {
        type: actionTypes.DELETE_BOOK_REQUEST
    }
}

export function deleteBookSuccess(data) {
    return {
        type: actionTypes.DELETE_BOOK_SUCCESS,
        data
    }
}

export function deleteBookError(error) {
    return {
        type: actionTypes.DELETE_BOOK_ERROR,
        error
    }
}