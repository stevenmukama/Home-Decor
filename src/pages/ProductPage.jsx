import PageContent from '../components/PageContent';

const ProductPage = () => {
	return (
		<div className='relative min-h-screen'>
			<div className='relative z-10'>
				<PageContent
					title='Product Page'
					nextPage='/listings'
					nextPageText='Go to listings'
				/>
			</div>
		</div>
	);
};

export default ProductPage;
