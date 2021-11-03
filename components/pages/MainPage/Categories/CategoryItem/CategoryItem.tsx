import React from 'react';
import Image from 'next/image';
import styles from './CategoryItem.module.scss';
import { A } from '../../../../common/A/A';
import { ERoute } from '../../../../../enum/ERoute';

interface CategoryItemProps {
	categoryId: number;
	image: string;
	name: string;
}

// TODO - сделай ссылку на каталог с фильтром по категории
export const CategoryItem: React.FC<CategoryItemProps> = ({ categoryId, image, name }) => {
	return (
		<A href={ERoute.Catalog + `/${categoryId}`}>
			<div className={styles.category}>
				<Image src={image} width={120} height={120} objectFit={'contain'} alt={name} />
				<span className={styles.name}>{name}</span>
			</div>
		</A>
	);
};
