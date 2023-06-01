import React from 'react';
import styles from './about.module.css'


const About = () => {
    return(
        <>
            <div className={styles.body}>
                <h2 className={styles.h2}>About me</h2>
                <p className={styles.p}> 
                   As a web developer, i have experience in creating and maintaining fully functional responsive <br/>
                   websites such as business websites, blog websites, event websites and portfolio websites.<br/>
                   I am fairly proficient in a variety of web technologies which include HTML, CSS,Javascript<br/>
                   and tailwind for frontend development.I also utilize React to develop UI components<br/>
                   and node.js together with nodemailer for server side scripting.I use Git as my preferred<br/>
                   version control system and Github to host my remote git repositories.<br/>
                </p> 
            </div>
        </>
    )
}

export default About;