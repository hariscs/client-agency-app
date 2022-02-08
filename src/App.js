import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/services' element={<Services />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
