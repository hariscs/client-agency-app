import styles from '../../styles/components/services/Hero.module.css';

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className='container'>
				<div className={styles.hero__flex}>
					<h2 className={styles.hero__title}>
						What we do for your <span>business</span>
					</h2>
					<p className={styles.hero__subtitle}>
						We lay the foundation for you to explore global markets and take
						your business international.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
