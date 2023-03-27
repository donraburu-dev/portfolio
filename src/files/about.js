import React from 'react';
import styles from './about.module.css'


const About = () => {
    return(
        <>
            <div className={styles.body}>
                <h2 className={styles.h2}>About me</h2>
                <p className={styles.p}> 
                   As a front-end developer, I have experience creating responsive websites.<br/>
                   I am fairly proficient in a variety of web technologies, including HTML,<br/>
                   CSS, and Javascript. Together with php server side scripting, I also<br/>
                   utilize React to develop my UI components and using Git as my preferred version control system
                   and Github to host my remote git repositories.<br/>
                   I have experience in building the following types of websites,Business websites,Blog websites,
                   Event websites, Portfolio websites and personal websites.
                </p> 
            </div>
        </>
    )
}

export default About;