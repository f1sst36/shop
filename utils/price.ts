export const priceFormatter = (price: number): string => {
	return price.toLocaleString('ru', {
		style: 'currency',
		currency: 'RUB'
	});
};
