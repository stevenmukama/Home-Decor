import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const NavItems = [
	{ name: 'Home', path: '/' },
	{ name: 'Product', path: '/product' },
	{ name: 'About Us', path: '/about' },
	{ name: 'Contact Us', path: '/contactUs' },
	{ name: 'Listings', path: '/listings' },
];

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef(null);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<nav className='bg-white max-md:w-auto'>
			<div className='flex items-center font-BelloText font-bold text-xs w-full justify-between p-4 text-[#083201] z-40'>
				<img
					src='/public/decorlogo.svg'
					className='w-auto h-auto'
				/>
				<div className='items-center justify-center hidden gap-6 min-[1207px]:flex'>
					<ul className='flex gap-8'>
						{NavItems.map((item) => (
							<li key={item.path}>
								<Link
									to={item.path}
									className='text-[17px]  hover:underline hover:underline-offset-8'>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className='flex items-center min-[1207px]:hidden'>
					<button onClick={toggleMenu}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='w-8 h-8'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
							/>
						</svg>
					</button>
				</div>
			</div>
			<div
				ref={menuRef}
				className={`fixed top-0 left-0 w-full h-full bg-[#083201] text-white flex flex-col items-center justify-center z-50 transition-transform transform ${
					isMenuOpen ? 'translate-x-0' : 'translate-x-full'
				} min-[1207px]:hidden`}>
				<button
					onClick={toggleMenu}
					className='absolute top-4 right-4'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='w-8 h-8'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
						/>
					</svg>
				</button>
				<ul className='flex flex-col gap-8 text-2xl'>
					{NavItems.map((item) => (
						<li key={item.path}>
							<Link
								to={item.path}
								onClick={closeMenu}
								className='hover:text-gray-400'>
								{item.name}
							</Link>
						</li>
					))}
					<Link
						to='/signup'
						onClick={closeMenu}
						className='mt-8 '>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='size-8'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
							/>
						</svg>
					</Link>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
