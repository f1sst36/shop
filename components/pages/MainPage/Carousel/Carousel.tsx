import React, {useState} from "react";
import cx from 'classnames';
import {throttle} from 'lodash';
import {Container} from "../../../layout/Container/Container";
import styles from './Carousel.module.scss';
import {carouselController} from "../../../../store/reducers/mainPage/carousel/carouselController";

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

    const slideToPrevCard = throttle(() => {
        console.log('click')
        setCurrentCardIndex(prevCardIndex(currentCardIndex, cards.length))
    }, 1000);

    const slideToNextCard = throttle(() => {
        console.log('click')
        setCurrentCardIndex(nextCardIndex(currentCardIndex, cards.length))
    }, 1000);

    return <section>
        <Container>
            <h2>Популярные товары</h2>
            <button onClick={slideToPrevCard}>
                {'<'}
            </button>
            <button onClick={slideToNextCard}>
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