import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

/* Importing Components */
import Header from '../header/Header';
import ListPage from '../../views/listBooks/ListBooks';
import EditPage from '../../views/editBook/EditBook';
import AddPage from '../../views/addBook/AddBook';
import Footer from '../footer/Footer';

/* Importing Styles */
import styles from './PrimaryStyles.pcss';

const PrimaryLayout = ({ match }) => {
	let dl = "/";
	if(match.path.endsWith("/")){
		dl = "";
	}
	return (
		<div className={styles.primaryLayoutCont}>
			<Header />
			<main>
				<Switch>
					<Route path={`${match.path}${dl}addbook`} component={AddPage} />
					<Route path={`${match.path}${dl}editbook/:bookId`} component={EditPage} />
					<Route path={`${match.path}`} exact component={ListPage} />
					<Redirect to={`${match.path}`} />
				</Switch>
			</main>
            <Footer />
		</div>
	);
}

export default PrimaryLayout;