import React from 'react';
import styles from './Categories.module.scss';
import { Container } from '../../../layout/Container/Container';
import { CategoryItem } from './CategoryItem/CategoryItem';
import { useTypedSelector } from '../../../../hooks/redux';

export const Categories: React.FC = () => {
	const { categories } = useTypedSelector((store) => store.mainPageState);
	return (
		<section className={styles.section}>
			<Container>
				<h2 className={styles.title}>Категории</h2>
				<div className={styles.categories}>
					{categories.map((category: any) => (
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
