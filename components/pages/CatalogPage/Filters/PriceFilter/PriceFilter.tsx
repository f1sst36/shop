import { throttle } from 'lodash';
import React, { useCallback, useState } from 'react';
import { DoubleRange } from '../../../../common/DoubleRange/DoubleRange';

export const PriceFilter: React.FC = () => {
	const [priceRange, setPriceRange] = useState<{
		min: number;
		max: number;
	}>({
		min: 5_000,
		max: 70_000
	});

	const changePriceRangeValue = useCallback(
		throttle((currentMinValue: number, currentMaxValue: number) => {
			setPriceRange({
				min: currentMinValue,
				max: currentMaxValue
			});
		}, 20),
		[]
	);

	return (
		<div>
			<div>
				<div>
					<span>От</span>
					<input value={priceRange.min} type="text" readOnly />
				</div>
				<div>
					<span>До</span>
					<input value={priceRange.max} type="text" readOnly />
				</div>
			</div>
			<DoubleRange
				rangeConfig={{
					min: 0,
					max: 100_000
				}}
				rangeValue={priceRange}
				onChangeCallback={changePriceRangeValue}
				step={1}
			/>
		</div>
	);
};
