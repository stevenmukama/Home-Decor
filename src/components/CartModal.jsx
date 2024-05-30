import React, { useState } from "react";

const CartModal = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start z-10">
      <div className="bg-white rounded-lg p-4 w-full max-w-sm relative">
        <button
          className="absolute top-2 right-2 text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-lg font-semibold mb-4">Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded mr-4"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.price} rwf</p>
                  <p className="text-gray-600">{item.description}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="bg-gray-200 px-2 py-1 rounded"
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="bg-gray-200 px-2 py-1 rounded"
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="text-red-500 ml-4"
                  onClick={() => onRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-4">
              <p className="font-semibold">
                Sub-total:{" "}
                {cartItems.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}{" "}
                rwf
              </p>
              <div className="flex justify-between mt-4">
                <button className="bg-gray-400 text-white text-sm font-bold py-1 px-4 rounded-lg hover:bg-gray-500">
                  View Bag
                </button>
                <button className="bg-gray-400 text-white text-sm font-bold py-1 px-4 rounded-lg hover:bg-gray-500">
                  Checkout
                </button>
              </div>
            </div>
            <p className="text-center mt-4 text-gray-600">
              Free shipping worldwide
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
