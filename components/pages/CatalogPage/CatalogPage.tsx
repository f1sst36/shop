import React from 'react';
import { BreadCrumbs } from '../../common/BreadCrumbs/BreadCrumbs';
import { ERoute } from '../../../enum/ERoute';
import styles from './CatalogPage.module.scss';
import { Container } from '../../layout/Container/Container';
import { Filters } from './Filters/Filters';

export const CatalogPage: React.FC = () => {
	return (
		<div className={styles.catalogPage}>
			<Container>
				<BreadCrumbs
					crumbs={[{ name: 'Главная', url: ERoute.Main }, { name: 'Каталог' }]}
				/>
				<div className={styles.catalog}>
					<Filters />
					<span>ProductList/</span>
				</div>
			</Container>
		</div>
	);
};
