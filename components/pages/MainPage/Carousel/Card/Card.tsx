import React from 'react';
import cx from 'classnames';
import styles from './Card.module.scss';

interface CardProps {
	product: {
		id: number;
		name: string;
		price: string;
		image: string;
		sale?: number;
	};
	className?: string;
}

export const Card: React.FC<CardProps> = ({ product, className }) => {
	return <div className={cx(styles.card, className)}>{product.id}</div>;
};
