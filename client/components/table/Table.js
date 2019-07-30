import React from 'react';

/* Importing Styles */
import styles from './Table.pcss';
import 'ionicons/dist/css/ionicons.min.css';

const Table = (props) => {
    return (
        <div className={styles.table}>
            <div className={styles.tHeader}>
                <div className={styles.tHeaderLabel}>Name</div>
                <div className={styles.tHeaderLabel}>Description</div>
                <div className={styles.tHeaderLabel}>Author</div>
                <div className={styles.tHeaderLabel}>Count</div>
                <div className={styles.tHeaderLabel}>Action</div>
            </div>
            {props.books.map(book => (
                <div className={styles.tableRow} key={book.id}>
                    <div className={styles.tableSmall}>
                        <div className={styles.tableCell}>Name</div>
                        <div className={styles.tableCell}>{book.name}</div>
                    </div>
                    <div className={styles.tableSmall}>
                        <div className={styles.tableCell}>Description</div>
                        <div className={styles.tableCell}>{book.description}</div>
                    </div>
                    <div className={styles.tableSmall}>
                        <div className={styles.tableCell}>Author</div>
                        <div className={styles.tableCell}>{book.author}</div>
                    </div>
                    <div className={styles.tableSmall}>
                        <div className={styles.tableCell}>Count</div>
                        <div className={styles.tableCell}>{book.count}</div>
                    </div>
                    <div className={styles.tableSmall}>
                        <div className={styles.tableCell}>Action</div>
                        <div className={styles.tableCell}><i className="icon ion-md-create" onClick={() => props.editBook(book.id)} /> | <i className="icon ion-md-trash" onClick={() => props.deleteBook(book.id)} /></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Table;