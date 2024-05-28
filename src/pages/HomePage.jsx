import PageContent from '../components/PageContent';

function HomePage() {
	return (
		<>
			<h1>HomePage</h1>

			<PageContent
				className='bg-blue-500'
				title='Home Page'
				color='bg-blue-500'
				nextPage='/about'
				nextPageText='Go to About Page'
			/>
		</>
	);
}

export default HomePage;
