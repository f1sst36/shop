import React from 'react';
import styles from './Filters.module.scss';
import { PriceFilter } from './PriceFilter/PriceFilter';

export const Filters: React.FC = () => {
	return (
		<aside className={styles.filter}>
			<PriceFilter />
			<br />
			<span>more filters...</span>
		</aside>
	);
};
