import styles from './Projects.module.css'
import { SetStateAction, useState } from 'react';

const Projects = () => {
    const [rotateStates, setRotateStates] = useState(Array(2).fill(false));
    function handleRotate(index: number): void {
        const newRotateStates = rotateStates.map((state, i) => i === index ? !state : false);
        setRotateStates(newRotateStates);
    }

    return(        
        <div className={styles.container}>
            <div className={styles.blobs_1}></div>
            <div className={styles.blobs_2}></div>
            <div className={styles.blobs_3}></div>
            <div className={styles.blobs_4}></div>
            <div className={styles.blobs_5}></div>
            <div className={styles.blobs_6}></div>
            <div className={styles.blobs_7}></div>
            <div className={styles.sectionGrids}>
                <section 
                    className={styles.section} 
                    onClick={(): void => handleRotate(0)}>
                    <div className={`${styles.frontTile} ${rotateStates[0] ? 'rotateY-0.5' : 'rotateY-0'}`}>
                        <img 
                            className= {styles.img} 
                            src="img/hta_logo_v3.png" 
                            alt="hta app logo" />
                    </div>
                    <div className={`${styles.backTile} ${rotateStates[0] ? 'rotateY-0' : 'rotateY-0.5'}`}>
                        <h2 className={styles.h2}>Health Tracking Application</h2>
                        <h3 className={styles.h3}>Technologies</h3>
                        <p className={styles.p}>Languages: Java, JavaScript</p>
                        <p className={styles.p}>Back-end: SpringBoot</p>
                        <p className={styles.p}>Front-end: ReactJS, Next.JS, TailwindCSS, Axios, Chart.js</p>
                        <p className={styles.p}>Security: Spring Security 6</p>
                        <p className={styles.p}>Developing framework: IntelliJ Idea, Visual Studio Code</p>
                        <p className={styles.p}>Workflow: Jira</p>
                        <p className={styles.p}>CI: Github Actions</p>
                        <p className={styles.p}>Database: MySql</p>
                        <p className={styles.p}>Other: Postman</p>
                        <h3 className={styles.h3}>Description</h3>
                        <p className={styles.p}>
                            A health tracking application that allows the user to add basic health info like weight, heart rate and blood pressure. 
                            The user has to register, than can login any time. A JWT token is generated and saved in an HTTPOnly cookie to keep the 
                            user logged in. The user can create goals and set notifications to be reminded to take medication or provide new 
                            information about his/her/their health info. The user can upload files too to accompany the health data. The user can 
                            register his/her/their calorie intake and daily meal and get reports with visualization. There are a few other reports 
                            visualized on the UI and a lot more that can be generated using the API. Groups can be created based on location and 
                            similarities - can be accessed via the API. There is built in logging of events. Development is supported with unit 
                            tests and CI. 
                        </p>
                        <a 
                            className={styles.a} 
                            href="https://github.com/GMSzebeni/Health-Tracking-Application"
                            target="_blank">
                            GitHub link
                        </a>
                    </div>
                </section>
                <section 
                    className={styles.section} 
                    onClick={(): void => handleRotate(1)}>
                    <div className={`${styles.frontTile} ${rotateStates[1] ? 'rotateY-0.5' : 'rotateY-0'}`}>
                        <img 
                            className= {styles.img} 
                            src="img/brewdog.jpg"
                            alt="brewdog logo" />
                    </div>
                    <div className={`${styles.backTile} ${rotateStates[1] ? 'rotateY-0' : 'rotateY-0.5'}`}>
                        <h2 className={styles.h2}>Listing Brewdog beers with pagination</h2>
                        <h3 className={styles.h3}>Technologies</h3>
                        <p className={styles.p}>Languages: TypeScript</p>
                        <p className={styles.p}>Back-end: Brew Dog API</p>
                        <p className={styles.p}>Front-end: Angular, Less CSS</p>
                        <p className={styles.p}>Developing framework: Visual Studio Code</p>
                        <h3 className={styles.h3}>Description</h3>
                        <p className={styles.p}>
                            This is an app that lists all BrewDog beers. The beers are shown on tiles and they turn on click to show the 
                            description. As there are many beers, pagination is used to allow the user to swipe through the catalog. This is 
                            an Angular practice project.
                        </p>
                        <a 
                            className={styles.a} 
                            href="https://github.com/GMSzebeni/brepi-gmszm"
                            target="_blank">
                            GitHub link
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Projects;