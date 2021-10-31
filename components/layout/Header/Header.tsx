import React, { useState } from 'react';
import cx from 'classnames';
import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import { UserBar } from './UserBar/UserBar';
import styles from './Header.module.scss';
import { Container } from '../Container/Container';
import { EWindowEvent } from '../../../enum/EWindowEvent';
import { WindowHandler } from '../../utils/WindowHandler/WindowHandler';
import { throttle } from 'lodash';
import { MobileMenu } from './MobileMenu/MobileMenu';

export const Header: React.FC = () => {
	const [isTransparent, setIsTransparent] = useState<boolean>(true);

	const changeStateWhenIsOnTop = throttle((e: any) => {
		setIsTransparent(e.target.scrollingElement.scrollTop <= 0);
	}, 120);

	return (
		<>
			<WindowHandler event={EWindowEvent.Scroll} callback={changeStateWhenIsOnTop} />
			<header className={cx(styles.header, isTransparent && styles.transparent)}>
				<Container containerClass={styles.container}>
					<Logo />
					<div className={'hidden-mobile'}>
						<Navigation />
					</div>
					<div className={'hidden-mobile'}>
						<UserBar />
					</div>
					<div className={'show-mobile'}>
						<MobileMenu />
					</div>
				</Container>
			</header>
		</>
	);
};
