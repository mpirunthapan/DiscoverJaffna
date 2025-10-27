import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router';
import { rentalsData } from '~/data/rentalsData'
import type { Rental } from '~/data/rentalsData'
import {Car,Truck,Bike,Ship,Bus} from "lucide-react"

interface ListProps {
    filters: { search: string; type: string, price: string };
}

const List: React.FC<ListProps> = ({filters}) => {
    const navigate = useNavigate();
    const [filteredData, setFilteredData] = useState<Rental[]>(rentalsData);

    useEffect(() => {
        let filtered = rentalsData;

        if (filters.search) {
            filtered = filtered.filter((r) =>
                r.name.toLowerCase().includes(filters.search.toLowerCase())
            );
        }

        if (filters.type) {
            filtered = filtered.filter((r) =>
                r.fleet.some(f => f.type.toLowerCase() === filters.type.toLowerCase())
            );
        }

        if (filters.price) {
            filtered = filtered.filter((r) =>
                r.fleet.some((f) => {
                    if (filters.price === "Low") return f.pricePerDay < 50;
                    if (filters.price === "Medium") return f.pricePerDay >= 50 && f.pricePerDay <= 100;
                    if (filters.price === "High") return f.pricePerDay > 100;
                    return false;
                })
            );
        }

        setFilteredData(filtered);
    }, [filters]);

    const getIcon = (type: string) => {
    switch (type.toLowerCase()) {
        case "car":
            return <Car className="w-5 h-5 text-blue-600" />;
        case "van":
            return <Bus className="w-5 h-5 text-green-600" />;
        case "suv":
            return <Truck className="w-5 h-5 text-purple-600" />;
        case "bike":
            return <Bike className="w-5 h-5 text-orange-600" />;
        case "boat":
            return <Ship className="w-5 h-5 text-cyan-600" />;
        default:
            return null;
        }
    };

  return (
    <div className='bg-gray-50 py-10 px-6'>
        {/* Rental Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {filteredData.map((rental) => (
                <div
                    key={rental.id}
                    className='bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 overflow-hidden'
                >
                    <img 
                        src={rental.coverImage} 
                        alt={rental.name}
                        className='w-full h-56 object-cover'
                    />
                    <div className='p-5'>
                        <h3 className='text-lg font-semibold text-gray-800'>{rental.name}</h3>
                        <span className='text-yellow-500 text-sm font-semibold'>
                            ⭐ {rental.ratings.average}
                            <span className='text-gray-500 text-xs font-normal'>
                                ({rental.ratings.totalReviews} reviews)
                            </span>
                        </span>
                        <p className='text-gray-600 text-sm mb-1'>{rental.slogan}</p>
                        {/* Icons */}
                        <div className='flex flex-wrap gap-3 mt-2'>
                            {Array.from(new Set(rental.fleet.map((f) => f.type))).map(
                                (type, idx) => (
                                    <div
                                    key={idx}
                                    className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                                    >
                                    {getIcon(type)}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    <button
                    onClick={() => navigate(`/rental/${rental.id}`)}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg hover:opacity-90 transition font-medium cursor-pointer"
                >
                    View Details
                </button>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default List
