import ColoredSvg from '../components/ColoredSvg';
import PageContent from '../components/PageContent';

const ContactPage = () => {
	return (
		<div className='relative min-h-screen'>
			<ColoredSvg color='#00FF00' />
			<div className='relative z-10'>
				<PageContent
					title='Contact Page'
					nextPage='/listings'
					nextPageText='Go to listings'
				/>
			</div>
		</div>
	);
};

export default ContactPage;
