import PageContent from '../PageContent';

const LandingPage2 = () => {
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
				imageProp={'/aboutItemImg.webp'}
				color='bg-[#EFD3B9]'
				buttonColor1='bg-[#DF8C5D]'
				bgColor1='bg-[#EFD3B9]'
				textCard1='text-[#7B7979]'
				numberColor1='text-[#C59466]'
				buttonColor2='bg-[#C35D33]'
				bgColor2='bg-[#EFD3B9]'
				bgColor3='bg-[#CF6E37]'
				subscribeBgColor1='bg-[#C35D33]'
				FooterItemColor='bg-[#C35D33]'
			/>
		</div>
	);
};

export default LandingPage2;
