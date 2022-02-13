import styles from '../../styles/components/about/Contact.module.css';
import img from '../../assets/hero-bg.jpg';
import Button from './Button';

const Contact = () => {
	return (
		<section className={styles.contact}>
			<div className='container'>
				<h2 className={styles.contact__title}>Talk to us</h2>
				<div className={styles.contact__info}>
					<div className={styles.contact__img}>
						<img src={img} alt='team discussing' />
					</div>
					<div className={styles.contact__details}>
						<h3 className={styles.contact__detailsTitle}>
							We rely on you as much as you rely on us. Let’s build something
							great together.
						</h3>
						<div className={styles.contact__btns}>
							<Button text='Give us a call' bg='#1e42a1' clr='#fff' />
							<Button text='Email Us' clr='#1e42a1' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
