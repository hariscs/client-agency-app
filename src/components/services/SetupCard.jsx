import styles from '../../styles/components/services/SetupCard.module.css';

const SetupCard = ({ num, title, subtitle }) => {
	return (
		<div className={styles.card}>
			<div className={styles.card__num}>{num}</div>
			<div className={styles.card__info}>
				<h3 className={styles.card__title}>{title}</h3>
				<p className={styles.card__subtitle}>{subtitle}</p>
			</div>
		</div>
	);
};

export default SetupCard;
