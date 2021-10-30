import React from 'react';
import cx from 'classnames';
import styles from './Button.module.scss';
import { A } from '../A/A';

interface ButtonProps {
	variant?: 'primary' | 'secondary';
	size?: 'large' | 'small';
	fullWidth?: boolean;
	className?: string;
	to?: string;
}

export const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'primary',
	size = 'large',
	fullWidth = false,
	className,
	to,
	...props
}) => {
	const button = (
		<button
			className={cx(
				styles.button,
				className,
				styles[`button--${variant}`],
				styles[`button--${size}`]
			)}
			{...props}
		>
			<span className={styles.text}>{children}</span>
		</button>
	);

	if (to)
		return (
			<A className={styles.link} href={to}>
				{button}
			</A>
		);
	return button;
};
