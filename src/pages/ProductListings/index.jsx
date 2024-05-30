import { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import ProductCard from '../../components/ProductCard';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';
import Input from '../../components/Input';
import Pagination from '../../components/Pagination';
import CartModal from '../../components/CartModal';

const products = [
	{
		image: 'src/assets/elephants.svg',
		title: 'Lorem ipsum terit',
		colors: ['gray-500', 'brown-600', 'black'],
		price: '45,000',
	},
	{
		image: 'src/assets/plaa.svg',
		title: 'Lorem ipsum terit',
		colors: ['gray-500', 'brown-600', 'black'],
		price: '35,000',
	},
	{
		image: 'src/assets/infidel.svg',
		title: 'Lorem ipsum terit',
		colors: ['gray-500', 'brown-600', 'black'],
		price: '35,000',
	},
	{
		image: 'src/assets/elephants.svg',
		title: 'Lorem ipsum terit',
		colors: ['gray-500', 'brown-600', 'black'],
		price: '35,000',
	},
	{
		image: 'src/assets/vase.svg',
		title: 'Lorem ipsum terit',
		colors: ['gray-500', 'brown-600', 'black'],
		price: '35,000',
	},
	{
		image: 'src/assets/candle.svg',
		title: 'Lorem ipsum terit',
		colors: ['gray-500', 'brown-600', 'black'],
		price: '35,000',
	},
	{
		image: 'src/assets/HomeFigure.svg',
		title: 'Lorem ipsum terit',
		colors: ['gray-500', 'brown-600', 'black'],
		price: '35,000',
	},
	{
		image: 'src/assets/CarefreeFish.svg',
		title: 'Lorem ipsum terit',
		colors: ['gray-500', 'brown-600', 'black'],
		price: '35,000',
	},
	{
		image: 'src/assets/Nordic.svg',
		title: 'Lorem ipsum terit',
		colors: ['gray-500', 'brown-600', 'black'],
		price: '75,000',
	},
];

const App = () => {
	const sortOptions = ['New Arrival', 'Promo', 'Hot', 'Name', 'Kind'];

	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	const handleAddToCart = (product) => {
		setIsCartOpen(true);
		setCartItems((prevItems) => {
			const existingItem = prevItems.find(
				(item) => item.id === product.id
			);
			if (existingItem) {
				return prevItems.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			} else {
				return [...prevItems, { ...product, quantity: 1 }];
			}
		});
	};

	const handleUpdateQuantity = (productId, newQuantity) => {
		setCartItems((prevItems) =>
			prevItems.map((item) =>
				item.id === productId
					? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 }
					: item
			)
		);
	};

	const handleRemoveItem = (productId) => {
		setCartItems((prevItems) =>
			prevItems.filter((item) => item.id !== productId)
		);
	};

	return (
		<div className='flex flex-col min-h-screen'>
			<Helmet title='Products' />
			<Header />
			<CartModal
				isOpen={isCartOpen}
				onClose={() => setIsCartOpen(false)}
				cartItems={cartItems}
				onUpdateQuantity={handleUpdateQuantity}
				onRemoveItem={handleRemoveItem}
			/>
			<div className='flex flex-1'>
				<Sidebar />
				<main className='flex-1 p-4'>
					<div className='flex justify-end gap-8 my-12'>
						<Input
							type='text'
							placeholder='Find...'
							value=''
							onChange={{}}
						/>
						<select
							name='sortby'
							className='p-2'>
							{sortOptions.map((option, index) => (
								<option
									key={index}
									value={option}
									className='p-6 text-sm'>
									{option}
								</option>
							))}
						</select>
					</div>
					<div className='grid grid-cols-3 gap-6'>
						{products.map((product, index) => (
							<ProductCard
								key={index}
								product={product}
								prodId={index}
								openCart={() => setIsCartOpen(true)}
								addtoCart={() =>
									handleAddToCart({
										id: 1,
										name: product.title,
										price: product.price,
										description: product.title,
										image: product.image,
									})
								}
							/>
						))}
					</div>
					<div className='flex justify-center mt-4'>
						<Pagination
							currentPage={currentPage}
							totalPages={5}
							onPageChange={(page) => setCurrentPage(page)}
						/>
					</div>
				</main>
			</div>
			<Footer />
		</div>
	);
};

export default App;
