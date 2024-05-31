import PageContent from '../PageContent';

const LandingPage4 = () => {
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
				nextPage='/LandingPage4'
				nextPageText='Go to About Page'
				images={images}
				imageProp={'/imagelink4.webp'}
				color='bg-[#E7E3E1]'
				buttonColor1='bg-[#978F89]'
				bgColor1='bg-[#978F89]'
				textCard1='text-[#7B7979]'
				numberColor1='text-[#96806C]'
				buttonColor2='bg-[#8B7E77]'
				bgColor2='bg-[#D6CFCB]'
				bgColor3='bg-[#615853]'
				subscribeBgColor1='bg-[#8B7E77]'
				FooterItemColor='bg-[#615853]'
			/>
		</div>
	);
};

export default LandingPage4;
