import React from 'react';
import Header from '../components/Header';

const Home = () => {
	return (
		<>
			<Header />
			{/* hero section */}
			<div className='hero'>
				<div className='container'>
					<div className='hero__flex'>
						<h1 className='hero__title'>
							First-class, cutting-edge solutions for your business
						</h1>
						<p className='hero__subtitle'>
							We discover undiscovered markets and give our clients a
							competitive edge.
						</p>
						<button>Talk to us</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
