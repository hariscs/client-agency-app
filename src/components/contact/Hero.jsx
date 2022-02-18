import styles from '../../styles/components/contact/Hero.module.css';
import arrow from '../../assets/arrow.svg';

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className='container'>
				<div className={styles.hero__flex}>
					<h2 className={styles.hero__title}>
						Let us lead your next <span>market hunt</span>
					</h2>
					<p className={styles.hero__subtitle}>
						Our duty is to provide you with the best quality Amazon, eBay and
						Walmart services.We won’t stop until we have done exactly that.
						Reach out to us now....
					</p>
					<img src={arrow} alt='arrow' className={styles.arrow} />
				</div>
			</div>
		</section>
	);
};

export default Hero;
