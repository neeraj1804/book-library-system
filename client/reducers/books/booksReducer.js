import * as actionTypes from '../../constants/actionTypes';
import initialState from '../initialState';

export function booksReducer(state = initialState.books, action) {
    switch(action.type){
        case actionTypes.GET_BOOKS_REQUEST:
            return initialState.books;
        case actionTypes.GET_BOOKS_SUCCESS:
            return action.data;
        case actionTypes.DELETE_BOOK_SUCCESS:
            const index = state.findIndex(book => book.id === action.data.id);
            return [
                ...state.slice(0, index),
                ...state.slice(index+1)
            ];
        case actionTypes.ADD_BOOK_SUCCESS:
            return [
                ...state,
                action.data
            ]
        case actionTypes.EDIT_BOOK_SUCCESS:
            const ind = state.findIndex(book => book.id === action.data.id);
            return [
                ...state.slice(0, ind),
                action.data,
                ...state.slice(ind+1)
            ];
        default:
            return state;
    }
}

export function bookReducer(state = initialState.book, action) {
    switch(action.type){
        case actionTypes.GET_BOOK_REQUEST:
            return initialState.book;
        case actionTypes.GET_BOOK_SUCCESS:
            return action.data;
        default:
            return state;
    }
}