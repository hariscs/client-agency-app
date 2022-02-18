import styles from '../../styles/components/contact/Hero.module.css';
import arrow from '../../assets/arrow.svg';
import { motion } from 'framer-motion';

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
						Let us lead your next <span>market hunt</span>
					</h2>
					<p className={styles.hero__subtitle}>
						Our duty is to provide you with the best quality Amazon, eBay and
						Walmart services.We won’t stop until we have done exactly that.
						Reach out to us now....
					</p>
					<motion.div
						initial={{ translateY: 0 }}
						animate={{ translateY: 50 }}
						transition={{
							duration: 1,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					>
						<img src={arrow} alt='arrow' className={styles.arrow} />
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
