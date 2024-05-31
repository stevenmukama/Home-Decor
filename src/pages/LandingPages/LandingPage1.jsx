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
				imageProp={'/homeItem1Img.webp'}
				color='bg-[#1F2127]'
				buttonColor1='bg-[#DF8C5D]'
				bgColor1='bg-[#1F2127]'
				textCard1='text-[#7B7979]'
				numberColor1='text-[#CF6E37]'
				buttonColor2='bg-[#43535B]'
				bgColor2='bg-[#43535B]'
				bgColor3='bg-[#CF6E37]'
				subscribeBgColor1='bg-[#43535B]'
			/>
		</div>
	);
};

export default LandingPage1;
