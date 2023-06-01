import React from 'react';
import styles from './services.module.css';
import image1 from './images/webdevelopment.png';
import image2 from './images/webdesign.png';
import image3 from './images/uxIcon.png'
import reactImage from './images/react.png';
import cssImage from './images/css.png';
import javascriptImage from './images/javascript.png';
import htmlImage from './images/html.png';
import gitImage from './images/git.png'
import tailwindImage from './images/tailwind.png'


const Services = () => {
    return(
        <>
          
          <h1 className={styles.h1}>My Services</h1>
          <div className={styles.wrapper}>
              <div className={styles.card}>
              <img src={image1} alt='UI/UX design' className={styles.iconResponsive}></img>
                <img src={image1} alt='WEB DEVELOPMENT LOGO' className={styles.icon} ></img>
                <h3 className={styles.h3} >Web development</h3>
                <p className={styles.p}>
                    As a web developer, i create and maintain fully functional<br/>
                    responsive websites according to the customers requirements
                </p>
              </div>

              <div className={styles.card}>
              <img src={image2} alt='UI/UX design' className={styles.iconResponsive}></img>
                <img src={image2} alt='WEB DESIGN LOGO' className={styles.icon}></img>
                <h3 className={styles.h3} >Web design</h3>
                <p className={styles.p}>
                    I design the layout and visual appearence of websites to<br/>
                    fulfilll customers satisfaction
                </p>
              </div>

              <div className={styles.card}>
              <img src={image3} alt='UI/UX design' className={styles.iconResponsive}></img>
                <img src={image3} alt='UI/UX design' className={styles.icon}></img>
                <h3 className={styles.h3} >UI/UX design</h3>
                <p className={styles.p}>
                   As as UI/UX designer,i have knowledge in creating interactive visual products
                   such as buttons,screen animations,layouts, search bars
                   and working on color typogrophy.
                </p>
              </div>
          </div>
          <div className={styles.stack} >
                 <h4>Tech stacks</h4>
                <img src={htmlImage} alt='HTML ICON'  className={styles.image}></img>
                <img src={cssImage} alt='CSS ICON'  className={styles.image}></img>
                <img src={javascriptImage} alt='JS ICON'  className={styles.image}></img>
                <img src={reactImage} alt='REACT ICON'className={styles.image} ></img>
                <img src={gitImage} alt='GIT ICON'  className={styles.image}></img>
                <img src={tailwindImage} alt="TAILWIND " className={styles.image}  />
          </div>
        </>
    )
}
export default Services;