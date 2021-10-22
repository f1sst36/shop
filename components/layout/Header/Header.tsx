import React from "react";
import {Logo} from "./Logo/Logo";
import {Navigation} from "./Navigation/Navigation";
import {UserBar} from "./UserBar/UserBar";
import {Container} from "../Container/Container";
import styles from './Header.module.scss'

export const Header: React.FC = () => {
    return <header className={styles.header}>
        <Container containerClass={styles.container}>
            <Logo/>
            <Navigation/>
            <UserBar/>
        </Container>
    </header>
}
