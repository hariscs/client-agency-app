import styles from '../../styles/components/services/MarketSetup.module.css';
import SetupCard from './SetupCard';
import { setupCard } from '../../assets/data';
import { motion } from 'framer-motion';

const MarketSetup = () => {
	return (
		<section className={styles.marketSetup}>
			<div className='container'>
				<h2 className={styles.marketSetup__title}>
					Get your market set up in three easy steps
				</h2>
				<div className={styles.marketSetup__cards}>
					{setupCard.map((data, i) => {
						const { title, subtitle, num, id } = data;
						return (
							<motion.div
								initial='hidden'
								whileInView='visible'
								viewport={{ once: true }}
								transition={{ duration: 0.3, delay: i * 0.3 }}
								variants={{
									visible: { opacity: 1, translateX: 0, translateY: 0 },
									hidden: { opacity: 0, translateX: -50, translateY: -50 },
								}}
							>
								<SetupCard
									num={num}
									title={title}
									subtitle={subtitle}
									key={id}
								/>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default MarketSetup;
