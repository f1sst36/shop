import React from 'react';
import { Header } from '../Header/Header';
import styles from './PageLayout.module.scss';
import { Footer } from '../Footer/Footer';

export const PageLayout: React.FC = ({ children }) => {
	return (
		<>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</>
	);
};
