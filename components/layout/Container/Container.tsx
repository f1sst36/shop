import React from "react"
import cx from 'classnames'
import styles from './Container.module.scss'

interface ContainerProps {
    containerClass?: string
}

export const Container: React.FC<ContainerProps> = ({children, containerClass}) => {
    return <div className={cx(containerClass, styles.container)}>
        {children}
    </div>
}