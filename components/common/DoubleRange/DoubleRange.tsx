import React, { useEffect, useState } from 'react';
import styles from './DoubleRange.module.scss';

interface DoubleSliderProps extends React.InputHTMLAttributes<HTMLElement> {
	rangeConfig: {
		min: number;
		max: number;
	};
	rangeValue: {
		min: number;
		max: number;
	};
	onChangeCallback: (currentMinValue: number, currentMaxValue: number) => void;
}

export const DoubleRange: React.FC<DoubleSliderProps> = ({
	rangeConfig,
	rangeValue,
	onChangeCallback,
	...props
}) => {
	const [offset, setOffset] = useState<number>();
	const [width, setWidth] = useState<number>();

	const space = rangeConfig.max - rangeConfig.min;

	useEffect(() => {
		setOffset(((rangeValue.min - rangeConfig.min) / space) * 100);
		setWidth(((rangeValue.max - rangeValue.min) / space) * 100);

		if (rangeValue.min > rangeValue.max) {
			onChangeCallback(rangeValue.max, rangeValue.min);
			return;
		}

		onChangeCallback(rangeValue.min, rangeValue.max);
	}, [rangeValue.min, rangeValue.max]);

	return (
		<div className={styles.doubleRange}>
			<div className={styles.inputs}>
				<input
					className={styles.input}
					onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
						onChangeCallback(+e.target.value, rangeValue.max)
					}
					value={rangeValue.min}
					min={rangeConfig.min}
					max={rangeConfig.max}
					type="range"
					{...props}
				/>
				<input
					className={styles.input}
					onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
						onChangeCallback(rangeValue.min, +e.target.value)
					}
					value={rangeValue.max}
					min={rangeConfig.min}
					max={rangeConfig.max}
					type="range"
					{...props}
				/>
			</div>
			<div className={styles.lineWrapper}>
				<div
					style={{
						left: `${offset}%`,
						width: `${width}%`
					}}
					className={styles.line}
				/>
			</div>
		</div>
	);
};
