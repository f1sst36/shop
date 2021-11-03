import React from 'react';
import cx from 'classnames';
import styles from './Slider.module.scss';
import Image from 'next/image';
import { CroppedSmartphoneType } from '../../../../../models/smartphone';
import { mainScreenController } from '../../../../../store/reducers/mainPage/mainScreenController';
import { useTypedDispatch } from '../../../../../hooks/redux';

interface SliderProps {
	smartphonesList: CroppedSmartphoneType[];
	activeSmartphoneIndex: number;
}

export const Slider: React.FC<SliderProps> = ({ smartphonesList, activeSmartphoneIndex }) => {
	const dispatch = useTypedDispatch();
	const { setActiveSmartphoneForSlider } = mainScreenController;

	const thumbTopOffset = activeSmartphoneIndex * 25;

	return (
		<div className={styles.slider}>
			<div className={styles.line}>
				<div style={{ top: `${thumbTopOffset}%` }} className={styles.thumb} />
			</div>
			<ul className={styles.items}>
				{smartphonesList.map((item, index) => (
					<li
						onClick={() => setActiveSmartphoneForSlider(dispatch, index)}
						className={cx(
							styles.item,
							index === activeSmartphoneIndex && styles.active
						)}
						key={item.id}
					>
						<div className={styles.imageWrapper}>
							<Image
								className={styles.image}
								layout={'fill'}
								objectFit={'contain'}
								src={item.mainImage}
								alt={item.name}
							/>
						</div>
						<span className={styles.name}>{item.name}</span>
					</li>
				))}
			</ul>
		</div>
	);
};
