import React from 'react';
import cx from 'classnames';
import styles from './Dots.module.scss';
import { range } from 'lodash';

interface DotsProps {
	dotsCount: number;
	activeDotIndex: number;
}

export const Dots: React.FC<DotsProps> = ({ dotsCount, activeDotIndex }) => {
	const array = range(dotsCount);
	const leftOffset = (activeDotIndex / dotsCount) * 100;
	return (
		<ul className={styles.dots}>
			<div style={{ left: `${leftOffset}%` }} className={styles.activeDot} />
			{array.map((_, index) => (
				<li
					key={index}
					className={cx(styles.dot, index === activeDotIndex && styles.hidden)}
				/>
			))}
		</ul>
	);
};
