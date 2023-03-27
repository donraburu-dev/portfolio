import React from 'react';
import styles from './home.module.css';
import myImage from './images/space.jpg';
import Typed from 'react-typed';

const Home = () => {



    return(
      <>
      <div className={styles.banner}>
        <div className={styles.text}>
          <h3 className={styles.h3}>Welcome to my portfolio</h3>
          <div className={styles.h1}>
            <Typed className={styles.animation}
              strings={["Hi i'm Don","Hi i'm a freelancer","Hi i'm a web developer","Hi i'm a web designer",]}
              typeSpeed={80}
              backSpeed={80}
              loop
            />
          </div>
          <p className={styles.p}>Front-End React Developer</p>
        
                <button className={styles.btn} >
                <a className={styles.letsConnect} href='/'>SKILLS</a>
                </button>
        
        </div>
        <div className={styles.imgBox}>
          <img className={styles.img} src={myImage} alt="bannerImage" />
        </div> 
      </div>
     
      </>
    )
}

export default Home;
