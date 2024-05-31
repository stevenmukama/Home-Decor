import products from "@/data/products";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [mainCateg, setMainCateg] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setMainCateg(queryParams.get("mainCateg"));
  }, [location]);

  return (
    <aside className="lg:w-96 w-full bg-gray-50">
      <h2 className="lg:px-8 md:px-4 px-2 py-8 mb-4 lg:text-6xl md:text-4xl text-xl font-semibold">
        Categories
      </h2>
      {products.map((category) => (
        <div key={category.name}>
          <div className="lg:px-8 md:px-4 px-2 my-4">
            <Link
              className={`lg:text-4xl md:text-2xl text-xl font-bold ${
                category.name === mainCateg ? "text-red-500" : "text-gray-500"
              } hover:underline`}
              to={`?mainCateg=${category.name}`}
            >
              {category.name}
            </Link>
            {category.name === mainCateg && (
              <div className="border-b border-red-500 mt-3 relative">
                <span className="absolute -top-0.5 bg-red-500 w-1 h-1 rounded-full block"></span>
              </div>
            )}
          </div>
          <ul className="flex flex-col">
            {category.options.map((option) => (
              <Link
                key={option}
                className="lg:px-8 md:px-4 px-2 py-4 font-bold text-gray-400 border-b border-gray-300 text-md hover:underline"
                to={`?mainCateg=${category.name}&subCateg=${option}`}
              >
                {option}
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
