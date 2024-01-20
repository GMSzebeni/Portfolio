import React from 'react';
import styles from './Navbar.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className={styles.navBarMain}>
            <div className={styles.navBarContainer}>
                <div className={styles.containerItemsWhenSmall}>
                    <Link href="/">
                        <h2 
                            className={styles.name}>
                            Gabriella Szebeni-Molnár
                        </h2>
                    </Link>
                    {/* HAMBURGER BUTTON FOR MOBILE */}
                    <div className="md:hidden">
                        <button
                            className={styles.menuButton}
                            onClick={() => setNavbar(!navbar)}>
                            {navbar ? (
                                <Image 
                                    src="/img/close.svg" 
                                    width={30} 
                                    height={30} 
                                    alt="close"/>
                                ) : (
                                <Image
                                    src="/img/menu-lines.svg"
                                    width={30}
                                    height={30}
                                    alt="logo"
                                    className={styles.hamburger}/>
                            )}
                        </button>
                    </div>
                </div>
                <div>
                    <div
                        className={`
                            ${styles.containerItems}
                            ${navbar ? 'p-12 md:p-0 block' : 'hidden'}
                        `}>
                        <ul 
                            className={styles.containerItemsUl}>
                            <li 
                                className={styles.containerItemsLi}>
                                <Link 
                                    href="#about" 
                                    onClick={() => setNavbar(!navbar)}>
                                    About
                                </Link>
                            </li>
                            <li 
                                className={styles.containerItemsLi}>
                                <Link 
                                    href="#projects" 
                                    onClick={() => setNavbar(!navbar)}>
                                    Projects
                                </Link>
                            </li>
                            <li 
                                className={styles.containerItemsLi}>
                                <Link 
                                    href="#contact" 
                                    onClick={() => setNavbar(!navbar)}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav> 
    );
}

export default Navbar;