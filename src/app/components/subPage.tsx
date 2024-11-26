import React, { ReactNode } from "react";
import styles from '../css/subPage.module.css';
import NavBar from './NavBar';

const SubPage = ({ children } : {children: ReactNode;}) => {
    return(
        <div>
            <div className={styles.container}>
                <NavBar />
                <main className={styles.childContainer}>{children}</main>
            </div>
            <div className={styles.footer}>
            </div>
        </div>
    );
};

export default SubPage;