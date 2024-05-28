import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import HomePage from './components/HomePage';

function App() {
	return (
		<Router>
			<div className='relative min-h-screen'>
				<Suspense fallback={<LoadingScreen />}>
					<Routes>
						<Route
							path='/'
							element={<HomePage />}
						/>
					</Routes>
				</Suspense>
			</div>
		</Router>
	);
}
export default App;
