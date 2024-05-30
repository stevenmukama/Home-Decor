import PageContent from '../components/PageContent';

const ServicesPage = () => {
	return (
		<div className='relative min-h-screen'>
			<div className='relative z-10'>
				<PageContent
					title='Services Page'
					nextPage='/'
					nextPageText='Go to Home Page'
				/>
			</div>
		</div>
	);
};

export default ServicesPage;
