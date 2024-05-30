import PageContent from '../components/PageContent';

const HomePage = () => {
	return (
		<div className=''>
			<div className=''>
				<PageContent
					title='Chroma Decor'
					item1='Vibrant homes for every vision'
					imageProp='/homeItem1Img.png'
					nextPage='/about'
					nextPageText='Go to About Page'
					color='bg-[#1F2127]'
				/>
			</div>
		</div>
	);
};

export default HomePage;
