import styles from '../../styles/components/services/ServiceOffers.module.css';
import { offerCard } from '../../assets/data';
import OfferCard from './OfferCard';

const ServiceOffers = () => {
	return (
		<section className={styles.offers}>
			<div className='container'>
				<h2 className={styles.offers__title}>
					We are your Amazon, eBay and Walmart partners
				</h2>

				<div className={styles.offers__cards}>
					{offerCard.map((data) => {
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
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ServiceOffers;
