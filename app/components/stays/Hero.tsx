import React from 'react'

interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
    category: string;
    setCategory: (value: string) => void;
    sortOption: string;
    setSortOption: (value: string) => void;
    clearFilters: () => void;
    categories: string[];
}

const Hero: React.FC<SearchBarProps> = ({
    searchQuery,
    setSearchQuery,
    category,
    setCategory,
    sortOption,
    setSortOption,
    clearFilters,
    categories
}) => {
    return (
        <div className="bg-blue-50 shadow-md rounded-2xl px-4 py-3 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Search Input */}
        <input
            type="text"
            placeholder="Search stays..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-1/3 bg-white border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:outline-none text-gray-900"
        />

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            {/* Category Filter */}
            <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 bg-white rounded-xl px-3 py-2 w-full sm:w-auto text-gray-900 focus:ring-2 =focus:outline-none cursor-pointer"
            >
            <option value="">All Categories</option>
            {categories.map((cat) => (
                <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
            ))}
            </select>

            {/* Sort Option */}
            <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-gray-300 bg-white rounded-xl px-3 py-2 w-full sm:w-auto text-gray-900 focus:ring-2 focus:outline-none cursor-pointer"
            >
            <option value="">Sort by</option>
            <option value="price-low-high">Price: Low → High</option>
            <option value="price-high-low">Price: High → Low</option>
            <option value="rating-high-low">Rating: High → Low</option>
            </select>

            {/* Clear Filters Button */}
            <button
            onClick={clearFilters}
            className="bg-blue-500 hover:bg-blue-400 transition rounded-xl px-4 py-2 text-white font-medium cursor-pointer"
            >
            Clear
            </button>
        </div>
        </div>
    )
}

export default Hero
