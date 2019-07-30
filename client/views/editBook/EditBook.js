import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Importing Custom Components */
import Form from '../../components/form/Form';

/* Importing Actions */
import * as actions from '../../actions';

/* Importing Styles */
import styles from './EditBook.pcss';

const EditBook = (props) => {
    useEffect(() => {
        props.actions.getBookInitiate({
            id: props.match.params.bookId
        });
    }, []);
    const handleSubmit = (data) => {
        data.id = props.match.params.bookId;
        props.actions.editBookInitiate(data);
        props.history.push("/");
    }
    const data = {
        name: props.book.name ? props.book.name : "", 
        description: props.book.description ? props.book.description : "", 
        count: props.book.count ? props.book.count : 0, 
        author: props.book.author ? props.book.author : ""
    }
    return (
        <div className={styles.editBookCont}>
            <Form data={data} handleSubmit={handleSubmit} btnLabel="Edit Book" />
        </div>
    );
}

const mapStateToProps = (state) => ({
	book: state.book
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBook);