import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductListings from './pages/ProductListings';
import NavBar from './components/navBar';
import ProductPage from './pages/ProductPage';
import LandingPage1 from './pages/LandingPages/LandingPage1';
import LandingPage2 from './pages/LandingPages/LandingPage2';
import LandingPage3 from './pages/LandingPages/LandingPage3';
import LandingPage4 from './pages/LandingPages/LandingPage4';

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
					path='/contactUs'
					element={<ContactPage />}
				/>
				<Route
					path='/product'
					element={<ProductPage />}
				/>

				<Route
					path='/listings'
					element={<ProductListings />}
				/>
				<Route
					path='/LandingPage1'
					element={<LandingPage1 />}
				/>
				<Route
					path='/LandingPage2'
					element={<LandingPage2 />}
				/>
				<Route
					path='/LandingPage3'
					element={<LandingPage3 />}
				/>
				<Route
					path='/LandingPage4'
					element={<LandingPage4 />}
				/>
			</Routes>
		</Router>
	);
};

export default App;
