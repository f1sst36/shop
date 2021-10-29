import React from 'react';
import Image from 'next/image';
import styles from './UserBar.module.scss';

export const UserBar: React.FC = () => {
	return (
		<div className={styles.userBar}>
			<div className={styles.cartWrapper}>
				<div className={styles.count}>2</div>
				<Image src={'/static/icons/cart.svg'} alt="cart icon" width={26} height={26} />
			</div>
		</div>
	);
};
