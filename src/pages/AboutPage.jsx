import PageContent from '../components/PageContent';

const AboutPage = () => {
	return (
		<div className=''>
			<div className=''>
				<PageContent
					title='Chroma Decor'
					item1='this is the about page'
					imageProp='/homeItem1Img.png'
					nextPage='/about'
					nextPageText='Go to About Page'
				/>
			</div>
		</div>
	);
};

export default AboutPage;
