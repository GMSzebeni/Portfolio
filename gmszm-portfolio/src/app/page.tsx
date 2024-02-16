"use client"
import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';

export default function Home() {
	return (
		<div>
			<Navbar />
			<div className={styles.footer}>
				<div className={styles.spotifyContainer}>
					<div className={styles.spotifyIframeContainer}>
						<iframe
							className={styles.spotify}
							src="https://open.spotify.com/embed/track/1300POeOaj8qho30FRHjgf?utm_source=generator&theme=0" 
							width="100%" height="80"
							scrolling="no"
							allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
							loading="lazy">
						</iframe>
					</div>
				</div>
				<Footer />
			</div>
			
			<section
		  		id="about"
				className={styles.sectionBlackOnWhite}>
				<div 
					className={styles.sectionBlackOnWhiteH1}>
					<About />
				</div>
		  	</section>
		  	<section 
				id="projects" 
		  		className={styles.sectionWhiteOnBlack}>
				<h1 
					className={styles.sectionWhiteOnBlackH1}>
					<Projects />
				</h1>
			</section>
			<section
				id="contact"
				className={styles.sectionBlackOnWhite}>
				<h1 
					className={styles.sectionBlackOnWhiteH1}>
					<Contact />
				</h1>
			</section>
		</div>
	);
}
