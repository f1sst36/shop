import cx from 'classnames';

class CarouselController {
	public prevCardIndex = (currentCardIndex: number, itemsCount: number): number => {
		return currentCardIndex - 1 < 0 ? itemsCount - 1 : currentCardIndex - 1;
		// return items.at(currentCardIndex - 1)
	};
	public nextCardIndex = (currentCardIndex: number, itemsCount: number): number => {
		return currentCardIndex + 1 >= itemsCount ? 0 : currentCardIndex + 1;
	};
	public classNameForCardByIndex = (
		currentCardIndex: number,
		cardIndex: number,
		itemsCount: number,
		styles: any
	): string => {
		if (currentCardIndex === cardIndex) return styles.mainItem;

		if (cardIndex === this.prevCardIndex(currentCardIndex, itemsCount)) return styles.leftItem;
		if (cardIndex === this.nextCardIndex(currentCardIndex, itemsCount)) return styles.rightItem;

		if (
			cardIndex ===
			this.prevCardIndex(this.prevCardIndex(currentCardIndex, itemsCount), itemsCount)
		)
			return cx(styles.leftItem, styles.hiddenItem);
		if (
			cardIndex ===
			this.nextCardIndex(this.nextCardIndex(currentCardIndex, itemsCount), itemsCount)
		)
			return cx(styles.rightItem, styles.hiddenItem);

		return styles.hiddenItem;
	};
}

export const carouselController = new CarouselController();
