import PageContent from '../components/PageContent';

const AboutPage = () => {
	const images = [
		{ src: '/imagelink1.webp', link: '/about' },
		{ src: '/imagelink2.webp', link: '/contactUs' },
		{ src: '/imagelink3.webp', link: '/product' },
		{ src: '/imagelink4.webp', link: '/listings' },
	];

	return (
		<div className=''>
			<PageContent
				title='Chroma Decor'
				item1='Vibrant homes for every vision'
				item2='Your ideal space is only a click away!'
				nextPage='/about'
				nextPageText='Go to About Page'
				images={images}
				imageProp={'/homeItem1Img.webp'}
				color='bg-[#EFD3B9]'
			/>
		</div>
	);
};

export default AboutPage;
