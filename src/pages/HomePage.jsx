import PageContent from '../components/PageContent';
import ColoredSvg from '../components/ColoredSvg';

const HomePage = () => {
	return (
		<div className='relative min-h-screen'>
			<ColoredSvg color='#1F2127' />
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
