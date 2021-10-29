import React from 'react';
import styles from './Logo.module.scss';
import { A } from '../../../common/A/A';
import { ERoute } from '../../../../enum/ERoute';

export const Logo: React.FC = () => {
	return (
		<div className={styles.logoWrapper}>
			<A href={ERoute.Main}>
				<h4 className={styles.logoText}>LOGO</h4>
			</A>
		</div>
	);
};
