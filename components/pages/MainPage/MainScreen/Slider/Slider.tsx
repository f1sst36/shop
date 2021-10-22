import React from "react";
import styles from './Slider.module.scss';
import Image from 'next/image';
import {useTypedSelector} from "../../../../../hooks/redux";
import {EAsync} from "../../../../../enum/EAsync";

export const Slider: React.FC = () => {
    const {mainScreenSmartphones, loadingState} = useTypedSelector(store => store.mainPageState)

    if (loadingState === EAsync.ERROR || !mainScreenSmartphones.length) return null;

    return <div className={styles.slider}>
        <div className={styles.line}>
            <div className={styles.thumb}/>
        </div>
        <ul className={styles.items}>
            {mainScreenSmartphones && mainScreenSmartphones.map(item => (
                <li className={styles.item} key={item.id}>
                    <Image width={120} height={120} layout={'fixed'} src={item.mainImage} alt={item.name}/>
                    <span className={styles.name}>{item.name}</span>
                </li>
            ))}
        </ul>
    </div>
}