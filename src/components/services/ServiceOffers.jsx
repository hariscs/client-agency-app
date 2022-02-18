import styles from '../../styles/components/services/ServiceOffers.module.css';
import { offerCard } from '../../assets/data';
import OfferCard from './OfferCard';
import { motion } from 'framer-motion';

const ServiceOffers = () => {
	return (
		<section className={styles.offers}>
			<div className='container'>
				<h2 className={styles.offers__title}>
					We are your Amazon, eBay and Walmart partners
				</h2>

				<div className={styles.offers__cards}>
					{offerCard.map((data, i) => {
						const {
							id,
							title,
							item1,
							item2,
							item3,
							item4,
							item5,
							item6,
							item7,
							item8,
							item9,
						} = data;

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
								<OfferCard
									title={title}
									key={id}
									item1={item1}
									item2={item2}
									item3={item3}
									item4={item4}
									item5={item5}
									item6={item6}
									item7={item7}
									item8={item8}
									item9={item9}
								/>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ServiceOffers;
