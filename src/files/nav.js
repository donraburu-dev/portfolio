import styles from './nav.module.css';
import myImage from './images/github.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

 const Nav = () => {
    const [ dropdown,setDropdown ] = useState(false);
  
//Create function to trigger the dropdown menu after clicking on the link
//the state should be false when clicked
     const handleLinkClick = () => {
        setDropdown(false);
      };

    return(
        <>
            
         <nav className={styles.navbar}>
            <div className={styles.logo}>
            <img src='' alt="PORTFOLIO" />
            </div>
                    <ul className={styles.ul}>
                    <li className={styles.links}>  <Link className={styles.a} to='/'>Home</Link>  </li>
                    <li className={styles.links}> <Link className={styles.a} to='/about'>About</Link>  </li>
                    <li className={styles.links}>  <Link   className={styles.a} to='/services'>Services</Link> </li>
                    { /* 
                    <li className={styles.links}> <Link className={styles.a} href='/projects'>Projects</Link> </li>
                    */ }
                    <li className={styles.linkContact}> <Link className={styles.a} to='/contact'>Contact</Link> </li>  
                    </ul>
             
                   {

                    dropdown &&
                         //set an onClick function inside the links to handle the function
                        <ul className={styles.ulHamburger}>
                        <li className={styles.links}>  <Link className={styles.a} to='/' onClick={handleLinkClick} >Home</Link>  </li>
                        <li className={styles.links}> <Link className={styles.a} to='/about'  onClick={handleLinkClick} >About</Link>  </li>
                        <li className={styles.links}>  <Link className={styles.a} to='/services' onClick={handleLinkClick}>Services</Link> </li>
                        { /* 
                        <li className={styles.links}> <Link className={styles.a} href='/projects'>Projects</Link> </li>
                        */ }
                        <li className={styles.links}  > <Link className={styles.a} to='/contact' onClick={handleLinkClick}  >Contact</Link > </li>  
                        </ul>
                    }
            
            <div className={styles.githubLink}>
                <a  href='/'>
                <img src={myImage} alt="GITHUB LINK" />
                </a>
            </div>  
                <Link className={styles.letsConnect} to='/contact'> LETS CONNECT </Link>
                
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