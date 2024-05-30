import PageContent from '../components/PageContent';

const ProductPage = () => {
	return (
		<div className=''>
			<div className=''>
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
