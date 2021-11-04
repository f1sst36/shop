import React, { useEffect } from 'react';
import { RootState } from '../../../store/store';
import { useCSTypedSelector } from '../../../hooks/redux';
import { BreadCrumbs } from '../../common/BreadCrumbs/BreadCrumbs';
import { ERoute } from '../../../enum/ERoute';
import styles from './CatalogPage.module.scss';
import { Container } from '../../layout/Container/Container';

export const CatalogPage: React.FC<{ serverSideRootState: RootState }> = ({
	serverSideRootState
}) => {
	const clientSideCatalogState = useCSTypedSelector(serverSideRootState).catalogState;
	useEffect(() => {
		console.log('serverSideRootState', serverSideRootState);
		console.log('clientSideCatalogState', clientSideCatalogState);
	}, []);
	return (
		<div className={styles.catalogPage}>
			<Container>
				<BreadCrumbs
					crumbs={[{ name: 'Главная', url: ERoute.Main }, { name: 'Каталог' }]}
				/>
				<div className={styles.catalog}>
					<span>Filter/</span> <span>ProductList/</span>
				</div>
			</Container>
		</div>
	);
};
