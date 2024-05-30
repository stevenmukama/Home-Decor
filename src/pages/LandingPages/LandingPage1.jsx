import PageContent from '../PageContent';

const LandingPage1 = () => {
	const images = [
		{ src: '/imagelink1.webp', link: '/LandingPage1' },
		{ src: '/imagelink2.webp', link: '/LandingPage2' },
		{ src: '/imagelink3.webp', link: '/LandingPage3' },
		{ src: '/imagelink4.webp', link: '/LandingPage4' },
	];

	return (
		<div className=''>
			<PageContent
				title='Chroma Decor'
				item1='Vibrant homes for every vision'
				item2='Your ideal space is only a click away!'
				nextPage='/'
				nextPageText='Go to About Page'
				images={images}
				imageProp={'/aboutItemImg.webp'}
				color='bg-[#D0C5B8]'
			/>
		</div>
	);
};

export default LandingPage1;
