import styles from '../styles/components/Clients.module.css';
import ClientCard from './ClientCard';
import { clientData } from '../assets/data';

const Clients = () => {
	return (
		<section className={styles.clientsSection}>
			<div className='container'>
				<div className={styles.clients__flex}>
					<div className={styles.clientsInfo}>
						<h1 className={styles.clients__title}>What our clients say</h1>
						<p className={styles.clients__subtitle}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
							dignissim id eu magna eu.
						</p>
					</div>
				</div>
			</div>
			<div className='slider'>
				<div className='innerSlider'>
					{clientData.map((data) => {
						const { id, name, text, img, address } = data;
						return (
							<ClientCard
								key={id}
								name={name}
								text={text}
								img={img}
								address={address}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Clients;
