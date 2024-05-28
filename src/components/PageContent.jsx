/* eslint-disable react/prop-types */

const PageContent = ({ title, color, nextPage, nextPageText }) => {
	return (
		<div
			className={`min-h-screen flex flex-col items-center justify-center ${color}`}>
			<h1 className='text-4xl text-white mb-4'>{title}</h1>
			<a
				href={nextPage}
				className='bg-white text-black py-2 px-4 rounded'>
				{nextPageText}
			</a>
		</div>
	);
};

export default PageContent;
