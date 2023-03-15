import React from 'react';
import styles from './services.module.css';

const Services = () => {
    return(
        <>
          <div className={styles.body}>
            <h2 className={styles.h2} >My Services</h2>
            <div className={styles.container}>
                <div className={styles.box}>
                    <h3 className={styles.h3}>Web development</h3>
                </div>
                <div className={styles.box}>
                    <h3 className={styles.h3}>Web design</h3>
                </div>
                <div className={styles.box}>
                    <h3 className={styles.h3}>UI/UX Design</h3>
                </div>
            </div>
          </div>
        </>
    )
}
export default Services;