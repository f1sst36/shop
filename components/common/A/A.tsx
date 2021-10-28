import React from "react";
import cx from 'classnames';
import Link from "next/link";
import styles from './A.module.scss';

interface AProps {
    href: string
    className: string
}

export const A: React.FC<AProps> = ({href, className, children}) => {
    return <Link href={href}>
        <a className={cx(styles.a, className)}>{children}</a>
    </Link>
}