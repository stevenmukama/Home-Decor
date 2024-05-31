import React, { useState } from "react";
import { Helmet } from "react-helmet";
import productCategories from "../../data/products";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";
import CartModal from "../../components/CartModal";

const ProductDetailsPage = () => {
  const [selectedColor, setSelectedColor] = useState("gray-500");
  const [quantity, setQuantity] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(
    productCategories[0].products.slice(0, 2).map((product, id) => ({
      id,
      name: product.title,
      price: product.price,
      description: product.title,
      image: product.image,
      quantity: 1,
    }))
  );
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (action) => {
    if (action === "increment") {
      setQuantity(quantity + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
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
    <div className="container mx-auto p-4">
      <Helmet title="Products Details" />
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
      <h2 className="text-3xl font-bold mb-8">Decorative Accents</h2>
      <div className="flex gap-16">
        <div className="flex flex-col mr-4 gap-4">
          <img
            src="/assets/decorative/candle.svg"
            className="w-36 h-40 object-cover"
          />
          <img
            src="/assets/decorative/candle.svg"
            alt="Product thumbnail 2"
            className="w-36 h-40 object-cover"
          />
          <img
            src="/assets/decorative/candle.svg"
            alt="Product thumbnail 3"
            className="w-36 h-40 object-cover"
          />
          <img
            src="/assets/decorative/candle.svg"
            alt="Product thumbnail 4"
            className="w-36 h-40 object-cover"
          />
        </div>
        <div className="flex-1 px-10">
          <div className="flex-row flex gap-16">
            <img
              src="/assets/decorative/candle.svg"
              alt="Main Product"
              className="w-96 h-96 object-cover mb-4"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Lorem ipsum terit</h3>
              <p className="text-xl text-gray-600 mb-4 font-semibold">
                35,000 rwf
              </p>
              <div className="mb-4">
                <p className="mb-2 text-xl text-gray-700">Choose color:</p>
                <div className="flex">
                  {["gray", "brown", "black", "blue"].map((color) => (
                    <span
                      key={color}
                      onClick={() => handleColorChange(color)}
                      className={`block w-4 h-4 rounded-full mr-2 cursor-pointer ${
                        selectedColor === color
                          ? "border-2 border-gray-600"
                          : ""
                      }`}
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between my-10">
                <span className="text-lg font-semibold text-orange-500 border-b border-orange-500 pb-4">
                  Materials
                </span>
                <span className="text-lg font-semibold text-gray-700">
                  Shipping
                </span>
                <span className="text-lg font-semibold text-gray-700">
                  Return policy
                </span>
              </div>
              <div className="text-gray-700 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </div>
              <div className="mb-4 flex justify-between px-10">
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange("decrement")}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span className="mx-2">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange("increment")}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
                <button className="px-8 py-2 text-lg text-white bg-gray-700 rounded-lg hover:bg-gray-500">
                  Checkout
                </button>
              </div>
            </div>
          </div>
          <div className="mt-32">
            <div className="flex justify-between mb-4">
              <span className="text-lg font-semibold pb-4 text-orange-500 border-b border-orange-500">
                Descriptions
              </span>
              <span className="text-lg font-semibold text-gray-700">
                Reviews (5+)
              </span>
              <span className="text-lg font-semibold text-gray-700">
                Warranty
              </span>
            </div>
            <div className="text-gray-700">
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Corem
              ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum, ac aliquet odio mattis. Corem ipsum
              dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
              et velit interdum, ac aliquet odio mattis.
            </div>
          </div>
        </div>
      </div>

      <div className="my-8">
        <h3 className="text-2xl font-bold mb-4 text-center">
          Related Products
        </h3>
        {/* Add related products component or logic here */}
        <div className="grid grid-cols-3 gap-6">
          {productCategories[0].products.slice(0, 3).map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              prodId={index}
              openCart={() => setIsCartOpen(true)}
              addedToCart={cartItems.some((item) => item.id === index)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
