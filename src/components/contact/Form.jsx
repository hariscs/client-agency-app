import styles from '../../styles/components/contact/Form.module.css';

const Form = () => {
	return (
		<div className={styles.form}>
			<div className='container'>
				<div className={styles.form__flex}>
					<div className={styles.form__info}>
						<h2 className={styles.form__title}>Get in touch </h2>
						<p className={styles.form__subtitle}>
							We will get back to you as soon as possible.
						</p>
					</div>

					<form
						className={styles.inputForm}
						action='https://formsubmit.co/harisshahcs@gmail.com'
						method='POST'
					>
						<div className={styles.form__inputs}>
							<label htmlFor='name'>Name</label>
							<input
								type='text'
								id='name'
								name='name'
								required
								placeholder='Name'
							/>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								name='email'
								id='email'
								required
								placeholder='example@email.com'
							/>
							<label htmlFor='message'>Message</label>
							<textarea
								name='message'
								id='message'
								placeholder='Message '
							></textarea>
							<input type='hidden' name='_captcha' value='false' />
						</div>
						<button type='submit'>Send</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Form;
