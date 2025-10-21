import React, { useState, useEffect, useRef } from "react";
import type { Stay } from "~/data/staysData";
import { useNavigate } from "react-router";

interface StayListProps {
    stays: Stay[];
}

const StayList: React.FC<StayListProps> = ({ stays }) => {
const navigate = useNavigate();
const [visibleCount, setVisibleCount] = useState(6);
const loaderRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
        (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
            setVisibleCount((prev) => {
                if (prev < stays.length) return prev + 6;
                return prev;
            });
            }
        },
        { root: null, rootMargin: "100px", threshold: 0.1 }
    );

    observer.observe(loaderRef.current);

    return () => {
        if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
}, [stays.length]);

const visibleStays = stays.slice(0, visibleCount);

if (stays.length === 0) {
    return (
        <div className="text-center text-gray-500 py-10">
            No stays found. Try adjusting your filters.
        </div>
    );
}

return (
    <div className="flex flex-col items-center mt-10">
      {/* Grid of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {visibleStays.map((stay) => (
          <div
            key={stay.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1 border border-gray-100"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={`/staysimages/${stay.images[0]}`}
                loading="lazy"
                alt={stay.name}
                className="w-full h-60 object-cover"
              />
              <span className="absolute top-3 right-3 bg-white/90 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                {stay.category}
              </span>
            </div>

            {/* Details */}
            <div className="p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {stay.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {stay.summary}
                </p>

                <div className="flex items-center justify-between mb-2">
                  <p className="text-yellow-500 font-medium flex items-center gap-1">
                    ⭐ <span>{stay.review}</span>
                  </p>
                  <p className="text-gray-700 font-semibold">
                    ${stay.paymentPerNight.toLocaleString()}{" "}
                    <span className="text-gray-500 text-sm font-normal">
                      / night
                    </span>
                  </p>
                </div>
              </div>

              <button
                onClick={() => navigate(`/stay/${stay.id}`)}
                className="mt-3 w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:opacity-90 transition font-medium cursor-pointer"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Loader */}
      {visibleCount < stays.length && (
        <div ref={loaderRef} className="mt-10 flex flex-col items-center gap-3">
          <div className="relative">
            <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          </div>
          <span className="text-gray-500 text-sm font-medium">
            Loading more stays...
          </span>
        </div>
      )}
    </div>
    );
};

export default StayList;
