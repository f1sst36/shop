import React from "react";
import styles from './Logo.module.scss';

export const Logo: React.FC = () => {
    return <div className={styles.logoWrapper}>
        <h4 className={styles.logoText}>LOGO</h4>
    </div>
}
