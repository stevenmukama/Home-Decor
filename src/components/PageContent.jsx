import PropTypes from 'prop-types';

const PageContent = ({ title, nextPage, nextPageText }) => {
	return (
		<div
			className={`min-h-screen flex flex-col items-center justify-center`}>
			<h1 className='text-4xl text-white mb-4'>{title}</h1>
			<a
				href={nextPage}
				className='bg-white text-black py-2 px-4 rounded'>
				{nextPageText}
			</a>
		</div>
	);
};

PageContent.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	nextPage: PropTypes.string.isRequired,
	nextPageText: PropTypes.string.isRequired,
};

export default PageContent;
