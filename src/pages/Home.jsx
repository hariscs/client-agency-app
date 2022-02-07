import Clients from '../components/Clients';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import TrackRecord from '../components/TrackRecord';

const Home = () => {
	return (
		<>
			<Hero />
			<TrackRecord />
			<Stats />
			<Clients />
		</>
	);
};

export default Home;
