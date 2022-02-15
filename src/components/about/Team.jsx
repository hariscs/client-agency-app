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
						<div className={styles.img__info}>
							<h3 className={styles.img__title}>Tayyab</h3>
							<p className={styles.img__subtitle}>CEO</p>
						</div>
					</div>
					<div className={styles.img__col}>
						<img src={img2} alt='team person' className={styles.img__mb} />
						<div className={styles.img__info}>
							<h3 className={styles.img__title}>Hamza</h3>
							<p className={styles.img__subtitle}>Product Manager</p>
						</div>
					</div>
					<div className={styles.img__col}>
						<img src={img3} alt='team person' className={styles.img__mt} />
						<div className={styles.img__info}>
							<h3 className={styles.img__title}>Waqas</h3>
							<p className={styles.img__subtitle}>Consultant</p>
						</div>
					</div>
					<div className={styles.img__col}>
						<img src={img4} alt='team person' className={styles.img__mb} />
						<div className={styles.img__info}>
							<h3 className={styles.img__title}>Usama</h3>
							<p className={styles.img__subtitle}>Content Writter</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;
