import Button from '../components/Button';
import styles from '../styles/components/Consult.module.css';

const Consult = () => {
	return (
		<section className={styles.consultSection}>
			<div className='container'>
				<div className={styles.card__container}>
					<div className={styles.card}>
						<h2 className={styles.card__text}>
							It doesnt matter where you are in the world, we are ready to talk.
						</h2>
						<Button btnType='btn__white'>Get free Consultation</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Consult;
