import React from "react";
import type { Stay } from "~/data/staysData";
import { Star } from "lucide-react";
import { useNavigate } from "react-router";

interface StayListProps {
    stays: Stay[];
}

const StayList: React.FC<StayListProps> = ({ stays }) => {
    const navigate = useNavigate();

    if (stays.length === 0) {
    return (
        <div className="text-center text-gray-500 py-10">
            No stays found. Try adjusting your filters.
        </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {stays.map((stay) => (
            <div
            key={stay.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
            >
            <img
                src={`/staysimages/${stay.images[0]}`}
                loading="lazy"
                alt={stay.name}
                className="w-full h-56 object-cover"
            />

            <div className="p-4 flex flex-col justify-between h-full">
                <div>
                <h3 className="text-lg font-semibold text-gray-800">
                    {stay.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{stay.summary}</p>

                <div className="flex items-center justify-between text-sm mb-3">
                    <p className="text-blue-600 font-medium">
                    {stay.category.charAt(0).toUpperCase() + stay.category.slice(1)}
                    </p>
                    <p className="text-yellow-500 font-semibold">⭐ {stay.review}</p>
                </div>

                    <p className="text-gray-800 font-semibold mb-4">
                        ${stay.paymentPerNight.toLocaleString()} / night
                    </p>

                    {/* View Details Button */}
                    <button
                        onClick={() => navigate(`/stay/${stay.id}`)}
                        className="w-full py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition duration-200 font-medium"
                    >
                        View Details
                    </button>
            </div>
            </div>
            </div>
        ))}
        </div>
    );
};

export default StayList;
