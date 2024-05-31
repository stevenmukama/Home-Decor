/* eslint-disable react/prop-types */
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav>
      <ul className="flex flex-wrap justify-center gap-2 md:gap-4 text-base md:text-lg font-bold pagination">
        <li>
          <button
            className="page-link flex items-center hover:text-red-500"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeftIcon className="w-4 md:w-6" />
          </button>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${
              page === currentPage
                ? "text-red-500"
                : "text-gray-850 hover:text-red-400"
            }`}
          >
            <button className="page-link px-2" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            className="page-link flex items-center hover:text-red-500"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRightIcon className="w-4 md:w-6" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
