import React from 'react';
import Image from 'next/image';
import cx from 'classnames';
import { Container } from '../../../layout/Container/Container';
import styles from './MainScreen.module.scss';
import { Button } from '../../../common/Button/Button';
import { Slider } from './Slider/Slider';
import { MAIN_SCREEN_SLIDER_ITEMS_COUNT } from '../../../../constants/mainPage';
import { useTypedSelector } from '../../../../hooks/redux';
import { AdvantageBlock } from './AdvantageBlock/AdvantageBlock';

export const MainScreen: React.FC = () => {
	const { mainScreenSmartphones, activeSmartphoneIndex } = useTypedSelector(
		(store) => store.mainPageState.mainScreen
	);
	const activeSmartphone =
		activeSmartphoneIndex === null
			? mainScreenSmartphones[0]
			: mainScreenSmartphones[activeSmartphoneIndex];

	return (
		<section className={styles.section}>
			<Container>
				<div className={styles.mainPart}>
					<div className={styles.itemDescription}>
						<div>
							<h1 className={cx(styles.title, 'silverGradientText')}>
								{activeSmartphone.name}
							</h1>
							<h4 className={cx(styles.subTitle, 'silverGradientText')}>
								{activeSmartphone.subName}
							</h4>
							<p className={styles.description}>{activeSmartphone.description}</p>
						</div>
						<Button className={styles.button}>Подробнее</Button>
					</div>
					<figure className={styles.itemImage}>
						{mainScreenSmartphones.map((smartphone) => (
							<Image
								key={smartphone.id}
								className={cx(
									styles.image,
									activeSmartphone.id === smartphone.id && styles.activeImage
								)}
								src={smartphone.mainImage}
								quality={90}
								objectFit={'contain'}
								layout={'fill'}
								alt={smartphone.name}
							/>
						))}
					</figure>
					<div className={styles.sliderWrapper}>
						{mainScreenSmartphones.length === MAIN_SCREEN_SLIDER_ITEMS_COUNT && (
							<Slider
								smartphonesList={mainScreenSmartphones}
								activeSmartphoneIndex={activeSmartphoneIndex || 0}
							/>
						)}
					</div>
				</div>
				<div>
					<div className={styles.advantages}>
						<AdvantageBlock
							icon={'/static/icons/mainPage/mainScreen/sun.svg'}
							title={'Conditions'}
							text={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eveniet hic inventore ipsa!'
							}
						/>
						<AdvantageBlock
							icon={'/static/icons/mainPage/mainScreen/quality.svg'}
							title={'Quality'}
							text={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eveniet hic inventore ipsa'
							}
						/>
						<AdvantageBlock
							icon={'/static/icons/mainPage/mainScreen/delivery.svg'}
							title={'Delivery'}
							text={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eveniet hic inventore ipsa'
							}
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};
