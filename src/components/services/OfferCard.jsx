import styles from '../../styles/components/services/OfferCard.module.css';
import Button from '../Button';

const OfferCard = ({
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
}) => {
	return (
		<div className={styles.card}>
			<h3 className={styles.card__title}>{title}</h3>
			<div className={styles.items}>
				<p className={styles.item}>{item1}</p>
				<p className={styles.item}>{item2}</p>
				<p className={styles.item}>{item3}</p>
				<p className={styles.item}>{item4}</p>
				<p className={styles.item}>{item5}</p>
				<p className={styles.item}>{item6}</p>
				<p className={styles.item}>{item7}</p>
				<p className={styles.item}>{item8}</p>
				<p className={styles.item}>{item9}</p>
			</div>
			{/* <a href='/' className={styles.card__btn}>
				Make an Offer
			</a> */}
			<Button btnType='btn__primary'>Make an offer</Button>
		</div>
	);
};

export default OfferCard;
