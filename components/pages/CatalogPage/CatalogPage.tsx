import React from 'react';
import { RootState } from '../../../store/store';
import { BreadCrumbs } from '../../common/BreadCrumbs/BreadCrumbs';
import { ERoute } from '../../../enum/ERoute';
import styles from './CatalogPage.module.scss';
import { Container } from '../../layout/Container/Container';
import { Filters } from './Filters/Filters';
import { WithRedux } from '../../redux/WithRedux';

export const CatalogPage: React.FC<{ serverSideRootState: RootState }> = ({
	serverSideRootState
}) => {
	return (
		<WithRedux preloadedState={serverSideRootState}>
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
		</WithRedux>
	);
};
