/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';

const ProductCard = ({ product, prodId, openCart }) => {
	const [isFavorited, setIsFavorited] = useState(false);

	useEffect(() => {
		const favProductsItem = localStorage.getItem('favorites-prods');
		const favProducts =
			favProductsItem && favProductsItem !== ''
				? JSON.parse(favProductsItem)
				: [];
		setIsFavorited(favProducts.includes(prodId));
	}, [prodId]);

	const toggleFavorite = () => {
		const favProductsItem = localStorage.getItem('favorites-prods');
		let favProducts =
			favProductsItem && favProductsItem !== ''
				? JSON.parse(favProductsItem)
				: [];

		if (isFavorited) {
			favProducts = favProducts.filter((id) => id !== prodId);
			setIsFavorited(false);
		} else {
			favProducts.push(prodId);
			setIsFavorited(true);
		}

		localStorage.setItem('favorites-prods', JSON.stringify(favProducts));
	};

	return (
		<div className='relative overflow-hidden bg-white rounded shadow-md'>
			<div className='relative overflow-hidden rounded-lg'>
				<img
					src={product.image}
					alt={product.title}
					className='object-cover w-full h-64'
				/>
				<button
					onClick={toggleFavorite}
					className={`absolute top-2 right-2 ${
						(isFavorited && 'text-red-500') || 'text-gray-500'
					} hover:text-red-500`}>
					<SolidHeartIcon
						className='w-6 h-6'
						onClick={toggleFavorite}
					/>
				</button>
			</div>
			<div className='px-4 py-4'>
				<h3 className='mb-2 font-semibold'>{product.title}</h3>
				<div className='flex items-center mb-2'>
					{product.colors.map((color) => (
						<span
							key={color}
							className={`block w-4 h-4 rounded-full mr-1`}
							style={{ backgroundColor: color }}></span>
					))}
				</div>
				<div className='mb-4 font-bold text-gray-800'>
					{product.price} rwf
				</div>
				<button
					className='py-1 text-sm font-bold text-white bg-gray-400 rounded-lg px-14 hover:bg-gray-500 no-wrap'
					onClick={openCart}>
					ADD TO CART
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
