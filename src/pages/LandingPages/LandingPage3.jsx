import PageContent from '../PageContent';

const LandingPage3 = () => {
	const images = [
		{ src: '/imagelink1.webp', link: '/LandingPage1' },
		{ src: '/imagelink2.webp', link: '/LandingPage2' },
		{ src: '/imagelink3.webp', link: '/LandingPage3' },
		{ src: '/imagelink4.webp', link: '/LandingPage4' },
	];

	return (
		<div className=''>
			<PageContent
				headerTextColor='text-[#2A1F1E]'
				title='Chroma Decor'
				item1='Vibrant homes for every vision'
				item2='Your ideal space is only a click away!'
				nextPage='/LandingPage3'
				nextPageText='Go to About Page'
				images={images}
				imageProp={'/ItemImg3.webp'}
				color='bg-[#D0C5B8]'
				buttonColor1='bg-[#95775C]'
				bgColor1='bg-[#D0C5B8]'
				textCard1='text-[#8B7E77]'
				numberColor1='text-[#8B7E77]'
				buttonColor2='bg-[#927564]'
				bgColor2='bg-[#D0C5B8]'
				bgColor3='bg-[#D0C5B8]'
				subscribeBgColor1='bg-[#927564]'
				FooterItemColor='bg-[#927564]'
			/>
		</div>
	);
};

export default LandingPage3;
