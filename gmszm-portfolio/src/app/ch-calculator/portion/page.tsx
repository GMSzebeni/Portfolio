'use client'
import Portion from '@/components/ChCalculator/Portion';
import styles from '/src/app/page.module.css'

export default function PortionPage() {
	return (
		<div className={styles.portion}>
			<Portion />
		</div>
	);
}