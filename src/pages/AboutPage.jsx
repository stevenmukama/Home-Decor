import PageContent from '../components/PageContent';
import ColoredSvg from '../components/ColoredSvg';

const AboutPage = () => {
	return (
		<div className='relative min-h-screen'>
			<ColoredSvg color='#FF0000' />
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
