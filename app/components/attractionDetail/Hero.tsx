import React from 'react'
import {attractionsData} from '~/data/attractionsData';
import type { Attraction } from '~/data/attractionsData';
import {CheckCircle, Clock, DollarSign, Shirt, MapPin, Spline} from 'lucide-react';
import { useNavigate } from 'react-router';

interface HeroProps {
    id: number
}

const Hero: React.FC<HeroProps> = ({id}) => {
    const navigate = useNavigate();
    const attraction: Attraction | undefined = attractionsData.find(
        (item) => item.id === id
    );

    //Function to get Related Attractions
    const getRelatedAttractions = () => {
        if(!attraction) return [];
        const sameCategory = attractionsData.filter(
            (item) => item.category === attraction.category && item.id !== attraction.id
        );

        let related: Attraction[] = sameCategory.slice(0, 3);

        if(related.length < 3) {
            const remaining = 3 - related.length;
            const otherAttractions = attractionsData.filter(
                (item) => item.id !== attraction.id && !related.includes(item)
            );
            while (remaining > related.length && otherAttractions.length > 0) {
                const randIndex = Math.floor(Math.random() * otherAttractions.length);
                related.push(otherAttractions.splice(randIndex, 1)[0]);
            }
        }
        return related;
    };

    const relatedAttractions = getRelatedAttractions();

    return (
        <section className="mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-32">

            <div className="relative flex flex-col justify-center items-center mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-32 rounded-3xl min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] overflow-hidden group">
                <img
                    src={attraction?.image}
                    alt={attraction?.name}
                    className="absolute w-full h-full top-0 left-0 object-cover rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-110"
                />

                {/* Optional overlay for readability */}
                /*<div className="absolute w-full h-full top-0 left-0 bg-black/40 rounded-3xl"></div>*/

                {/* Optional text content */}
                <div className="absolute bottom-8 left-8 sm:bottom-10 sm:left-12 z-10 text-white text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
                        {attraction?.name || "Attraction"}
                    </h1>
                    {attraction?.slogan && (
                        <p className="mt-2 text-lg text-gray-200 max-w-md drop-shadow-md">
                            {attraction.slogan}
                        </p>
                    )}
                </div>
            </div>

            {/* Summary Section */}
            {attraction?.summary && (
                <div className="mt-8 sm:mt-10 bg-white rounded-2xl shadow-md p-6 sm:p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        Overview
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        {attraction.summary}
                    </p>
                </div>
            )}

            {/* Key Features Section */}
            {attraction?.keyFeatures && attraction.keyFeatures.length > 0 && (
                <div className="mt-8 sm:mt-10 bg-white rounded-2xl shadow-md p-6 sm:p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Key Features
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {attraction.keyFeatures.map((feature, index) => (
                            <li key={index} className="flex flex-col bg-gray-50 p-4 rounded-xl border hover:shadow-md transition">
                                <div className="flex items-center mb-2 space-x-2">
                                <CheckCircle className="text-blue-500 w-5 h-5 shrink-0" />
                                <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Plan Your Visit Section */}
            {attraction?.planYourVisit && (
                <div className="mt-8 sm:mt-10 bg-white rounded-2xl shadow-md p-6 sm:p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Plan Your Visit
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700">
                        <div className="flex items-start space-x-3">
                            <Clock className="text-blue-500 w-6 h-6 shrink-0" />
                            <div>
                                <h3 className="font-semibold text-gray-800">Opening Hours</h3>
                                <p className="text-gray-600">{attraction.planYourVisit.openingHours}</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <DollarSign className="text-green-500 w-6 h-6 shrink-0" />
                            <div>
                                <h3 className="font-semibold text-gray-800">Entrance Fees</h3>
                                <p className="text-gray-600">{attraction.planYourVisit.entranceFees}</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <Shirt className="text-purple-500 w-6 h-6 shrink-0" />
                            <div>
                                <h3 className="font-semibold text-gray-800">Dress Code</h3>
                                <p className="text-gray-600">{attraction.planYourVisit.dressCode}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Location Section */}
            {attraction?.location && (
                <div className="mt-8 sm:mt-10 bg-white rounded-2xl shadow-md p-6 sm:p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Location
                    </h2>

                    {/* Location Address */}
                    <div className="flex items-center space-x-3 mb-4 text-gray-700">
                        <MapPin className="text-red-500 w-6 h-6 shrink-0" />
                        <p className="text-gray-700 font-medium">{attraction.location}</p>
                    </div>

                    {/* Google Map Embed */}
                    <div className="rounded-xl overflow-hidden shadow-md">
                        <iframe
                            src={attraction.locationEmbed}
                            width="100%"
                            height="650"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            )}

            {/* Related Attractions Section */}
            {relatedAttractions.length > 0 && (
                <div className="mt-8 sm:mt-10 bg-white rounded-2xl shadow-md p-6 sm:p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Attractions</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {relatedAttractions.map((rel) => (
                            <div
                                key={rel.id}
                                className="cursor-pointer bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition"
                                onClick={() => navigate(`/attraction/${rel.id}`)}
                            >
                                <img
                                    src={rel.image}
                                    alt={rel.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-800">{rel.name}</h3>
                                    <p className="text-gray-600 text-sm">{rel.slogan}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}

export default Hero
