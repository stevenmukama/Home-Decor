import PageContent from '../components/PageContent';

const HomePage = () => {
	return (
		<div className='relative min-h-screen'>
			<div className='relative z-10'>
				<PageContent
					title='Home Page'
					nextPage='/about'
					nextPageText='Go to About Page'
				/>
			</div>
		</div>
	);
};

export default HomePage;
