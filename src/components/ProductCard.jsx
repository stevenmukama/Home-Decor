import React, { useState, useEffect } from "react";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";

const ProductCard = ({ product, prodId, openCart }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const favProductsItem = localStorage.getItem("favorites-prods");
    const favProducts =
      favProductsItem && favProductsItem !== ""
        ? JSON.parse(favProductsItem)
        : [];
    setIsFavorited(favProducts.includes(prodId));
  }, [prodId]);

  const toggleFavorite = () => {
    const favProductsItem = localStorage.getItem("favorites-prods");
    let favProducts =
      favProductsItem && favProductsItem !== ""
        ? JSON.parse(favProductsItem)
        : [];

    if (isFavorited) {
      favProducts = favProducts.filter((id) => id !== prodId);
      setIsFavorited(false);
    } else {
      favProducts.push(prodId);
      setIsFavorited(true);
    }

    localStorage.setItem("favorites-prods", JSON.stringify(favProducts));
  };

  return (
    <div className="bg-white rounded shadow-md overflow-hidden relative">
      <div className="rounded-lg overflow-hidden relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover"
        />
        <button
          onClick={toggleFavorite}
          className={`absolute top-2 right-2 ${
            (isFavorited && "text-red-500") || "text-gray-500"
          } hover:text-red-500`}
        >
          <SolidHeartIcon className="h-6 w-6" onClick={toggleFavorite} />
        </button>
      </div>
      <div className="py-4 px-4">
        <h3 className="font-semibold mb-2">{product.title}</h3>
        <div className="flex items-center mb-2">
          {product.colors.map((color) => (
            <span
              key={color}
              className={`block w-4 h-4 rounded-full mr-1`}
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
        <div className="text-gray-800 font-bold mb-4">{product.price} rwf</div>
        <button
          className="bg-gray-400 text-white text-sm font-bold py-1 px-14 rounded-lg hover:bg-gray-500 no-wrap"
          onClick={openCart}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
