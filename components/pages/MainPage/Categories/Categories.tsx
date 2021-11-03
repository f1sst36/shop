import React from 'react';
import styles from './Categories.module.scss';
import { Container } from '../../../layout/Container/Container';
import { CategoryItem } from './CategoryItem/CategoryItem';
import { categories } from '../../../../database/temp';

export const Categories: React.FC = () => {
	return (
		<section className={styles.section}>
			<Container>
				<h2 className={styles.title}>Категории</h2>
				<div className={styles.categories}>
					{categories.map((category) => (
						<CategoryItem
							key={category.id}
							categoryId={category.id}
							image={category.image}
							name={category.name}
						/>
					))}
				</div>
			</Container>
		</section>
	);
};
