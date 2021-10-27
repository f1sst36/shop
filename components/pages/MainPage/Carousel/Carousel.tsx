import React, {useCallback, useState} from "react";
import cx from 'classnames';
import {throttle} from 'lodash';
import {Container} from "../../../layout/Container/Container";
import styles from './Carousel.module.scss';
import {carouselController} from "../../../../store/reducers/mainPage/carouselController";

// TODO - temp data
const cards = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
    {
        id: 5,
    },
]

export const Carousel: React.FC = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
    const {classNameForCardByIndex, nextCardIndex, prevCardIndex} = carouselController;

    const slideTo = useCallback(throttle((newCurrentCardIndex: number) => {
        setCurrentCardIndex(newCurrentCardIndex);
    }, 1000), []);

    return <section>
        <Container>
            <h2>Популярные товары</h2>
            <button onClick={() => slideTo(prevCardIndex(currentCardIndex, cards.length))}>
                {'<'}
            </button>
            <button onClick={() => slideTo(nextCardIndex(currentCardIndex, cards.length))}>
                {'>'}
            </button>
            <div className={styles.carousel}>
                {cards.map((card, index) => (
                    <div key={card.id}
                         className={cx(styles.item, classNameForCardByIndex(currentCardIndex, index, cards.length, styles))}>
                        {card.id}
                    </div>
                ))}
            </div>
        </Container>
    </section>
}