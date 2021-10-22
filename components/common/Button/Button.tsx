import React from "react";
import cx from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
    variant?: 'primary' | 'secondary',
    size?: 'large' | 'small',
    fullWidth?: boolean,
    className?: string
}

export const Button: React.FC<ButtonProps> = ({children, variant = 'primary', size = 'large', fullWidth = false, className, ...props}) => {
    return <button className={cx(styles.button, className, styles[`button--${variant}`])} {...props}>
        <span className={styles.text}>{children}</span>
    </button>
}