const Button = ({ btnType, children, bg, clr }) => {
	return (
		<button className={`btn ${btnType}`} style={{ background: bg, color: clr }}>
			{children}
		</button>
	);
};

export default Button;
