import React, { useCallback, useState } from 'react';
import cx from 'classnames';
import Image from 'next/image';
import { throttle } from 'lodash';
import { Container } from '../../../layout/Container/Container';
import styles from './Carousel.module.scss';
import { carouselController } from '../../../../store/reducers/mainPage/carouselController';
import { Dots } from './Dots/Dots';
import { Card } from './Card/Card';
import { RootState } from '../../../../store/store';
import { useCSTypedSelector } from '../../../../hooks/redux';

export const Carousel: React.FC<{ serverSideRootState: RootState }> = ({ serverSideRootState }) => {
	const { smartphones } = useCSTypedSelector(serverSideRootState).mainPageState.carousel;
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
				<Dots dotsCount={smartphones.length} activeDotIndex={currentCardIndex} />
				<div className={styles.carousel}>
					{smartphones.map((card, index) => (
						<Card
							product={card}
							key={card.id}
							className={cx(
								styles.item,
								styles.onTablet,
								classNameForCardByIndex(
									currentCardIndex,
									index,
									smartphones.length,
									styles
								)
							)}
						/>
					))}
				</div>
				<div className={cx(styles.buttons, 'hidden-tablet')}>
					<button
						className={styles.slideButton}
						onClick={() => slideTo(prevCardIndex(currentCardIndex, smartphones.length))}
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
						onClick={() => slideTo(nextCardIndex(currentCardIndex, smartphones.length))}
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
