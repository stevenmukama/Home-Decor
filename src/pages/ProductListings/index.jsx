import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import Input from "../../components/Input";
import Pagination from "../../components/Pagination";
import CartModal from "../../components/CartModal";
import productCategories from "../../data/products";
import { useLocation } from "react-router-dom";

const Listings = () => {
  const sortOptions = ["New Arrival", "Promo", "Hot", "Name", "Kind"];
  const [sortedBy, setSortedBy] = useState(sortOptions[0]);
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
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState(productCategories[0]);

  const location = useLocation();
  const [subCateg, setSubCateg] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setSubCateg(queryParams.get("subCateg"));
    queryParams.get("mainCateg") &&
      setCategory(
        productCategories.find((c) => c.name === queryParams.get("mainCateg"))
      );
  }, [location]);

  const handleAddToCart = (product) => {
    setIsCartOpen(true);
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
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
    <div className="flex flex-col min-h-screen">
      <Helmet title="Products" />
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
      <div className="relative flex">
        <div className="flex flex-col items-start justify-between flex-1">
          <div className="flex flex-col justify-between flex-1 p-12">
            <h2 className="text-3xl font-bold">{category.name}</h2>
            <h3 className="font-bold text-7xl">{sortedBy}</h3>
          </div>

          <div className="w-full py-5 text-center text-white bg-gray-900">
            <span className="text-lg text-center">{subCateg}</span>
          </div>
        </div>

        <div className="flex-1">
          <img
            src={category.image}
            alt={category.name}
            className="w-fulls"
          />
        </div>
      </div>
      <div className="flex flex-1">
        <Sidebar activeCategory={productCategories} />
        <main className="flex-1 p-4">
          <div className="flex justify-end gap-8 my-12">
            <Input type="text" placeholder="Find..." value="" onChange={{}} />
            <select
              name="sortby"
              className="p-2"
              onClick={(e) => setSortedBy(e.target.value)}
            >
              {sortOptions.map((option, index) => (
                <option key={index} value={option} className="p-6 text-sm">
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {category.products.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                prodId={index}
                openCart={() => setIsCartOpen(true)}
                addedToCart={cartItems.some((item) => item.id === index)}
              />
            ))}
          </div>
          <div className="flex justify-center mt-4">
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

export default Listings;
