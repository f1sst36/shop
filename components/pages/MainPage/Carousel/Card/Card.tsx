import React from 'react';
import cx from 'classnames';
import styles from './Card.module.scss';
import Image from 'next/image';
import { Button } from '../../../../common/Button/Button';
import { priceFormatter } from '../../../../../utils/price';

interface CardProps {
	product: {
		id: number;
		name: string;
		priceWithoutSale: number;
		companyProducer: string;
		image: string;
		sale?: number;
	};
	className?: string;
}

export const Card: React.FC<CardProps> = ({ product, className }) => {
	return (
		<div className={cx(styles.wrapper, className)}>
			{product.sale && (
				<div className={styles.sale}>
					<span className={styles.percent}>{product.sale + '%'}</span>
					<span className={styles.label}>Скидка</span>
				</div>
			)}
			<div className={styles.card}>
				<span className={styles.companyProducer}>{product.companyProducer}</span>
				<div className={styles.circle} />
				<div className={styles.infoWrapper}>
					<span className={styles.new}>New</span>
					<h3 className={styles.name}>{product.name}</h3>
					<h4 className={styles.price}>{priceFormatter(product.priceWithoutSale)}</h4>
					<Button size={'small'} variant={'secondary'}>
						Подробнее
					</Button>
				</div>
				<div className={styles.imageWrapper}>
					<Image
						className={styles.image}
						src={product.image}
						objectFit={'contain'}
						layout={'fill'}
						alt={product.name}
					/>
				</div>
			</div>
		</div>
	);
};
