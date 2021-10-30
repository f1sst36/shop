import React, { useCallback, useState } from 'react';
import cx from 'classnames';
import Image from 'next/image';
import { throttle } from 'lodash';
import { Container } from '../../../layout/Container/Container';
import styles from './Carousel.module.scss';
import { carouselController } from '../../../../store/reducers/mainPage/carouselController';
import { Dots } from './Dots/Dots';
import { smartphonesForCarousel } from '../../../../database/temp';
import { Card } from './Card/Card';

export const Carousel: React.FC = () => {
	const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
	const { classNameForCardByIndex, nextCardIndex, prevCardIndex } = carouselController;

	const slideTo = useCallback(
		throttle(
			(newCurrentCardIndex: number) => {
				setCurrentCardIndex(newCurrentCardIndex);
			},
			1000,
			{ trailing: false }
		),
		[]
	);

	return (
		<section className={styles.section}>
			<Container>
				<h2 className={styles.title}>Популярные товары</h2>
				<Dots dotsCount={smartphonesForCarousel.length} activeDotIndex={currentCardIndex} />
				<div className={styles.carousel}>
					{smartphonesForCarousel.map((card, index) => (
						<Card
							product={card}
							key={card.id}
							className={cx(
								styles.item,
								styles.onTablet,
								classNameForCardByIndex(
									currentCardIndex,
									index,
									smartphonesForCarousel.length,
									styles
								)
							)}
						/>
					))}
				</div>
				<div className={cx(styles.buttons, 'hidden-tablet')}>
					<button
						className={styles.slideButton}
						onClick={() =>
							slideTo(prevCardIndex(currentCardIndex, smartphonesForCarousel.length))
						}
					>
						<Image
							className={styles.leftArrow}
							src={'/static/icons/up_arrow.svg'}
							width={24}
							height={24}
							alt={'left arrow'}
						/>
					</button>
					<button
						className={styles.slideButton}
						onClick={() =>
							slideTo(nextCardIndex(currentCardIndex, smartphonesForCarousel.length))
						}
					>
						<Image
							className={styles.rightArrow}
							src={'/static/icons/up_arrow.svg'}
							width={24}
							height={24}
							alt={'right arrow'}
						/>
					</button>
				</div>
			</Container>
		</section>
	);
};
