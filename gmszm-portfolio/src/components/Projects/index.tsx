import styles from './Projects.module.css'

const Projects = () => {
    return(        
        <div id="wrapper" className={styles.y}>
	        <section className={styles.section}>
		        <div className={styles.frontTile}>
                    <div>
                        <img className= {styles.img} src="img/hta_logo_v3.png" alt="hta app logo" />
		            </div>
                </div>
		        <div className={styles.backTile}>
                    <p className={styles.p}>Enroll in medical, vision, and dental insurance</p>
		        </div>
	        </section>
	        <section className={styles.section}>
		        <div className={styles.frontTile}>
			        <img className= {styles.img} src="img/brewdog.jpg" alt="brewdog logo" />
		        </div>
		        <div className={styles.backTile}>
                    <p className={styles.p}>Get paid holidays, vacation, sick, and personal days</p>
		        </div>
	        </section>
        </div>
    )
}
export default Projects;