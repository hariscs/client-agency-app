import styles from '../styles/components/TrackRecord.module.css';
import Card from './Card';
import { cardData } from '../assets/data';

const TrackRecord = () => {
	return (
		<section className={styles.trackSection}>
			<div className='container'>
				<div className='trackSection__info'>
					<h2 className={styles.trackSection__title}>
						We have the track-record
					</h2>
					<p className={styles.trackSection__subtitle}>
						Finding the right people to cater to the growing needs of your
						business can be difficult. However, with us you dont have to worry
						about all that.
					</p>
				</div>
				<div className={styles.trackSection__cards}>
					{cardData.map((data) => {
						const { id, title, subtitle, icon, bgClr } = data;
						return (
							<Card
								key={id}
								title={title}
								subtitle={subtitle}
								icon={icon}
								bgClr={bgClr}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default TrackRecord;
