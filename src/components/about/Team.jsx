import styles from '../../styles/components/about/Team.module.css';
import { images } from '../../assets/data';

const Team = () => {
	return (
		<section className={styles.team}>
			<div className='container'>
				{/* {images.map((img, index) => (
					<img src={img} alt='team' key={index} />
				))} */}
				team
			</div>
		</section>
	);
};

export default Team;
