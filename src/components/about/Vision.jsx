import styles from '../../styles/components/about/Vision.module.css';

const Vision = () => {
	return (
		<section className={styles.vision}>
			<div className='container'>
				<div className={styles.vision__grid}>
					<div className={styles.col__vision}>
						<h2 className={styles.vision__title}>Our Vision</h2>
						<p className={styles.vision__subtitle}>
							We intend to give the opportunities to our clients to explore
							unique and highly profitable market places around the globe with
							the services they would forever admire.
						</p>
					</div>
					<div className={styles.col__mission}>
						<h2 className={styles.vision__title}>Our Mission</h2>
						<p className={styles.vision__subtitle}>
							We serve with a mission to provide excellence and eminence in true
							meanings.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Vision;
