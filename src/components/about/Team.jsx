import styles from '../../styles/components/about/Team.module.css';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';

const Team = () => {
	return (
		<section className={styles.team}>
			<div className='container'>
				<div className={styles.images__grid}>
					<div className={styles.img__col}>
						<img src={img1} alt='team person' className={styles.img__mt} />
					</div>
					<div className={styles.img__col}>
						<img src={img2} alt='team person' className={styles.img__mb} />
					</div>
					<div className={styles.img__col}>
						<img src={img3} alt='team person' className={styles.img__mt} />
					</div>
					<div className={styles.img__col}>
						<img src={img4} alt='team person' className={styles.img__mb} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;
