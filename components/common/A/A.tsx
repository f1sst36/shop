import React from "react";
import Link from "next/link";
import styles from './A.module.scss';

interface AProps {
    href: string
}

export const A: React.FC<AProps> = ({href, children}) => {
    return <Link href={href}>
        <a className={styles.a}>{children}</a>
    </Link>
}