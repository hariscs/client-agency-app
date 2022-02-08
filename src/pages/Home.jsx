import Clients from '../components/Clients';
import Consult from '../components/Consult';
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
			<Consult />
		</>
	);
};

export default Home;
