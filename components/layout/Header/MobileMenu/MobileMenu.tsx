import React, { useState } from 'react';
import cx from 'classnames';
import Image from 'next/image';
import styles from './MobileMenu.module.scss';
import { NAVIGATION_PATHS } from '../../../../constants/navigation';
import { A } from '../../../common/A/A';
import { useRouter } from 'next/router';
import { UserBar } from '../UserBar/UserBar';

export const MobileMenu: React.FC = () => {
	const { pathname } = useRouter();
	const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(false);

	return (
		<div className={styles.wrapper}>
			{isOpenedMenu ? (
				<Image
					className={styles.icon}
					src={'/static/icons/layout/cross.svg'}
					width={24}
					height={24}
					alt={'cross icon'}
					onClick={() => setIsOpenedMenu(false)}
				/>
			) : (
				<Image
					className={styles.icon}
					src={'/static/icons/layout/burger.svg'}
					width={24}
					height={24}
					alt={'menu icon'}
					onClick={() => setIsOpenedMenu(true)}
				/>
			)}
			<nav className={cx(isOpenedMenu && styles.isOpenedNav, styles.navigation)}>
				<ul>
					{NAVIGATION_PATHS.map((path) => (
						<li key={path.name}>
							<A
								className={cx(
									pathname === path.url && styles.activeItem,
									styles.navItem
								)}
								href={path.url}
							>
								{path.name}
							</A>
						</li>
					))}
				</ul>
				<div className={styles.line} />
				<div className={styles.userBar}>
					<UserBar />
				</div>
			</nav>
		</div>
	);
};
