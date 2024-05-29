import ColoredSvg from '../components/ColoredSvg';
import PageContent from '../components/PageContent';

const ContactPage = () => {
	return (
		<div className='relative min-h-screen'>
			<ColoredSvg color='#00FF00' />
			<div className='relative z-10'>
				<PageContent
					title='Contact Page'
					nextPage='/services'
					nextPageText='Go to Services Page'
				/>
			</div>
		</div>
	);
};

export default ContactPage;
