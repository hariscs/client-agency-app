import styles from '../styles/components/Hero.module.css';
import Button from '../components/Button';

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className='container'>
				<div className={styles.hero__flex}>
					<h1 className={styles.hero__title}>
						First-class, cutting-edge solutions for your business
					</h1>
					<p className={styles.hero__subtitle}>
						We discover undiscovered markets and give our clients a competitive
						edge.
					</p>
					<Button btnType='btn__primaryOutline'>Talk to Us Today</Button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
