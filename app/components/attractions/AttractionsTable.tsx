import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import {attractionsData} from '~/data/attractionsData';
import type { Attraction } from '~/data/attractionsData';

interface AttractionsTableProps {
    searchQuery?: string;
}

const AttractionsTable:React.FC<AttractionsTableProps> = ({searchQuery}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const navigate = useNavigate();

    const filteredAttractions = attractionsData.filter((item) =>
        item.name.toLowerCase().includes(searchQuery ? searchQuery.toLowerCase() : "")
    );

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
