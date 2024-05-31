import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const cards = [
	{ title: 'Clients', content: '10+' },
	{ title: 'Products', content: '10+' },
	{ title: 'XP Years', content: '1' },
];
const productImages = ['/Product1.png', '/product2.png', '/product3.png'];
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
	textCard1,
	numberColor1,
	buttonColor2,
	bgColor2,
	bgColor3,
	subscribeBgColor1,
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
						className='w-1/4 px-4 py-16 mb-8 text-center bg-white rounded-lg shadow-lg'>
						<h2 className={`text-[36px] font-bold ${textCard1}`}>
							{card.title}
						</h2>
						<p className={`text-[96px] font-bold ${numberColor1}`}>
							{card.content}
						</p>
					</div>
				))}
			</div>
			<button
				className={`px-8 py-4 block text-[36px] rounded-lg mb-8 mx-auto mt-8 ${buttonColor2}  text-white font-bold rounded w-fit`}>
				see more
			</button>{' '}
			<h1 className='text-4xl font-bold text-center'>Featured Products</h1>
			{/* i want that below u put three those three imges in three divs and use flex */}
			<div className='flex gap-4 px-8 mt-8'>
				{productImages.map((image, index) => (
					<div
						key={index}
						className='flex-1'>
						<img
							src={image}
							alt={`Product ${index + 1}`}
							className='object-cover object-center w-auto h-auto'
						/>
					</div>
				))}
			</div>
			<button
				className={`px-8 py-4 block text-[36px] rounded-lg mb-8 mx-auto mt-8 ${buttonColor2}  text-white font-bold rounded w-fit`}>
				<div className='flex gap-2'>
					Shop
					<img src='/public/arrowIcon.svg' />{' '}
				</div>
			</button>{' '}
			<div className={`${bgColor2} py-8 mb-8`}>
				<h1 className='mb-8 text-4xl font-bold text-center text-white'>
					What our clients says
				</h1>
				<div className='flex gap-8 px-8 text-2xl'>
					<div className='px-10 py-10 mx-auto text-center bg-white'>
						<img src='/Vector.svg' />
						<h1 className='px-6'>
							Torem ipsum dolor sit amet, consectetur adipiscing elit.
						</h1>
					</div>
					<div className='px-10 py-10 bg-white'>
						<img src='/Vector.svg' />
						<h1 className='px-6'>
							Torem ipsum dolor sit amet, consectetur adipiscing elit.
						</h1>
					</div>
				</div>
				<div className='flex justify-between'>
					<div className='flex gap-4 px-8 mt-8 text-white'>
						<div className={`${bgColor3} w-fit rounded-full`}>
							<img
								src='/public/profile-circle.svg'
								className='w-16 p-1'
							/>
						</div>
						<div className='pt-2'>
							<h1 className='text-xl font-bold'>Desireé T.</h1>
							<p className='text-sm'>Designer</p>
						</div>
					</div>
					<div className='flex gap-4 px-8 mt-8 text-white'>
						<div className={`${bgColor3} w-fit rounded-full`}>
							<img
								src='/public/profile-circle.svg'
								className='w-16 p-1'
							/>
						</div>
						<div className='pt-2'>
							<h1 className='text-xl font-bold'>Desireé T.</h1>
							<p className='text-sm'>Designer</p>
						</div>
					</div>
					<div />
				</div>
			</div>
			<div className='flex gap-8 px-8 text-center '>
				<img
					src='/emailImg.png'
					className=''
				/>
				<div>
					<h1 className='text-2xl font-bold'>
						Enter E-mail to get 20% off
					</h1>
				</div>
				<div className='px-8 py-2 bg-[#D9D9D9] flex gap-2 h-fit rounded-lg'>
					<img
						src='/public/sms.svg'
						className='w-[51px] h-[51px]'
					/>
					<p className='text-[32px] text-[#7A7878]'> Your email</p>
				</div>
				<button
					className={`px-10 py-3 rounded-lg text-white ${subscribeBgColor1} font-bold `}>
					Subscribe{' '}
				</button>
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
	textCard1: PropTypes.string,
	numberColor1: PropTypes.string,
	buttonColor2: PropTypes.string,
	bgColor2: PropTypes.string,
	bgColor3: PropTypes.string,
	subscribeBgColor1: PropTypes.string,
};

export default PageContent;
