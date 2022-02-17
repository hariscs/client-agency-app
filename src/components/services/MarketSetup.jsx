import styles from '../../styles/components/services/MarketSetup.module.css';
import SetupCard from './SetupCard';
import { setupCard } from '../../assets/data';

const MarketSetup = () => {
	return (
		<section className={styles.marketSetup}>
			<div className='container'>
				<h2 className={styles.marketSetup__title}>
					Get your market set up in three easy steps
				</h2>
				<div className={styles.marketSetup__cards}>
					{setupCard.map((data) => {
						const { title, subtitle, num, id } = data;
						return (
							<SetupCard num={num} title={title} subtitle={subtitle} key={id} />
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default MarketSetup;
