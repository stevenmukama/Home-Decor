/* eslint-disable react/prop-types */
import {
	ChevronRightIcon,
	ChevronLeftIcon,
} from '@heroicons/react/24/solid';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<nav>
			<ul className='flex gap-12 text-lg font-bold pagination'>
				<ChevronLeftIcon className='w-6 hover:text-red-500' />
				{pages.map((page) => (
					<li
						key={page}
						className={
							page === currentPage
								? 'page-item active text-red-500'
								: 'page-item text-gray-850 hover:text-red-400'
						}>
						<button
							className='page-link'
							onClick={() => onPageChange(page)}>
							{page}
						</button>
					</li>
				))}
				<ChevronRightIcon className='w-6 hover:text-red-500' />
			</ul>
		</nav>
	);
};

export default Pagination;
