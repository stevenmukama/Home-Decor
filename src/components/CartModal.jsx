/* eslint-disable react/prop-types */
import React from "react";

const CartModal = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-start justify-center md:justify-end bg-black bg-opacity-50 p-4"
      style={{ zIndex: 60 }}
    >
      <div className="relative w-full max-w-md md:max-w-sm p-4 bg-white rounded-lg">
        <button
          className="absolute text-gray-700 top-2 right-2 text-3xl md:text-5xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="mb-4 text-lg">{cartItems.length} items</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center md:items-start mb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-24 h-32 md:w-16 md:h-16 mr-0 md:mr-4 mb-2 md:mb-0 rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg md:text-xl">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-semibold">
                    {item.price} rwf
                  </p>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="ml-0 md:ml-4 mt-2 md:mt-0 text-red-400 self-end"
                  onClick={() => onRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-4 border-t pt-6">
              <p className="flex justify-between mb-4">
                <span>Sub-total: </span>
                <span className="font-semibold">
                  {cartItems.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )}{" "}
                  rwf
                </span>
              </p>
              <div className="flex justify-between mt-6">
                <button className="px-4 md:px-8 py-2 text-lg outline outline-1 rounded-sm hover:bg-gray-500 hover:text-white">
                  View Bag
                </button>
                <button className="px-4 md:px-8 py-2 text-lg text-white bg-gray-700 outline outline-1 rounded-sm hover:bg-gray-500">
                  Checkout
                </button>
              </div>
            </div>
            <p className="mt-4 text-center text-gray-800">
              Free shipping worldwide
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
