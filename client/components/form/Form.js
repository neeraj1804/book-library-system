import React, {useState, useEffect} from 'react';

/* Importing Styles */
import styles from './Form.pcss';

const Form = (props) => {
    const [name, setName] = useState(props.data.name);
    const [description, setDescription] = useState(props.data.description);
    const [author, setAuthor] = useState(props.data.author);
    const [count, setCount] = useState(props.data.count);
    useEffect(() => {
        setName(props.data.name);
        setDescription(props.data.description);
        setAuthor(props.data.author);
        setCount(props.data.count);
    }, [props.data]);

    const handleChange = (type, value) => {
        switch(type){
            case "name":
                setName(value);
                break;
            case "description":
                setDescription(value);
                break;
            case "author":
                setAuthor(value);
                break;
            case "count":
                setCount(value);
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        props.handleSubmit({
            name,
            description,
            author,
            count
        });
    }

    const btnLabel = props.btnLabel ? props.btnLabel : "Add Book";

    return (
        <form className={styles.formCont}>
            <div className={styles.formGroup}>
                <label>Name
                    <input required type="text" value={name} name="name" className={styles.formControl} onChange={(event) => handleChange("name", event.target.value)} />
                </label>
            </div>
            <div className={styles.formGroup}>
                <label>Description
                    <input required type="text" value={description} name="description" className={styles.formControl} onChange={(event) => handleChange("description", event.target.value)} />
                </label>
            </div>
            <div className={styles.formGroup}>
                <label>Author
                    <input required type="text" value={author} name="author" className={styles.formControl} onChange={(event) => handleChange("author", event.target.value)} />
                </label>
            </div>
            <div className={styles.formGroup}>
                <label>Count
                    <input required type="number" value={count} name="count" className={styles.formControl} onChange={(event) => handleChange("count", event.target.value)} />
                </label>
            </div>
            <input type="submit" value={btnLabel} className={styles.btn} onClick={handleSubmit} />
        </form>
    );
}

export default Form;