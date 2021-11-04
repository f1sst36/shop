import React from 'react';
import cx from 'classnames';
import { A } from '../A/A';
import styles from './BreadCrumbs.module.scss';

interface BreadCrumbsProps {
	crumbs: {
		name: string;
		url?: string;
	}[];
}

export const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ crumbs }) => {
	return (
		<ul className={styles.breadCrumbs}>
			{crumbs.map((crumb, index) => (
				<li className={styles.crumb} key={crumb.name}>
					{crumb.url ? (
						<A href={crumb.url}>
							<span className={styles.link}>{crumb.name}</span>
						</A>
					) : (
						<span className={cx(styles.link, styles.emptyLink)}>{crumb.name}</span>
					)}
					{crumbs.length - 1 !== index && <div className={styles.slash} />}
				</li>
			))}
		</ul>
	);
};
