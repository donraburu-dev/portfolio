import { Link, useLocation } from 'react-router-dom'

import styles from './nav.module.css';
import myImage from './images/github.png'


export default function Nav  ()  {
    return(
        <>
         <nav className={styles.navbar}>
            <div className={styles.logo}>
            <img src='' alt="LOGO" />
            </div>

            <ul className={styles.ul}>
                    <li className={styles.links}>  <CustomLink className={styles.a} to='/'>Home</CustomLink>  </li>
                    <li className={styles.links}> <CustomLink className={styles.a} to='/my-portfolio/src/files/about.js'>About</CustomLink>  </li>
                    <li className={styles.links}>  <CustomLink className={styles.a} to='/services'>Services</CustomLink> </li>
                    <li className={styles.links}> <CustomLink className={styles.a} to='/projects'>Projects</CustomLink> </li>
                   <li className={styles.links}> <CustomLink className={styles.a} to='/'>Contact</CustomLink> </li>
                
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

function CustomLink({ to, children, ...props }){
    const location = useLocation()

    return(
        <li className={location.pathname === to ? "active" :""} >
            <Link to={to}  {...props}>
                {children}
            </Link>
        </li>
    )
}