import React from "react";
import cx from 'classnames';
import {NAVIGATION_PATHS} from "../../../../constants/navigation";
import {A} from "../../../common/A/A";
import styles from './Navigation.module.scss';
import {useRouter} from "next/router";

export const Navigation: React.FC = () => {
    const router = useRouter();
    return <nav className={styles.nav}>
        <ul className={styles.navList}>
            {NAVIGATION_PATHS.map((path) => (
                <li className={cx(styles.listItem, router.pathname === path.url && styles.active)} key={path.name}>
                    <A text={path.name} href={path.url}/>
                </li>
            ))}
        </ul>
    </nav>
}