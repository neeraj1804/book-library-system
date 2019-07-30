import * as actionTypes from '../../constants/actionTypes';

export function editBookInitiate(data) {
    return {
        type: actionTypes.EDIT_BOOK_INITIATE,
        data
    };
}

export function editBookRequest() {
    return {
        type: actionTypes.EDIT_BOOK_REQUEST
    }
}

export function editBookSuccess(data) {
    return {
        type: actionTypes.EDIT_BOOK_SUCCESS,
        data
    }
}

export function editBookError(error) {
    return {
        type: actionTypes.EDIT_BOOK_ERROR,
        error
    }
}