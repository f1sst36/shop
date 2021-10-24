import React from "react";
import Link from "next/link";
import styles from './A.module.scss';

interface AProps {
    text: string
    href: string
}

export const A: React.FC<AProps> = ({text, href}) => {
    return <Link href={href}>
        <a className={styles.a}>{text}</a>
    </Link>
}