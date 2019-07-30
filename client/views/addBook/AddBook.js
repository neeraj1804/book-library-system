import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Importing Custom Components */
import Form from '../../components/form/Form';

/* Importing Actions */
import * as actions from '../../actions';

/* Importing Styles */
import styles from './AddBook.pcss';

const AddBook = (props) => {
    const handleSubmit = (data) => {
        props.actions.addBookInitiate(data);
        props.history.push("/");
    }

    return (
        <div className={styles.addBookCont}>
            <Form data={{name: "", description: "", count: 0, author: ""}} handleSubmit={handleSubmit} />
        </div>
    );
}

const mapStateToProps = (state) => ({
	
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);