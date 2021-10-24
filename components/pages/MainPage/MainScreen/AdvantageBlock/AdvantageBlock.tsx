import React from "react";
import Image from 'next/image';
import styles from './AdvantageBlock.module.scss';

export const AdvantageBlock: React.FC<{ title: string, text: string, icon: string }> = ({title, text, icon}) => {
    return <div className={styles.block}>
        <Image src={icon} width={56} height={56} alt={title + ' icon'}/>
        <div className={styles.textContent}>
            <h5 className={styles.title}>{title}</h5>
            <p className={styles.text}>{text}</p>
        </div>
    </div>
}