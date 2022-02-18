import { motion } from 'framer-motion';
import styles from '../../styles/components/services/Hero.module.css';

const Hero = () => {
	return (
		<section className={styles.hero}>
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
					<h2 className={styles.hero__title}>
						What we do for your <span>business</span>
					</h2>
					<p className={styles.hero__subtitle}>
						We lay the foundation for you to explore global markets and take
						your business international.
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
