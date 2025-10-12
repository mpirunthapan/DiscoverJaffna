import React, { useState } from 'react'
import { useParams } from 'react-router'
import { staysData } from '~/data/staysData';
import Navbar from '~/components/main/Navbar';
import Footer from '~/components/main/Footer';
import {
  FaPhone, FaEnvelope, FaGlobe, FaSpa, FaWifi, FaUtensils,
  FaCar, FaBus, FaUsers, FaConciergeBell, FaFire, FaWheelchair,
  FaDumbbell,
  FaSwimmingPool,
  FaDog, 
} from 'react-icons/fa';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    spa: FaSpa,
    wifi: FaWifi,
    utensils: FaUtensils,
    car: FaCar,
    bus: FaBus,
    family: FaUsers,
    server: FaConciergeBell,
    grill: FaFire,
    wheelchair: FaWheelchair,
    dumbbell: FaDumbbell,
    dog: FaDog,
    pool: FaSwimmingPool
};

const stayDetail: React.FC = () => {
    const { id } = useParams();
    const stay = staysData.find((s) => s.id === Number(id));
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    if (!stay) {
        return <p className="text-center text-red-600 mt-20 text-lg">Stay not found</p>;
    }

    const openPopup = (index: number) => {
        setSelectedIndex(index);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedIndex(null);
    };

    const showNext = () => {
        if (selectedIndex === null) return;
        setSelectedIndex((prev) => (prev! + 1) % stay.images.length);
    };

    const showPrev = () => {
        if (selectedIndex === null) return;
        setSelectedIndex((prev) =>
        prev! === 0 ? stay.images.length - 1 : prev! - 1
        );
    };

    return (
        <>
        <Navbar />

        <main className="max-w-6xl mx-auto px-4 md:px-8 py-10 space-y-10">
            {/* Name & Address */}
            <header className="space-y-2">
            <h1 className="text-4xl font-bold text-gray-900">{stay.name}</h1>
            <p className="text-gray-500 text-lg">{stay.address}</p>
            </header>

            {/* Image Gallery */}
            <section className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {/* Large image */}
            <div className="col-span-3 md:col-span-3 row-span-2 relative">
                <img
                src={`/staysimages/${stay.images[0]}`}
                alt={stay.name}
                className="w-full h-80 object-cover rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
                onClick={() => openPopup(0)}
                />
            </div>

            {/* Small images */}
            {stay.images.slice(1, 5).map((img, index) => {
                const globalIndex = index + 1;
                const isLastVisible = index === 3 && stay.images.length > 5;
                return (
                <div
                    key={globalIndex}
                    className="relative"
                    onClick={() => openPopup(globalIndex)}
                >
                    <img
                    src={`/staysimages/${img}`}
                    alt={`${stay.name} ${globalIndex + 1}`}
                    className="w-full h-40 object-cover rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer"
                    />
                    {isLastVisible && (
                    <>
                        <div className="absolute inset-0 bg-black/50 rounded-2xl" />
                        <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
                        +{stay.images.length - 5}
                        </span>
                    </>
                    )}
                </div>
                );
            })}
            </section>

            {/* Popup */}
            {isPopupOpen && selectedIndex !== null && (
            <div className="fixed inset-0 bg-black/90 flex flex-col justify-center items-center z-50 p-4">
                <button
                onClick={closePopup}
                className="cursor-pointer absolute top-6 right-8 bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
                >
                ✕ Close
                </button>

                <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center">
                    <button
                    onClick={showPrev}
                    className="text-white text-4xl px-4 hover:scale-110 transition-transform cursor-pointer"
                    >
                    ‹
                    </button>

                    <img
                    src={`/staysimages/${stay.images[selectedIndex]}`}
                    alt={`Image ${selectedIndex + 1}`}
                    className="max-h-[80vh] rounded-2xl object-contain shadow-lg"
                    />

                    <button
                    onClick={showNext}
                    className="text-white text-4xl px-4 hover:scale-110 transition-transform cursor-pointer"
                    >
                    ›
                    </button>
                </div>
                <p className="text-white text-lg font-medium">
                    {selectedIndex + 1} / {stay.images.length}
                </p>
                </div>
            </div>
            )}

            {/* About */}
            <section className="bg-gray-50 p-6 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">About this Hotel</h2>
            <p className="text-gray-700 leading-relaxed">{stay.aboutProperty}</p>
            </section>

            {/* Amenities */}
            <section className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Amenities</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {stay.amenities.map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                    <div
                    key={index}
                    className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-xl shadow-sm hover:bg-gray-200 transition"
                    >
                    {Icon && <Icon className="text-gray-700 text-lg" />}
                    <span className="capitalize text-gray-900">{item.amenity}</span>
                    </div>
                );
                })}
            </div>
            </section>

            {/* Hotel Policies */}
            <section className="bg-gray-50 p-6 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Hotel Policies</h2>
            <ul className="text-gray-700 space-y-2 list-disc list-inside">
                <li>Pets: {stay.hotelPolicies.pets}</li>
                <li>Payment: {stay.hotelPolicies.payment}</li>
                <li>Smoking: {stay.hotelPolicies.smoking}</li>
                {stay.hotelPolicies.checkIn && <li>Check-in: {stay.hotelPolicies.checkIn}</li>}
                {stay.hotelPolicies.checkout && <li>Checkout: {stay.hotelPolicies.checkout}</li>}
            </ul>
            </section>

            {/* Contact */}
            <section className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Contact</h2>
            <ul className="text-gray-700 space-y-2">
                <li className="flex items-center gap-2"><FaPhone className="text-gray-600" /> {stay.contact.phone}</li>
                {stay.contact.email && (
                <li className="flex items-center gap-2"><FaEnvelope className="text-gray-600" /> {stay.contact.email}</li>
                )}
                {stay.contact.website && (
                <li className="flex items-center gap-2">
                    <FaGlobe className="text-gray-600" />
                    <a href={stay.contact.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {stay.contact.website}
                    </a>
                </li>
                )}
            </ul>
            </section>

            {/* Location */}
            <section className="bg-gray-50 p-6 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Location</h2>
            <div className="w-full h-80 overflow-hidden rounded-2xl shadow-md">
                <iframe
                src={stay.locationEmbed}
                width="100%"
                height="650"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title={stay.name}
                ></iframe>
            </div>
            </section>
        </main>

        <Footer />
        </>
    );
};

export default stayDetail;
