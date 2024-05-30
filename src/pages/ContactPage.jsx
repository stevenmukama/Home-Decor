import PageContent from '../components/PageContent';

const ContactPage = () => {
	return (
		<div className='relative min-h-screen'>
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
