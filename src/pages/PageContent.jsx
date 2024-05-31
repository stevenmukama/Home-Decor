import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PageContent = ({
	title,
	item1,
	imageProp,
	color,
	item2,
	images,
	alt,
}) => {
	return (
		<div className='relative top-20'>
			<div className={`w-full gap-10 py-8 ${color}`}>
				<h1 className='mb-4 text-4xl text-white'>{title}</h1>
				<p className='mb-4 text-4xl text-white'>{item1}</p>
				<p className='mb-4 text-xl text-white'>{item2}</p>
			</div>
			<div className='absolute right-0 top-3'>
				<img
					src={imageProp}
					alt={alt}
					className='object-cover object-center rounded-full w-96 h-96'
				/>
			</div>

			<div className='flex gap-4 mt-8'>
				{images?.map((image, index) => (
					<Link
						key={index}
						to={image.link}
						className='cursor-pointer'>
						<img
							src={image.src}
							alt={`Image ${index + 1}`}
							className='object-cover object-center w-48 h-48'
						/>
					</Link>
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
};

export default PageContent;
