import React from "react";
import Image from 'next/image';
import cx from 'classnames';
import {Container} from "../../../layout/Container/Container";
import styles from './MainScreen.module.scss';
import {Button} from "../../../common/Button/Button";
import {Slider} from "./Slider/Slider";
import {RootState} from "../../../../store/store";
import {MAIN_SCREEN_SLIDER_ITEMS_COUNT} from "../../../../constants/mainPage";
import {useCSTypedSelector} from "../../../../hooks/redux";
import {AdvantageBlock} from "./AdvantageBlock/AdvantageBlock";

export const MainScreen: React.FC<{ serverSideRootState: RootState }> = ({serverSideRootState}) => {
    const {mainScreenSmartphones, activeSmartphoneIndex} = useCSTypedSelector(serverSideRootState).mainPageState.mainScreen;
    const activeSmartphone = activeSmartphoneIndex === null ? mainScreenSmartphones[0] : mainScreenSmartphones[activeSmartphoneIndex];

    return <section className={styles.section}>
        <Container>
            <div className={styles.mainPart}>
                <div className={styles.itemDescription}>
                    <div>
                        <h1 className={styles.title}>{activeSmartphone.name}</h1>
                        <h4 className={styles.subTitle}>{activeSmartphone.subName}</h4>
                        <p className={styles.description}>{activeSmartphone.description}</p>
                    </div>
                    <Button className={styles.button}>Подробнее [link]</Button>
                </div>
                <figure className={styles.itemImage}>
                    {mainScreenSmartphones.map(smartphone => (
                        <Image key={smartphone.id}
                               className={cx(styles.image, activeSmartphone.id === smartphone.id && styles.activeImage)}
                               src={smartphone.mainImage}
                               quality={90}
                               objectFit={"contain"}
                               layout={'fill'}
                               alt={smartphone.name}
                        />
                    ))}
                </figure>
                <div>
                    {mainScreenSmartphones.length === MAIN_SCREEN_SLIDER_ITEMS_COUNT &&
                    <Slider
                        smartphonesList={mainScreenSmartphones}
                        activeSmartphoneIndex={activeSmartphoneIndex || 0}
                    />}
                </div>
            </div>
            <div>
                <div className={styles.advantages}>
                    <AdvantageBlock
                        icon={'/static/icons/mainPage/mainScreen/sun.svg'}
                        title={'Conditions'}
                        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eveniet hic inventore ipsa!'}
                    />
                    <AdvantageBlock
                        icon={'/static/icons/mainPage/mainScreen/quality.svg'}
                        title={'Quality'}
                        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eveniet hic inventore ipsa'}
                    />
                    <AdvantageBlock
                        icon={'/static/icons/mainPage/mainScreen/delivery.svg'}
                        title={'Delivery'}
                        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eveniet hic inventore ipsa'}
                    />
                </div>
                <div>

                </div>
            </div>
        </Container>
    </section>
}
