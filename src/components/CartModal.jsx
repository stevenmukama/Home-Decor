/* eslint-disable react/prop-types */
const CartModal = ({
	isOpen,
	onClose,
	cartItems,
	onUpdateQuantity,
	onRemoveItem,
}) => {
	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 z-10 flex items-start justify-end bg-black bg-opacity-50'>
			<div className='relative w-full max-w-sm p-4 bg-white rounded-lg'>
				<button
					className='absolute text-gray-700 top-2 right-2'
					onClick={onClose}>
					&times;
				</button>
				<h2 className='mb-4 text-lg font-semibold'>Cart</h2>
				{cartItems.length === 0 ? (
					<p>Your cart is empty</p>
				) : (
					<div>
						{cartItems.map((item) => (
							<div
								key={item.id}
								className='flex items-center mb-4'>
								<img
									src={item.image}
									alt={item.name}
									className='object-cover w-16 h-16 mr-4 rounded'
								/>
								<div className='flex-1'>
									<h3 className='font-semibold'>{item.name}</h3>
									<p className='text-gray-600'>{item.price} rwf</p>
									<p className='text-gray-600'>{item.description}</p>
									<div className='flex items-center mt-2'>
										<button
											className='px-2 py-1 bg-gray-200 rounded'
											onClick={() =>
												onUpdateQuantity(item.id, item.quantity - 1)
											}>
											-
										</button>
										<span className='mx-2'>{item.quantity}</span>
										<button
											className='px-2 py-1 bg-gray-200 rounded'
											onClick={() =>
												onUpdateQuantity(item.id, item.quantity + 1)
											}>
											+
										</button>
									</div>
								</div>
								<button
									className='ml-4 text-red-500'
									onClick={() => onRemoveItem(item.id)}>
									Remove
								</button>
							</div>
						))}
						<div className='mt-4'>
							<p className='font-semibold'>
								Sub-total:{' '}
								{cartItems.reduce(
									(total, item) => total + item.price * item.quantity,
									0
								)}{' '}
								rwf
							</p>
							<div className='flex justify-between mt-4'>
								<button className='px-4 py-1 text-sm font-bold text-white bg-gray-400 rounded-lg hover:bg-gray-500'>
									View Bag
								</button>
								<button className='px-4 py-1 text-sm font-bold text-white bg-gray-400 rounded-lg hover:bg-gray-500'>
									Checkout
								</button>
							</div>
						</div>
						<p className='mt-4 text-center text-gray-600'>
							Free shipping worldwide
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default CartModal;
