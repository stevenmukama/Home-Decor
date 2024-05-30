const Header = () => {
	return (
		<div>
			<header className='bg-white shadow-md'>
				<div className='container flex items-center justify-between px-4 py-2 mx-auto'>
					<div className='text-xl font-bold'>Classic Decor</div>
					<nav>
						<ul className='flex space-x-4'>
							<li>
								<a
									href='/'
									className='hover:underline'>
									Home
								</a>
							</li>
							<li>
								<a
									href='/products'
									className='hover:underline'>
									Product
								</a>
							</li>
							<li>
								<a
									href='/about'
									className='hover:underline'>
									About Us
								</a>
							</li>
							<li>
								<a
									href='/contact'
									className='hover:underline'>
									Contact Us
								</a>
							</li>
						</ul>
					</nav>
					<div className='space-x-4'>
						<button className='hover:underline'>Login</button>
						<button className='hover:underline'>Cart</button>
					</div>
				</div>
			</header>
			<div className='relative flex'>
				<div className='flex flex-col items-start justify-between flex-1'>
					<div className='flex flex-col justify-between flex-1 p-12'>
						<h2 className='text-3xl font-bold'>Decorative Accents</h2>
						<h3 className='font-bold text-7xl'>New Arrivals</h3>
					</div>

					<div className='w-full py-5 text-center text-white bg-gray-900'>
						<span className='text-lg text-center'>Sculptures</span>
					</div>
				</div>

				<div className='flex-1'>
					<img
						src='src/assets/plant.svg'
						alt='Decorative Accents'
						className='w-fulsl object-s '
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
