import React from "react";
import Image from 'next/image';
import {Container} from "../../../layout/Container/Container";
import styles from './MainScreen.module.scss';
import {Button} from "../../../common/Button/Button";
import {Slider} from "./Slider/Slider";

export const MainScreen: React.FC = () => {
    return <section className={styles.section}>
        <Container>
            <div className={styles.mainPart}>
                <div className={styles.itemDescription}>
                    <div>
                        <h1 className={styles.title}>BANANA</h1>
                        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Doloremque eligendi fuga ipsam ipsum
                            nisi. Aspernatur delectus enim esse eveniet expedita facere fuga incidunt inventore iusto
                            nulla
                            obcaecati similique, tempora tempore ut voluptates. Aliquam id odio, officia officiis optio
                            quasi repellendus.</p>
                    </div>
                    <Button className={styles.button}>Подробнее</Button>
                </div>
                <div className={styles.itemImage}>
                    <div className={styles.light}/>
                    <Image src={'/static/images/mainPage/mainScreen/phones.png'} width={600} height={600}
                           alt={'Smartphone'}/>
                </div>
                <div>
                    <Slider/>
                </div>
            </div>
            <div>

            </div>
        </Container>
    </section>
}
