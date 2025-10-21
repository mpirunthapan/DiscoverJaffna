import React, { useState, useEffect } from "react";
import { restaurantsData } from "~/data/restaurantsData";
import type { Restaurant } from "~/data/restaurantsData";

interface ListProps {
  filters: { search: string; category: string, price: string };
}

const List: React.FC<ListProps> = ({ filters }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [filteredData, setFilteredData] = useState<Restaurant[]>(restaurantsData);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    let filtered = restaurantsData;

    if (filters.search) {
      filtered = filtered.filter((r) =>
        r.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        r.cuisine.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.category) {
      filtered = filtered.filter((r) => r.category === filters.category);
    }

    if (filters.price) {
      filtered = filtered.filter((r) => r.priceRange === filters.price);
    }

    setFilteredData(filtered);
    setVisibleCount(6);
  }, [filters]);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 py-10 px-6">
      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredData.slice(0, visibleCount).map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 overflow-hidden"
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{restaurant.name}</h3>
                <span className="text-yellow-500 text-sm font-semibold">
                  ⭐ {restaurant.rating}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-1">{restaurant.cuisine}</p>
              <p className="text-blue-600 text-sm font-medium mb-2">
                {restaurant.priceRange}
              </p>
              <p className="text-gray-700 text-sm mb-3 line-clamp-2">
                {restaurant.description}
              </p>
              <button
                onClick={() => setSelectedRestaurant(restaurant)}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg hover:opacity-90 transition font-medium cursor-pointer"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < filteredData.length && (
        <div className="text-center mt-8">
          <button
            onClick={loadMore}
            className="px-5 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition"
          >
            Load More
          </button>
        </div>
      )}

      {/* Popup */}
      {selectedRestaurant && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/50 flex justify-center items-center z-50">
          <div className="relative bg-white w-[90%] max-w-3xl rounded-2xl shadow-2xl p-8 overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedRestaurant(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl cursor-pointer"
            >
              ✖
            </button>

            <img
              src={selectedRestaurant.image}
              alt={selectedRestaurant.name}
              className="w-full h-60 object-cover rounded-lg mb-6"
            />

            <h2 className="text-3xl font-bold text-gray-900 mb-1">
              {selectedRestaurant.name}
            </h2>
            <p className="text-gray-600 text-lg mb-4">{selectedRestaurant.cuisine}</p>

            <div className="flex items-center justify-between mb-5">
              <p className="text-yellow-500 text-lg font-semibold">
                ⭐ {selectedRestaurant.rating}
              </p>
              <p className="text-blue-700 text-lg font-semibold">
                {selectedRestaurant.priceRange}
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              {selectedRestaurant.description}
            </p>

            <a
              href={selectedRestaurant.googleMapURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-600 font-medium hover:underline mt-2"
            >
              📍 View on Google Maps
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
