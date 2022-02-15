import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/components/Header.module.css';
import Button from './Button';

const Header = () => {
	const [click, setClick] = useState(true);
	const handleClick = () => setClick(!click);

	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={` ${styles.header__flex}`}>
					<div className={styles.logo__container}>
						<NavLink to='/'>
							<img
								src='/assets/icons/onlyLogo.svg'
								// src='/assets/LOGO.svg'
								alt='logo'
								className={styles.logo}
							/>
						</NavLink>
					</div>
					<nav className={`${styles.nav}`}>
						<ul
							className={
								click
									? `${styles.nav__list}`
									: `${styles.nav__list} ${styles.active}`
							}
						>
							<li className={styles.list__item}>
								<NavLink
									to='/'
									className={(navData) =>
										navData.isActive
											? `${styles.link__active} ${styles.nav__link}`
											: `${styles.nav__link}`
									}
								>
									Home
								</NavLink>
							</li>
							<li className={styles.list__item}>
								<NavLink
									to='/services'
									className={(navData) =>
										navData.isActive
											? `${styles.link__active} ${styles.nav__link}`
											: `${styles.nav__link}`
									}
								>
									Services
								</NavLink>
							</li>
							<li className={styles.list__item}>
								<NavLink
									to='/about'
									className={(navData) =>
										navData.isActive
											? `${styles.link__active} ${styles.nav__link}`
											: `${styles.nav__link}`
									}
								>
									About
								</NavLink>
							</li>
							<li className={styles.list__item}>
								<NavLink
									to='/contact'
									className={(navData) =>
										navData.isActive
											? `${styles.link__active} ${styles.nav__link}`
											: `${styles.nav__link}`
									}
								>
									Contact Us
								</NavLink>
							</li>
							{/* <Button btnType='btn__primary'>Talk to US</Button> */}
						</ul>
					</nav>
					<div className={styles.mobile__menuIcon}>
						<img
							src={
								click
									? '/assets/icons/icon-hamburger.svg'
									: '/assets/icons/icon-close.svg'
							}
							alt='menu icon'
							onClick={handleClick}
						/>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
