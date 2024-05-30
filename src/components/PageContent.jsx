import PropTypes from 'prop-types';

const PageContent = ({
	title,
	item1,
	nextPage,
	nextPageText,
	imageProp,
	color,
}) => {
	return (
		<div className='relative top-20'>
			<div className={`py-4 ${color} flex gap-10`}>
				<div className='py-8'>
					{' '}
					<h1 className='mb-4 text-4xl text-white'>{title}</h1>
					<p className='mb-4 text-4xl text-white'>{item1}</p>
				</div>
				<div>
					<img
						src={imageProp}
						alt='home'
						className='object-cover object-center rounded-full w-96 h-96'
					/>
				</div>
			</div>

			<a
				href={nextPage}
				className='px-4 py-2 text-black bg-white rounded'>
				{nextPageText}
			</a>
		</div>
	);
};

PageContent.propTypes = {
	title: PropTypes.string.isRequired,
	nextPage: PropTypes.string.isRequired,
	nextPageText: PropTypes.string.isRequired,
	item1: PropTypes.string.isRequired,
	imageProp: PropTypes.string,
	color: PropTypes.string,
};

export default PageContent;
