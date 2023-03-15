import React from 'react';
import styles from './nav.module.css';
import myImage from './images/github.png'




const Nav = () => {
    return(
        <>
         <nav className={styles.navbar}>
            <div className={styles.logo}>
            <img src='' alt="LOGO" />
            </div>
            <ul className={styles.ul}>
                <li className={styles.links}><a className={styles.a} href='/'>Home</a></li>
                <li className={styles.links}><a className={styles.a} href='/'>About</a></li>
                <li className={styles.links}><a className={styles.a} href='/'>Services</a></li>
                <li className={styles.links}><a className={styles.a} href='/'>Projects</a></li>
                <li className={styles.links}><a className={styles.a} href='/'>Contact</a></li>
            </ul>
            <div className={styles.githubLink}>
                <a  href='/'>
                <img src={myImage} alt="GITHUB LINK" />
                </a>
            </div>
                <a className={styles.letsConnect} href='/'>LETS CONNECT</a>
         </nav>
        </>
    )
}

export default Nav;