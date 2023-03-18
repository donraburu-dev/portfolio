import React from 'react';
import styles from './footer.module.css';


const Footer = () => {
    return(
        <>
        <footer className={styles.footer} >

          <div className={styles.topSection} >
              <div className={styles.firstRow} >
                  <h3>Portfolio</h3>
                  <p>
                   KIndly contact us 
                  </p>
              </div>

              <div className={styles.secondRow} >
                  <h3 className={styles.h3}>Quick links</h3>
                    <ul className={styles.ul} >
                      <li className={styles.li} ><a href='/'>Home</a></li>
                      <li className={styles.li} ><a href='/'>About</a></li>
                      <li className={styles.li} ><a href='/'>Services</a></li>
                      <li className={styles.li} ><a href='/'>Contact</a></li>
                    </ul>
                  
              </div>

              <div className={styles.thirdRow} >
                    
                    <a href='/' className={styles.a} >donraburu77@gmail.com</a>
                    <h3 >0708630519</h3>
              </div>
          </div>

          <div className={styles.bottomSection} >
                <div className={styles.line}> </div>
          </div>

        </footer>
        </>
    )
}
export default Footer;