import styles from './nav.module.css';
import myImage from './images/github.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Nav  ()  {
  
    const [ dropdown,setDropdown ] = useState(false);


    return(
        <>
         <nav className={styles.navbar}>
            <div className={styles.logo}>
            <img src='' alt="PORTFOLIO" />
            </div>

            {
                dropdown ?
                <ul className={styles.ul}>
                <li className={styles.links}>  <Link className={styles.a} to='/'>Home</Link>  </li>
                <li className={styles.links}> <Link className={styles.a} to='/about'>About</Link>  </li>
                <li className={styles.links}>  <Link className={styles.a} to='/services'>Services</Link> </li>
                { /* 
                <li className={styles.links}> <Link className={styles.a} href='/projects'>Projects</Link> </li>
                */ }
               <li className={styles.linkContact}> <Link className={styles.a} to='/contact'>Contact</Link> </li>  
               </ul>
            : ''
           }

            <div className={styles.githubLink}>
                <a  href='/'>
                <img src={myImage} alt="GITHUB LINK" />
                </a>
            </div>
                <button className={styles.btn} >
                <a className={styles.letsConnect} href='/'>LETS CONNECT</a>
                </button>
                
                <button className={styles.hamburger} onClick= { () => setDropdown(!dropdown) } >
                   <span></span>
                   <span></span>
                   <span></span>
                </button>

         </nav>
        </>
    )
}

export default Nav;