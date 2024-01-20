import styles from './About.module.css'


const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inits}>
                <h1 className={styles.initsH1}>gmszm</h1>
                <div className={styles.blobs_1}></div>
                <div className={styles.blobs_2}></div>
                <div className={styles.blobs_3}></div>
                <div className={styles.blobs_4}></div>
                <div className={styles.blobs_5}></div>
                <div className={styles.blobs_6}></div>
                <div className={styles.blobs_7}></div>
            </div>
            <div className={styles.bio}>
                <p>Hi! I'm Gabriella and I am a Java Backend Developer. 
                    I am passionate about coding. 
                    I love to understand how things work and how they are related to each other. 
                    I created this page to better show my work.
                    Currently I am open for hire. Contact me if you liked what you saw and would like to work with me.
                </p>
            </div>
        </div>
    )
}
export default About;