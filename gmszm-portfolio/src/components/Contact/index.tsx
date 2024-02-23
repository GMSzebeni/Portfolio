import styles from './Contact.module.css'
import { useState } from 'react';
import MessageService from '@/services/MessageService';

const Contact = () => {
    const [message, setMessage] = useState({
        name: '',
        email: '',
        subject: '',
        messageText: '',
        honeypot: ''
    });

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setMessage({...message, [name]: value});
    }

    const resetFields = () => {
        setMessage({
            name: '',
            email: '',
            subject: '',
            messageText: '',
            honeypot: ''
        })
    }

    const sendMessage = (e: { preventDefault: () => void; }) => {
        if (message.honeypot === '' || message.honeypot === null) {
            MessageService.sendMessage(message)
            .then((response) => {
                resetFields();
                console.log(response.data);
            }).catch((error) => {
                console.log(error.response.data);
                console.log(error);
            });
        } else {
            console.log("You're a bot!")
        }
    }

    return(        
        <div className={styles.container}>
            <div className={styles.blobs}>
                <div className={styles.blobs_2}></div>
                <div className={styles.blobs_3}></div>
                <div className={styles.blobs_4}></div>
                <div className={styles.blobs_5}></div>
                <div className={styles.blobs_6}></div>
            </div>
            <div className={styles.form}>
                <div>
                <div className={styles.formSection}>
                    <label 
                        className={styles.label}
                        htmlFor="name">
                        Name</label>
                    <br />
                    <input 
                        className={styles.input} 
                        type="text" 
                        name="name" 
                        id="name" 
                        value={message.name}
                        onChange={(e) => handleChange(e)}
                        required={true} />
                </div>
                <br />
                <div className={styles.formSection}>
                    <label 
                        className={styles.label}
                        htmlFor="email">
                        Email</label>
                    <br />
                    <input 
                        className={styles.input} 
                        type="text" 
                        name="email" 
                        id="email" 
                        value={message.email}
                        onChange={(e) => handleChange(e)}
                        required={true} />
                </div>             
                <br />   
                <div className={styles.formSection}>
                    <label 
                        className={styles.label}
                        htmlFor="subject">
                        Subject</label>
                    <br />
                    <input 
                        className={styles.input} 
                        type="text" 
                        name="subject" 
                        id="subject" 
                        value={message.subject}
                        onChange={(e) => handleChange(e)} 
                        required={true} />
                </div>     
                <br />           
                <div className={styles.formSection}>
                    <label 
                        className={styles.label}
                        htmlFor="messageText">
                        Message</label>
                    <br />
                    <textarea 
                        className={`${styles.input} ${styles.messageArea}`}
                        name="messageText" 
                        id="messageText" 
                        maxLength={600}
                        cols={33} 
                        rows={10} 
                        placeholder='message (max 600 characters)' 
                        value={message.messageText}
                        onChange={(e) => handleChange(e)}
                        required={true} />
                </div>                
                <input 
                    type="hidden" 
                    name="honeypot" 
                    value={message.honeypot}
                    onChange={(e) => handleChange(e)}
                    id="honeypot" />
                    </div>
                <button 
                    className={styles.submit} 
                    type='submit'
                    onClick={sendMessage}>
                    Submit
                </button>
            </div>
        </div>
    )
}
export default Contact;