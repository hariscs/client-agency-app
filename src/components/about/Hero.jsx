import styles from '../../styles/components/about/Hero.module.css';
import { motion } from 'framer-motion';
const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className='container'>
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					transition={{ duration: 1 }}
					variants={{
						visible: { opacity: 1, translateY: 0 },
						hidden: { opacity: 0, translateY: -50 },
					}}
				>
					<h2 className={styles.hero__title}>Who We Are</h2>
					<p className={styles.hero__subtitle}>
						We an eCommerce company with long experience in creating solutions
						and providing services to give our customers a competitive edge. We
						are global uplift your business to the next level including web
						design, exploration to powerful undiscovered markets and digitial
						marketing.
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
