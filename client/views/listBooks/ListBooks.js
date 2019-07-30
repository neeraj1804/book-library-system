import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Importing Custom Components */
import Table from '../../components/table/Table';

/* Importing Actions */
import * as actions from '../../actions';

/* Importing Styles */
import styles from './ListBooks.pcss';

const ListBooks = (props) => {
    const [books, setBooks] = useState(props.books);
    useEffect(() => {
        props.actions.getBooksInitiate();
    }, []);
    useEffect(() => {
        setBooks(props.books);
    }, [props.books]);

    let elem = null, inputElem = null;

    const addBook = () => {
        props.history.push("/addbook");
    };

    const editBook = (bookId) => {
        props.history.push(`/editbook/${bookId}`);
    };

    const deleteBook = (bookId) => {
        props.actions.deleteBookInitiate({
            id: bookId
        });
    };

    const searchBook = () => {
        const param = elem.value;
        const val = inputElem.value.trim();
        if(param && val){
            const searchedBooks = props.books.filter(b => {
                switch(param){
                    case "name":
                        return b.name.includes(val);
                    case "author":
                        return b.author.includes(val);
                    case "count":
                        return b.count == val;
                }
            });
            setBooks(searchedBooks);
        }
    }

    return (
        <div className={styles.listBooksCont}>
            <button onClick={addBook} className={styles.addBtn}>Add new book</button>
            <div className={styles.searchCont}>
                <select ref={(e) => elem = e}>
                    <option value="">Select Search Parameter</option>
                    <option value="name">name</option>
                    <option value="author">author</option>
                    <option value="count">count</option>
                </select>
                <input type="text" ref={(e) => inputElem = e} />
                <button onClick={searchBook}>Search</button>
            </div>
            <Table books={books} editBook={editBook} deleteBook={deleteBook} />
        </div>
    );
}

const mapStateToProps = (state) => ({
	books: state.books
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ListBooks);