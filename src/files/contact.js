import {React, useState} from 'react';
import styles from './contact.module.css'

const Contact = () => {

    const [name, setName] =useState('');
    const [email, setEmail] =useState('');
    const [subject, setSubject]=useState('');
    const [error, setError] = useState(false);

    const handleSubmit = e => {
        e.preventDefault()
        if(name.length===0 || email.length===0 || subject.length===0) {
            setError(true)
        }
    }
    return(
        <>
          <div className={styles.body} >
          <h2 className={styles.h2} >Connect with me</h2>
          <h3 className={styles.h3} >Feel free to get in touch with me</h3>
          
            <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={handleSubmit} >


                   <div className={styles.inputBox}>
                        <label className={styles.label} for='username' >Username</label>
                        <div className={styles.inputContainer} >
                            <input id='username' placeholder='Username' onChange={ (e) => setName(e.target.value) }  />
                        </div>
                        {
                            error && name.length===0 ?
                             <label className={styles.error} >Field is required</label>:''
                        }
                   </div>
                   <div  className={styles.inputBox}>
                        <label className={styles.label} for='email' >email</label>
                        <div className={styles.inputContainer} >
                            <input id='email' placeholder='Email' onChange={ (e) => setEmail(e.target.value) }  />
                        </div>
                        {
                            error && email.length===0 ?
                            <label className={styles.error} >Field is required</label>:''
                        }
                   </div>
                   <div  className={styles.inputBox}>
                        <label className={styles.label} for ='subject' >subject</label>
                        <div className={styles.inputContainer} >
                            <input id='subject' placeholder='Subject' onChange={ (e) => setSubject(e.target.value) } />
                        </div>
                        {
                            error && subject.length===0?
                             <label className={styles.error} >Field is required</label>:''
                        }
                   </div>
                    <div  >
                        <textarea className={styles.textarea} placeholder='Leave a message' rows={8} ></textarea>
                    </div>
                    
                    <div className={styles.button} >
                    <button className={styles.btn} > SEND  </button>
                    </div>
                    
                </form>
            </div>
          </div>
        </>
    )
}

export default Contact;