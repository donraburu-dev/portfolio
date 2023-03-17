import React from 'react';
import styles from './services.module.css';
import image1 from './images/webdevelopment.png';
import image2 from './images/webdesign.png';
import image3 from './images/design.png';
import reactImage from './images/react.png';
import cssImage from './images/css.png';
import javascriptImage from './images/javascript.png';
import htmlImage from './images/html.png';
import gitImage from './images/git.png'

const Services = () => {
    return(
        <>
          <h1 className={styles.h1}>My Services</h1>
          <div className={styles.wrapper}>
          <div className={styles.card}>
            <img src={image1} alt='WEB DEVELOPMENT LOGO' className={styles.icon} ></img>
            <h3 className={styles.h3} >Web development</h3>
            <p className={styles.p}>
                We develop websites 
            </p>
          </div>

          <div className={styles.card}>
            <img src={image2} alt='WEB DESIGN LOGO' className={styles.icon}></img>
            <h3 className={styles.h3} >Web design</h3>
            <p className={styles.p}>
                We design websites
            </p>
          </div>

          <div className={styles.card}>
            <img src={image3} alt='UI/UX design' className={styles.icon}></img>
            <h3 className={styles.h3} >UI/UX design</h3>
            <p className={styles.p}>
                We design UI nad UX of web applications using React
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
          </div>
        </>
    )
}
export default Services;