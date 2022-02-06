import styles from '../styles/components/Button.module.css';

const Button = ({ text }) => {
	return <button className={styles.button}>{text}</button>;
};

export default Button;
