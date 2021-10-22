import React from "react";
import Image from 'next/image'
import styles from './UserBar.module.scss';

export const UserBar: React.FC = () => {
    return <div className={styles.userBar}>
        <Image src={'/static/icons/cart.svg'} alt='cart icon' width={32} height={32}/>
    </div>
}
