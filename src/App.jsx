import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import ProductListings from './pages/ProductListings';
import NavBar from './components/NavBar';
import ProductPage from './pages/ProductPage';

const App = () => {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='/about'
					element={<AboutPage />}
				/>
				<Route
					path='/about'
					element={<AboutPage />}
				/>
				<Route
					path='/contactUs'
					element={<ContactPage />}
				/>
				<Route
					path='/product'
					element={<ProductPage />}
				/>
				<Route
					path='/services'
					element={<ServicesPage />}
				/>
				<Route
					path='/listings'
					element={<ProductListings />}
				/>
			</Routes>
		</Router>
	);
};

export default App;
