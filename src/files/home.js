import React from 'react';
import styles from './home.module.css';
import myImage from './images/space.jpg';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
      <>
      <div className={styles.banner}>
        <div className={styles.text}>
          <h3 className={styles.h3}>Welcome to my portfolio</h3>

          <p className={styles.p1}>Welcome to my portfolio</p>

          <div className={styles.h1}>
            <Typed className={styles.animation}
              strings={["Hi i'm Don", "I'm a freelancer", "I'm a web developer", "I'm a UI/UX designer",]}
              typeSpeed={80}
              backSpeed={80}
              loop
            />
          </div>
          
          {/*Removed animation in responsive design, make sure to change its display to none in desktop view*/}
          <h2 className={styles.anime}>
            <Typed className={styles.responsiveText}
              strings={["Hi i'm Don", "I'm a freelancer" ,"I'm a web developer" ,"I'm a UI/UX designer",]}
              typeSpeed={80}
              backSpeed={80}
              loop
            />
          </h2>

          <p className={styles.p}>React Web Developer</p>

        <Link className={styles.btn} to='/services'> SKILLS </Link>
        
        </div>
        <div className={styles.imgBox}>
          <img className={styles.img} src={myImage} alt="bannerImage" />
        </div> 
      </div>
     
      </>
    )
}

export default Home;
