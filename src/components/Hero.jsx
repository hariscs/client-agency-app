import styles from '../styles/components/Hero.module.css';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className='container'>
				<motion.div
					className={styles.hero__flex}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					transition={{ duration: 1 }}
					variants={{
						visible: { opacity: 1, translateY: 0 },
						hidden: { opacity: 0, translateY: -50 },
					}}
				>
					<h1 className={styles.hero__title}>
						First-class, cutting-edge solutions for your business
					</h1>
					<p className={styles.hero__subtitle}>
						We discover undiscovered markets and give our clients a competitive
						edge.
					</p>
					<Button btnType='btn__white'>Talk to Us Today</Button>
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;
