export interface Rental {
    id: number;
    name: string;
    slogan: string;
    logo: string;
    coverImage: string;
    description: string;
    location: string;
    contact: {
        phone: string;
        email: string;
        address: string;
    };
    operatingHours: string;
    services: string[];
    fleetCategories: string[];
    fleet: {
        id: number;
        name: string;
        type: string; // Car, Van, Bike, Boat, etc.
        brand: string;
        model: string;
        year: number;
        image: string;
        seats: number;
        peopleAllowed: number;
        transmission: string;
        pricePerHour: number;
        pricePerDay: number;
        pricePerWeek?: number;
        availability: boolean;
        driverOption: {
        selfDrive: boolean;
        withDriver: boolean;
        driverChargePerDay?: number; // optional
        };
    }[];
    termsAndConditions: {
        driverRequirements?: string;
        fuelPolicy?: string;
        insurance: string;
        cancellationPolicy: string;
    };
    ratings: {
        average: number;
        totalReviews: number;
    };
}

export const rentalsData: Rental[] = [
    {
        id: 1,
        name: "Jaffna Wheels Connect",
        slogan: "Your Journey, Our Wheels!",
        logo: "/rentalsimages/jwclogo.png",
        coverImage: "/rentalsimages/jwc_cover.png",
        description: "The leading car, van, and bike rental service in the heart of Jaffna.",
        location: "Main Street, Jaffna City",
        contact: {
            phone: "+94 21 555 1001",
            email: "contact@jwc.lk",
            address: "101 Main Street, Jaffna"
        },
        operatingHours: "Monday - Sunday: 8:00 AM - 8:00 PM",
        services: ["24/7 Roadside Assistance", "Airport Pickup/Drop-off", "Long-term Rentals"],
        fleetCategories: ["Car", "Van", "Bike"],
        fleet: [
            {
                id: 101, name: "Compact Hatchback", type: "Car", brand: "Suzuki", model: "Wagon R", year: 2022, image: "/rentalsimages/wagonr.jpg", seats: 4, peopleAllowed: 4, transmission: "Automatic",
                pricePerHour: 4, pricePerDay: 60, pricePerWeek: 360, availability: true,
                driverOption: { selfDrive: true, withDriver: false }
            },
            {
                id: 102, name: "Family Van", type: "Van", brand: "Toyota", model: "KDH", year: 2018, image: "/rentalsimages/kdh.jpg", seats: 15, peopleAllowed: 14, transmission: "Manual",
                pricePerHour: 5, pricePerDay: 72, pricePerWeek: 432, availability: true,
                driverOption: { selfDrive: false, withDriver: true, driverChargePerDay: 15 }
            },
            {
                id: 103, name: "Scooter", type: "Bike", brand: "Honda", model: "Dio", year: 2023, image: "/rentalsimages/dio.jpg", seats: 2, peopleAllowed: 2, transmission: "Automatic",
                pricePerHour: 1, pricePerDay: 20, pricePerWeek: 120, availability: true,
                driverOption: { selfDrive: true, withDriver: false }
            },
        ],
        termsAndConditions: {
            driverRequirements: "Valid Sri Lankan or International Driving Permit required for self-drive.",
            fuelPolicy: "Full to Full",
            insurance: "Comprehensive third-party liability insurance included.",
            cancellationPolicy: "Full refund if cancelled 48 hours before pickup."
        },
        ratings: { average: 4.5, totalReviews: 185 }
    },
    {
        id: 2,
        name: "Northern Drive Express",
        slogan: "Seamless Rentals, North to South.",
        logo: "/rentalsimages/ndelogo.png",
        coverImage: "/rentalsimages/nde_cover.png",
        description: "Offering reliable self-drive and chauffeur services for Cars, SUVs, and Vans.",
        location: "Kopay Road, Jaffna",
        contact: {
            phone: "+94 21 555 1002",
            email: "booking@nde.lk",
            address: "45 Kopay Road, Jaffna"
        },
        operatingHours: "24 Hours Service",
        services: ["Chauffeur Service", "One-way Rental (Colombo/Jaffna)", "Corporate Fleet Leasing"],
        fleetCategories: ["Car", "SUV", "Van"],
        fleet: [
            {
                id: 201, name: "Mid-Range Sedan", type: "Car", brand: "Toyota", model: "Allion", year: 2020, image: "/rentalsimages/allion.jpg", seats: 5, peopleAllowed: 4, transmission: "Automatic",
                pricePerHour: 4, pricePerDay: 60, pricePerWeek: 360, availability: true,
                driverOption: { selfDrive: true, withDriver: true, driverChargePerDay: 15 }
            },
            {
                id: 202, name: "Compact SUV", type: "SUV", brand: "Honda", model: "Vezel", year: 2019, image: "/rentalsimages/vezel.jpg", seats: 5, peopleAllowed: 4, transmission: "Automatic",
                pricePerHour: 5, pricePerDay: 72, pricePerWeek: 432, availability: true,
                driverOption: { selfDrive: true, withDriver: true, driverChargePerDay: 20 }
            },
        ],
        termsAndConditions: {
            driverRequirements: "Minimum 2 years driving experience.",
            fuelPolicy: "Full to Full",
            insurance: "Full comprehensive insurance with $40 excess.",
            cancellationPolicy: "25% fee for cancellations within 24 hours."
        },
        ratings: { average: 4.8, totalReviews: 320 }
    },
    {
        id: 3,
        name: "Palm Tree Rides",
        slogan: "Explore the Peninsula at Your Pace.",
        logo: "/rentalsimages/ptrl.png",
        coverImage: "/rentalsimages/ptr_cover.png",
        description: "Focusing on two-wheelers and economical cars perfect for local sightseeing.",
        location: "Point Pedro Road, Jaffna",
        contact: {
            phone: "+94 21 555 1003",
            email: "hello@palmtree-rides.lk",
            address: "7B Point Pedro Road, Jaffna"
        },
        operatingHours: "Monday - Saturday: 7:00 AM - 7:00 PM",
        services: ["Helmet Rental", "GPS Device Rental", "Tour Packages"],
        fleetCategories: ["Bike", "Scooter", "Economy Car"],
        fleet: [
            {
                id: 301, name: "Scooter Deluxe", type: "Scooter", brand: "Yamaha", model: "Fascino", year: 2024, image: "/rentalsimages/fascino.jpg", seats: 2, peopleAllowed: 2, transmission: "Automatic",
                pricePerHour: 4, pricePerDay: 30, pricePerWeek: 180, availability: true,
                driverOption: { selfDrive: true, withDriver: false }
            },
            {
                id: 302, name: "Small Car", type: "Car", brand: "Maruti", model: "Alto", year: 2017, image: "/rentalsimages/alto.jpg", seats: 4, peopleAllowed: 4, transmission: "Manual",
                pricePerHour: 4, pricePerDay: 50, pricePerWeek: 300, availability: false,
                driverOption: { selfDrive: true, withDriver: false }
            },
        ],
        termsAndConditions: {
            driverRequirements: "Motorcycle endorsement required for bike rentals.",
            fuelPolicy: "Return with the same fuel level as pickup.",
            insurance: "Basic accident cover (rider only).",
            cancellationPolicy: "Non-refundable deposits."
        },
        ratings: { average: 4.2, totalReviews: 95 }
    },
    {
        id: 4,
        name: "Valvai Vehicle Hire",
        slogan: "Reliable transport for every need.",
        logo: "/rentalsimages/vvhl.png",
        coverImage: "/rentalsimages/vvh_cover.png",
        description: "Specializing in larger vehicles and long-distance hires from Valvedditturai.",
        location: "Valvedditturai, Jaffna District",
        contact: {
            phone: "+94 21 555 1004",
            email: "valvaihire@mail.com",
            address: "22 VVT Main Road, Valvedditturai"
        },
        operatingHours: "24 Hours (Booking required after 10 PM)",
        services: ["Commercial Transport", "Long Haul Driver Service", "Event Transportation"],
        fleetCategories: ["Van", "Car"],
        fleet: [
            {
                id: 401, name: "Lagoon Cruiser", type: "Boat", brand: "Coastal Marine", model: "Tourist 18", year: 2018, image: "/rentalsimages/boat.jpg", seats: 8, peopleAllowed: 8, transmission: "Manual",
                pricePerHour: 15, pricePerDay: 130, availability: true,
                driverOption: { selfDrive: false, withDriver: true }
            },
            {
                id: 402, name: "Luxury Van", type: "Van", brand: "Toyota", model: "Hiace", year: 2021, image: "/rentalsimages/hiace.jpg", seats: 12, peopleAllowed: 11, transmission: "Automatic",
                pricePerHour: 6, pricePerDay: 60, pricePerWeek: 360, availability: true,
                driverOption: { selfDrive: false, withDriver: true, driverChargePerDay: 20 }
            },
        ],
        termsAndConditions: {
            driverRequirements: "Commercial Vehicle License required.",
            fuelPolicy: "Full to Full (Client to bear cost of driver's fuel for driver option).",
            insurance: "Basic accident cover.",
            cancellationPolicy: "24-hour notice required for van cancellations."
        },
        ratings: { average: 4.1, totalReviews: 55 }
    },
    {
        id: 5,
        name: "Nallur Car Services",
        slogan: "Convenience near the Temple.",
        logo: "/rentalsimages/ncslogo.png",
        coverImage: "/rentalsimages/ncs_cover.png",
        description: "Focusing on clean, modern compact and sedan cars for tourists and local travel.",
        location: "Near Nallur Kandaswamy Kovil, Jaffna",
        contact: {
            phone: "+94 21 555 1005",
            email: "bookings@nallurcars.lk",
            address: "5 Kovil Road, Nallur, Jaffna"
        },
        operatingHours: "Monday - Sunday: 9:00 AM - 7:00 PM",
        services: ["Child Seat Provision", "GPS Navigators", "Wedding Car Hire"],
        fleetCategories: ["Compact Car", "Sedan"],
        fleet: [
            {
                id: 501, name: "Premium Compact", type: "Car", brand: "Honda", model: "Fit GP5", year: 2018, image: "/rentalsimages/fitgp5.jpg", seats: 5, peopleAllowed: 4, transmission: "Automatic",
                pricePerHour: 3, pricePerDay: 20, pricePerWeek: 120, availability: true,
                driverOption: { selfDrive: true, withDriver: true, driverChargePerDay: 15 }
            },
            {
                id: 502, name: "Luxury Sedan", type: "Car", brand: "Toyota", model: "Premio", year: 2017, image: "/rentalsimages/premio.jpg", seats: 5, peopleAllowed: 4, transmission: "Automatic",
                pricePerHour: 3, pricePerDay: 30, pricePerWeek: 180, availability: true,
                driverOption: { selfDrive: true, withDriver: true, driverChargePerDay: 18 }
            },
        ],
        termsAndConditions: {
            driverRequirements: "Drivers must be over 25 for Luxury Sedan.",
            fuelPolicy: "Full to Full (Penalty applies for partial fill-up).",
            insurance: "Fully covered insurance with zero customer excess for Sedan.",
            cancellationPolicy: "Free cancellation up to 72 hours. 50% charge after."
        },
        ratings: { average: 4.7, totalReviews: 120 }
        },
        {
            id: 6,
        name: "Beachside Rentals",
        slogan: "Sun, Sand, and Self-Drive.",
        logo: "/rentalsimages/brlogo.png",
        coverImage: "/rentalsimages/br_cover.png",
        description: "High-end vehicles and SUVs suitable for off-road adventure and comfort.",
        location: "Casuarina Beach Area, Jaffna",
        contact: {
            phone: "+94 21 555 1006",
            email: "reserve@beachsiderentals.lk",
            address: "30 Coastal Road, Karainagar"
        },
        operatingHours: "9:00 AM - 6:00 PM (Daily)",
        services: ["4x4 Specialist", "Premium Chauffeur", "Custom Tour Planning"],
        fleetCategories: ["SUV", "Van", "Luxury Car"],
        fleet: [
            {
                id: 601, name: "Off-Road SUV", type: "SUV", brand: "Mitsubishi", model: "Montero", year: 2015, image: "/rentalsimages/montero.jpg", seats: 7, peopleAllowed: 6, transmission: "Automatic",
                pricePerHour: 4, pricePerDay: 40, pricePerWeek: 240, availability: true,
                driverOption: { selfDrive: true, withDriver: true, driverChargePerDay: 20 }
            },
            {
                id: 602, name: "Executive Sedan", type: "Car", brand: "Mercedes-Benz", model: "C-Class", year: 2019, image: "/rentalsimages/c-class.jpg", seats: 5, peopleAllowed: 4, transmission: "Automatic",
                pricePerHour: 18, pricePerDay: 180, pricePerWeek: 1080, availability: true,
                driverOption: { selfDrive: false, withDriver: true, driverChargePerDay: 35 }
            },
        ],
        termsAndConditions: {
            driverRequirements: "Credit Card hold required for security deposit.",
            fuelPolicy: "Full to Full (Diesel vehicles must only use premium fuel).",
            insurance: "Zero-Deductible policy option available for premium vehicles.",
            cancellationPolicy: "20% charge for all cancellations."
        },
        ratings: { average: 4.6, totalReviews: 210 }
    },
    {
        id: 7,
        name: "Road Runner Jaffna",
        slogan: "Quick pickup, smooth journey.",
        logo: "/rentalsimages/rrjlogo.png",
        coverImage: "/rentalsimages/rrj_cover.jpg",
        description: "Affordable and fast rentals focusing on low-cost, fuel-efficient vehicles.",
        location: "Chundikuli, Jaffna",
        contact: {
            phone: "+94 21 555 1007",
            email: "info@roadrunnerjaffna.lk",
            address: "88 Hospital Road, Chundikuli"
        },
        operatingHours: "6:00 AM - 10:00 PM (Daily)",
        services: ["Budget-friendly Options", "Short-Term Hourly Rental", "Delivery Service"],
        fleetCategories: ["Economy Car", "Small Van"],
        fleet: [
            {
                id: 701, name: "Economy Car", type: "Car", brand: "Suzuki", model: "Celerio", year: 2019, image: "/rentalsimages/celerio.jpg", seats: 4, peopleAllowed: 4, transmission: "Automatic",
                pricePerHour: 2, pricePerDay: 20, pricePerWeek: 120, availability: true,
                driverOption: { selfDrive: true, withDriver: false }
            },
            {
                id: 702, name: "Small Cargo Van", type: "Van", brand: "Micro", model: "Tourino", year: 2020, image: "/rentalsimages/tourino.jpg", seats: 5, peopleAllowed: 4, transmission: "Manual",
                pricePerHour: 3, pricePerDay: 30, pricePerWeek: 180, availability: true,
                driverOption: { selfDrive: true, withDriver: false }
            },
        ],
        termsAndConditions: {
            driverRequirements: "Valid local ID and driver's license copy required.",
            fuelPolicy: "Return with the initial fuel level.",
            insurance: "Third-party insurance only.",
            cancellationPolicy: "Must cancel at least 3 hours prior to pickup."
        },
        ratings: { average: 3.9, totalReviews: 70 }
    },
    {
        id: 8,
        name: "Thaladi Transport",
        slogan: "Family vehicles with driver options.",
        logo: "/rentalsimages/ttlogo.png",
        coverImage: "/rentalsimages/tt_cover.jpg",
        description: "Specializing in large, comfortable vehicles for family trips and tours around Jaffna and the region.",
        location: "Palaly Road, Jaffna",
        contact: {
            phone: "+94 21 555 1008",
            email: "thaladitours@mail.com",
            address: "20 Palaly Road, Jaffna"
        },
        operatingHours: "24/7 Phone Support for Bookings",
        services: ["Guided Tours", "Multi-day packages", "Minibus Hire"],
        fleetCategories: ["Van", "Car", "Minibus"],
        fleet: [
            {
                id: 801, name: "Premium Van", type: "Van", brand: "Toyota", model: "Hiace Grand Cabin", year: 2023, image: "/rentalsimages/hiace.jpg", seats: 10, peopleAllowed: 9, transmission: "Automatic",
                pricePerHour: 6, pricePerDay: 60, pricePerWeek: 360, availability: true,
                driverOption: { selfDrive: false, withDriver: true, driverChargePerDay: 15 }
            },
            {
                id: 802, name: "Full-Size Sedan", type: "Car", brand: "Nissan", model: "Bluebird Sylphy", year: 2016, image: "/rentalsimages/bluebird.jpg", seats: 5, peopleAllowed: 4, transmission: "Automatic",
                pricePerHour: 3, pricePerDay: 30, pricePerWeek: 170, availability: true,
                driverOption: { selfDrive: true, withDriver: true, driverChargePerDay: 15 }
            },
        ],
        termsAndConditions: {
            driverRequirements: "Drivers provided for all Van and Minibus hires.",
            fuelPolicy: "Included in the driver package price (mileage limits apply).",
            insurance: "Travel insurance included with all driver-inclusive packages.",
            cancellationPolicy: "2-day minimum notice for Van/Minibus."
        },
        ratings: { average: 4.4, totalReviews: 150 }
    },
    {
        id: 9,
        name: "Peninsula Power Rentals",
        slogan: "Powering your Jaffna adventure.",
        logo: "/rentalsimages/pprlogo.png",
        coverImage: "/rentalsimages/ppr_cover.png",
        description: "Diverse fleet of cars, SUVs, and motorbikes for tourist freedom.",
        location: "Kondavil, Jaffna",
        contact: {
            phone: "+94 21 555 1009",
            email: "book@ppr.lk",
            address: "12 A9 Road, Kondavil"
        },
        operatingHours: "9:00 AM - 5:00 PM (Monday - Saturday)",
        services: ["Motorbike Safaris", "Multi-Vehicle Booking Discounts", "Luggage Transfer"],
        fleetCategories: ["Bike", "Car", "SUV"],
        fleet: [
            {
                id: 901, name: "Adventure Bike", type: "Bike", brand: "Royal Enfield", model: "Himalayan", year: 2020, image: "/rentalsimages/royal.jpg", seats: 2, peopleAllowed: 2, transmission: "Manual",
                pricePerHour: 1, pricePerDay: 10, pricePerWeek: 60, availability: true,
                driverOption: { selfDrive: true, withDriver: false }
            },
            {
                id: 902, name: "Mid-Range SUV", type: "SUV", brand: "DFSK", model: "Glory 580", year: 2022, image: "/rentalsimages/dfsk.jpg", seats: 7, peopleAllowed: 6, transmission: "Automatic",
                pricePerHour: 3.5, pricePerDay: 35, pricePerWeek: 210, availability: true,
                driverOption: { selfDrive: true, withDriver: true, driverChargePerDay: 18 }
            },
        ],
        termsAndConditions: {
            driverRequirements: "Full Motorcycle License required for bikes (Helmet must be worn).",
            fuelPolicy: "Full to Full.",
            insurance: "Basic insurance cover on bikes (high deductible).",
            cancellationPolicy: "25% non-refundable deposit for all bookings."
        },
        ratings: { average: 4.3, totalReviews: 110 }
    }
]