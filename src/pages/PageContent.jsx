import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const cards = [
	{ title: 'Clients', content: '10+' },
	{ title: 'Products', content: '10+' },
	{ title: 'XP Years', content: '1' },
];
const PageContent = ({
	title,
	item1,
	imageProp,
	color,
	item2,
	images,
	alt,
	buttonColor1,
	bgColor1,
}) => {
	return (
		<div className='relative overflow-hidden top-20'>
			<div className={` gap-10 py-8 ${color} px-8`}>
				<h1 className='mb-4 text-[90px] font-bold text-white'>{title}</h1>
				<p className='mb-4 text-xl text-white'>{item1}</p>
				<p className='mb-4 text-xl text-white'>{item2}</p>
			</div>
			<div className='absolute top-[-81px] right-0 z-40 px-8'>
				<img
					src={imageProp}
					alt={alt}
					className='object-cover object-center w-auto h-[718.2px] rounded-full'
				/>
			</div>

			<div className='flex gap-4'>
				<div>
					<h1 className='px-8 mt-4 text-3xl font-bold text-center '>
						CHANGE COLOR THEME
					</h1>
					<div className='flex gap-4 px-8 mt-8 '>
						{images?.map((image, index) => (
							<Link
								key={index}
								to={image.link}
								className='cursor-pointer'>
								<img
									src={image.src}
									alt={`Image ${index + 1}`}
									className='object-cover object-center w-48 h-48 '
								/>
							</Link>
						))}
					</div>
					<button
						className={`px-8 py-4 block mx-auto mt-8 ${buttonColor1}  text-white rounded w-fit`}>
						Get Started
					</button>
				</div>
				<div
					className={`py-10 w-1/2 ${bgColor1}  rounded-tl-full rounded-tr-full relative right-[-110px]`}></div>
			</div>
			<h1 className='mt-8 mb-8 text-5xl font-bold text-center'>
				{' '}
				About Us
			</h1>
			<div className='flex justify-between px-8 mt-10'>
				{cards.map((card, index) => (
					<div
						key={index}
						className='w-1/4 px-4 py-16 mb-8 text-center bg-white rounded shadow-lg'>
						<h2 className='text-2xl font-bold'>{card.title}</h2>
						<p className='text-lg'>{card.content}</p>
					</div>
				))}
			</div>
		</div>
	);
};

PageContent.propTypes = {
	title: PropTypes.string,
	nextPage: PropTypes.string,
	nextPageText: PropTypes.string,
	item1: PropTypes.string,
	imageProp: PropTypes.string,
	color: PropTypes.string,
	item2: PropTypes.string,
	images: PropTypes.arrayOf(
		PropTypes.shape({
			src: PropTypes.string,
			link: PropTypes.string,
		})
	),
	alt: PropTypes.string,
	buttonColor1: PropTypes.string,
	bgColor1: PropTypes.string,
};

export default PageContent;
