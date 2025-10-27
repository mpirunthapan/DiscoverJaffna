import React, { useEffect, useState } from "react";

interface HeroProps {
  onFilterChange: (filters: { search: string; category: string; price: string }) => void;
  onClear: () => void;
}

const Hero: React.FC<HeroProps> = ({ onFilterChange, onClear }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    onFilterChange({search,category,price});
  }, [search,category,price]);

  const handleClear = () => {
    setSearch('');
    setCategory('');
    setPrice('');
    onClear();
  };

  return (
    <section className="bg-gray-100 py-12 px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Discover the Best Restaurants in Jaffna 🍽️
      </h1>
      <p className="text-lg text-gray-900 mb-8">
        Find your favorite meals and hidden gems around the city
      </p>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 max-w-3xl mx-auto cursor-pointer">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by name or cuisine..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded-xl border border-gray-300 text-gray-800 w-full sm:w-auto"
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className="p-2 rounded-xl border border-gray-300 text-gray-800 cursor-pointer w-full sm:w-auto"
        >
          <option value="">All Categories</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Non-Vegetarian">Non-Vegetarian</option>
          <option value="Seafood">Seafood</option>
          <option value="Dessert">Dessert</option>
          <option value="Multi-Cuisine">Multi-Cuisine</option>
          <option value="Fast Food">Fast Food</option>
        </select>

        {/* Price */}
        <select
          value={price} 
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          className="p-2 rounded-xl border border-gray-300 text-gray-800 cursor-pointer w-full sm:w-auto"
        >
          <option value="">All Prices</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
        </select>

        {/* Clear Button */}
        <button
          onClick={handleClear}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition cursor-pointer w-full sm:w-auto"
        >
          Clear
        </button>
      </div>
    </section>
  );
};

export default Hero;
