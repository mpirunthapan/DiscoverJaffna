import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import {attractionsData} from '~/data/attractionsData';
import type { Attraction } from '~/data/attractionsData';

interface AttractionsTableProps {
    searchQuery?: string;
}

const AttractionsTable:React.FC<AttractionsTableProps> = ({searchQuery}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const itemsPerPage = 6;
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPage(1); // Reset to first page on new search
    }, [searchQuery]);

    const categories = ["All", ...new Set(attractionsData.map(item => item.category))];
    

    const filteredAttractions = attractionsData.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(searchQuery?.toLowerCase() || "");
        const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const totalPages = Math.ceil(filteredAttractions.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredAttractions.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        window.scrollTo(0, 0); // Scroll to top on page change
    }
    
    return (
        <section className="py-10 px-4 md:px-12 bg-gray-50">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3 sm:mb-0">
                    Attractions in Jaffna
                </h2>
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
                >
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedData.map((attraction: Attraction) => (
            <div
                key={attraction.id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
                <img
                src={attraction.image}
                alt={attraction.name}
                className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col justify-between flex-grow">
                <h2 className="text-lg font-semibold text-gray-900">{attraction.name}</h2>
                <p className="text-sm text-blue-500 mb-4">{attraction.slogan}</p>
                <button
                    onClick={() => navigate(`/attraction/${attraction.id}`)}
                    className="text-blue-700 hover:text-blue-700 font-medium cursor-pointer"
                >
                    Learn More →
                </button>
                </div>
            </div>
            ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2 items-center">
                <button
                    onClick={() => handlePageChange(1)}
                    className="px-3 py-1 rounded bg-white border text-gray-700 hover:bg-gray-200 cursor-pointer"
                >
                    &lt;
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-3 py-1 rounded ${
                            currentPage === index + 1
                                ? "bg-blue-500 text-white"
                                : "bg-white border text-gray-700 hover:bg-gray-200 cursor-pointer"
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(totalPages)}
                    className="px-3 py-1 rounded bg-white border text-gray-700 hover:bg-gray-200 cursor-pointer"
                >
                    &gt;
                </button>
            </div>
        </section>
    )
}

export default AttractionsTable
