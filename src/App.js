import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import NotFound from './pages/NotFound';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='*' element={<NotFound />} />
				<Route path='/services' element={<Services />} />
				<Route path='/about' element={<About />} />
				<Route path='/' element={<Home />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
