import React from 'react';
import { Container } from '../../../layout/Container/Container';
import styles from './AboutProduct.module.scss';
import { Button } from '../../../common/Button/Button';
import { ERoute } from '../../../../enum/ERoute';
import Image from 'next/image';

export const AboutProduct: React.FC = () => {
	return (
		<section className={styles.section}>
			<Container containerClass={styles.container}>
				<div className={styles.subContainer}>
					<div className={styles.circle} />
					<div className={styles.content}>
						<h2 className={styles.title}>Lorem ispum</h2>
						<p className={styles.description}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam
							aperiam assumenda beatae eius enim, eum, explicabo fuga iste minima nam
							odio praesentium quasi quis quo reiciendis repellat sint
							temporibus!Aliquid incidunt iste odit ullam? Ab aspernatur consectetur
							corporis culpa dolore doloribus et eveniet fugit harum hic magni
							molestiae neque
						</p>
						<Button variant={'secondary'} to={ERoute.Catalog}>
							Каталог
						</Button>
					</div>
				</div>
				<div className={styles.imageWrapper}>
					<Image
						className={styles.image}
						src={'/static/images/mainPage/phones.png'}
						layout={'fill'}
						priority
						objectFit={'contain'}
						quality={95}
						alt={'phones'}
					/>
				</div>
			</Container>
		</section>
	);
};
