import React from 'react';
import styles from './Footer.module.scss';
import { Logo } from '../Header/Logo/Logo';
import { Container } from '../Container/Container';
import { NAVIGATION_PATHS } from '../../../constants/navigation';
import { A } from '../../common/A/A';
import { CURRENT_YEAR } from '../../../constants/common';

export const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.head}>
					<div className={styles.logoWrapper}>
						<Logo />
					</div>
					<nav>
						<ul className={styles.navList}>
							{NAVIGATION_PATHS.map((path) => (
								<li className={styles.navItem} key={path.name}>
									<A href={path.url}>{path.name}</A>
								</li>
							))}
						</ul>
					</nav>
				</div>
				<div className={styles.bottom}>
					<span className={styles.rights}>© {CURRENT_YEAR} Все права защищены</span>
				</div>
			</Container>
		</footer>
	);
};
