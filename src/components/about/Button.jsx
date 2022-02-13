import styles from '../../styles/components/about/Button.module.css';

const Button = ({ bg, clr, text }) => {
	return (
		<button className={styles.btn} style={{ background: bg, color: clr }}>
			{text}
		</button>
	);
};

export default Button;
