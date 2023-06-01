import {React, useState} from 'react';
import styles from './contact.module.css';
//import both cloud firestore and firebase
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbmsqyt_yWd5-Gxj4g6myHLWNL3Lupfho",
  authDomain: "raburu-6acee.firebaseapp.com",
  projectId: "raburu-6acee",
  storageBucket: "raburu-6acee.appspot.com",
  messagingSenderId: "199246756310",
  appId: "1:199246756310:web:c39898e80c15da46240c77"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


const Contact = () => {
//This is a functional component that initializes a state using the useState hook. 
//The state is an object that holds the values of the name, email, subject, and message fields of a contact form
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    const [error, setError] = useState(false);
    const [ successMessage, setSuccessMessage ] = useState('')

//This function submits the form when the button is clicked    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log("Submit button clicked");
        if (formData.name ==='' || formData.email === '' || formData.subject === '') {
            setError(!false); 
        }

        else{
            try {
             const docRef = await addDoc(collection(db, "forms"), {
                 name: formData.name,
                 email: formData.email,
                 subject: formData.subject,
                 message: formData.message,
           });

           console.log("Document written with ID: ", docRef.id);

            // Clear the form fields after successful submission
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            // Set success message
        setSuccessMessage('Message sent successfully!');
        
           } catch (e) {
           console.error("Error adding document: ", e);
           }
    }
    
    };
    return(
        <>
          <div className={styles.body} >
          <h2 className={styles.h2} >Connect with me</h2>
          <h3 className={styles.h3} >Feel free to get in touch with me</h3>
          
            <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={handleSubmit}  >


                   <div className={styles.inputBox}>
                        <label className={styles.label} htmlFor='username' >Username</label>
                        <div className={styles.inputContainer} >
                            <input 
                              id='username'
                              placeholder='Username'
                              value={formData.name} 
                              type='text'
                              onChange = { (e) => setFormData( { ...formData, name : e.target.value} ) }  
                            />       
                        </div>
                        {
                            error && formData.name==='' ?
                             <label className={styles.error} >Field is required</label>:''
                        }
                   </div>


                   <div  className={styles.inputBox}>
                        <label className={styles.label} htmlFor='email' >email</label>
                        <div className={styles.inputContainer} >
                        <input 
                              placeholder='email'
                              value={formData.email} 
                              type='email'
                              onChange = { (e) => setFormData( { ...formData, email : e.target.value} ) }  
                              />
                        </div>
                        {
                            error && formData.email==='' ?
                            <label className={styles.error} >Field is required</label>:''
                        }
                   </div>



                   <div  className={styles.inputBox}>
                        <label className={styles.label} htmlFor ='subject' >subject</label>
                        <div className={styles.inputContainer} >
                            <input 
                             id='subject'
                             placeholder='Subject' 
                             onChange = { (e) => setFormData( { ...formData, subject : e.target.value} ) }
                             value={formData.subject}
                             type='text'
                            />
                        </div>
                        {
                            error && formData.subject===''?
                             <label className={styles.error} >Field is required</label>:''
                        }
                   </div>

                    <div  >
                        <textarea 
                        className={styles.textarea} 
                        placeholder='Leave a message' 
                        rows={8} 
                        onChange = { (e) => setFormData( { ...formData, message : e.target.value} ) }
                        value={formData.message} 
                        type='text'
                        />
                    </div>
                    
                    {successMessage && <p className={styles.success} >{successMessage}</p>}
                    <button className={styles.btn} > SEND  </button>
                    
                    
                </form>
            </div>
          </div>
        </>
    )
}

export default Contact;