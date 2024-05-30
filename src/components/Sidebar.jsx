import React from "react";

const Sidebar = () => {
  const furnitureOptions = [
    "Decorative Accents",
    "Poufs",
    "Accent chairs",
    "Ottomans",
  ];

  const decorativeAccents = ["Clocks", "Candles", "Vases", "Sculptures"];
  const textiles = ["Curtains", "Blinds"];
  const wallDecor = ["wall art", "Mirror", "Wall shelves", "Wall decals"];
  return (
    <aside className="w-96 bg-gray-50">
      <h2 className="font-semibold text-6xl py-8 px-8 mb-4">Categories</h2>
      <div className="mb-4 px-8">
        <span className="text-4xl text-gray-500 font-bold hover:underline">
          Furniture
        </span>
      </div>
      <ul>
        {furnitureOptions.map((option) => (
          <li
            key={option}
            className="py-4 px-8 text-md text-gray-400 font-bold border-b border-gray-300"
          >
            <a
              href={`/${option.toLowerCase().replace(" ", "-")}`}
              className="hover:underline"
            >
              {option}
            </a>
          </li>
        ))}
      </ul>
      <div className="my-6 px-8">
        <span className="text-4xl text-red-500 font-bold hover:underline">
          Decorative Accents:
        </span>
      </div>
      <ul>
        {decorativeAccents.map((option) => (
          <li
            key={option}
            className="py-4 px-8 text-md text-gray-400 font-bold  border-b border-gray-300"
          >
            <a
              href={`/${option.toLowerCase().replace(" ", "-")}`}
              className="hover:underline"
            >
              {option}
            </a>
          </li>
        ))}
      </ul>
      <div className="my-6 px-8">
        <span className="text-4xl text-gray-500 font-bold hover:underline">
          Textiles
        </span>
      </div>
      <ul>
        {textiles.map((option) => (
          <li
            key={option}
            className="py-4 px-8 text-md text-gray-400 font-bold border-b border-gray-300"
          >
            <a
              href={`/${option.toLowerCase().replace(" ", "-")}`}
              className="hover:underline"
            >
              {option}
            </a>
          </li>
        ))}
      </ul>
      <div className="my-6 px-8">
        <span className="text-4xl text-gray-500 font-bold hover:underline">
          Wall decor
        </span>
      </div>
      <ul>
        {wallDecor.map((option) => (
          <li
            key={option}
            className="py-4 px-8 text-md text-gray-400 font-bold border-b border-gray-300"
          >
            <a
              href={`/${option.toLowerCase().replace(" ", "-")}`}
              className="hover:underline"
            >
              {option}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
