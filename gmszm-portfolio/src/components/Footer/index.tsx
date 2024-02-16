import React from 'react';
import styles from './Footer.module.css'


const Footer = async () => {
    const openLinkedin = (e: { preventDefault: () => void; }) => {
        window.open("https://www.linkedin.com/in/gabriella-sz-m/", "_blank")
    }

    const openGithub = (e: { preventDefault: () => void; }) => {
        window.open("https://github.com/GMSzebeni", "_blank")
    }

    const openCodewars = (e: { preventDefault: () => void; }) => {
        window.open("https://www.codewars.com/users/Iiny", "_blank")
    }

    const openHackerrank = (e: { preventDefault: () => void; }) => {
        window.open("https://www.hackerrank.com/profile/gmszm", "_blank")
    }

    return (
        <div className={styles.footerMain}>
            <div className={styles.footerContainer}>
                <div 
                    className={styles.linkedin}
                    onClick={openLinkedin} />
                <div
                    className={styles.github}
                    onClick={openGithub} />
                <div 
                    className={styles.codewars}
                    onClick={openCodewars} />
                <div 
                    className={styles.hackerrank}
                    onClick={openHackerrank} />
            </div>
        </div> 
    );
}

export default Footer;