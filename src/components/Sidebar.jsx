const Sidebar = () => {
	const furnitureOptions = [
		'Decorative Accents',
		'Poufs',
		'Accent chairs',
		'Ottomans',
	];

	const decorativeAccents = ['Clocks', 'Candles', 'Vases', 'Sculptures'];
	const textiles = ['Curtains', 'Blinds'];
	const wallDecor = ['wall art', 'Mirror', 'Wall shelves', 'Wall decals'];
	return (
		<aside className='w-96 bg-gray-50'>
			<h2 className='px-8 py-8 mb-4 text-6xl font-semibold'>Categories</h2>
			<div className='px-8 mb-4'>
				<span className='text-4xl font-bold text-gray-500 hover:underline'>
					Furniture
				</span>
			</div>
			<ul>
				{furnitureOptions.map((option) => (
					<li
						key={option}
						className='px-8 py-4 font-bold text-gray-400 border-b border-gray-300 text-md'>
						<a
							href={`/${option.toLowerCase().replace(' ', '-')}`}
							className='hover:underline'>
							{option}
						</a>
					</li>
				))}
			</ul>
			<div className='px-8 my-6'>
				<span className='text-4xl font-bold text-red-500 hover:underline'>
					Decorative Accents:
				</span>
			</div>
			<ul>
				{decorativeAccents.map((option) => (
					<li
						key={option}
						className='px-8 py-4 font-bold text-gray-400 border-b border-gray-300 text-md'>
						<a
							href={`/${option.toLowerCase().replace(' ', '-')}`}
							className='hover:underline'>
							{option}
						</a>
					</li>
				))}
			</ul>
			<div className='px-8 my-6'>
				<span className='text-4xl font-bold text-gray-500 hover:underline'>
					Textiles
				</span>
			</div>
			<ul>
				{textiles.map((option) => (
					<li
						key={option}
						className='px-8 py-4 font-bold text-gray-400 border-b border-gray-300 text-md'>
						<a
							href={`/${option.toLowerCase().replace(' ', '-')}`}
							className='hover:underline'>
							{option}
						</a>
					</li>
				))}
			</ul>
			<div className='px-8 my-6'>
				<span className='text-4xl font-bold text-gray-500 hover:underline'>
					Wall decor
				</span>
			</div>
			<ul>
				{wallDecor.map((option) => (
					<li
						key={option}
						className='px-8 py-4 font-bold text-gray-400 border-b border-gray-300 text-md'>
						<a
							href={`/${option.toLowerCase().replace(' ', '-')}`}
							className='hover:underline'>
							{option}
						</a>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default Sidebar;
