import React from "react";
import Image from 'next/image';
import {Container} from "../../../layout/Container/Container";
import styles from './MainScreen.module.scss';
import {Button} from "../../../common/Button/Button";
import {Slider} from "./Slider/Slider";
import {RootState} from "../../../../store/store";
import {MAIN_SCREEN_SLIDER_ITEMS_COUNT} from "../../../../constants/mainPage";
import {useCSTypedSelector} from "../../../../hooks/redux";

export const MainScreen: React.FC<{ preloadedState: RootState }> = ({preloadedState}) => {
    const {mainScreenSmartphones, activeSmartphoneIndex} = useCSTypedSelector(preloadedState).mainPageState.mainScreen;
    const activeSmartphone = activeSmartphoneIndex === null ? mainScreenSmartphones[0] : mainScreenSmartphones[activeSmartphoneIndex];

    return <section className={styles.section}>
        <Container>
            <div className={styles.mainPart}>
                <div className={styles.itemDescription}>
                    <div>
                        <h1 className={styles.title}>{activeSmartphone.name}</h1>
                        <p className={styles.description}>{activeSmartphone.description}</p>
                    </div>
                    <Button className={styles.button}>Подробнее [link]</Button>
                </div>
                <div className={styles.itemImage}>
                    <div className={styles.light}/>
                    <Image src={activeSmartphone.mainImage} width={600} height={600}
                           alt={activeSmartphone.name}/>
                </div>
                <div>
                    {mainScreenSmartphones.length === MAIN_SCREEN_SLIDER_ITEMS_COUNT &&
                    <Slider
                        smartphonesList={mainScreenSmartphones}
                        activeSmartphoneIndex={activeSmartphoneIndex || 0}
                    />}
                </div>
            </div>
            <div>

            </div>
        </Container>
    </section>
}
