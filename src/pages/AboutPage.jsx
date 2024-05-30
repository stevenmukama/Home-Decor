import PageContent from '../components/PageContent';

const AboutPage = () => {
	return (
		<div className='relative min-h-screen'>
			<div className='relative z-10'>
				<PageContent
					title='About Page'
					nextPage='/contact'
					nextPageText='Go to Contact Page'
				/>
			</div>
		</div>
	);
};

export default AboutPage;
