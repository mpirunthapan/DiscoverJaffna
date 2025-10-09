export interface Stay {
    id: number;
    name: string;
    summary: string;
    aboutProperty: string;
    address: string;
    images: string[];
    amenities: {
        icon: string;
        amenity: string
    }[];
    contact: {
        phone: string;
        email?: string;
        website?: string;
    };
    hotelPolicies: {
        pets: string;
        payment: string;
        smoking: string;
        checkIn?: string;
        checkout?: string;
    };
    locationEmbed: string;
    category: string;
    review: number;
    paymentPerNight: number;
}

export const staysData: Stay[] = [
    {
    id: 1,
    name: "Jetwing Jaffna",
    summary: "Elegant hotel with a sun terrace, restaurant, bar, and free on-site private parking available.",
    aboutProperty: "Comfortable Accommodations: Jetwing Jaffna in Jaffna offers air-conditioned rooms with balconies, private bathrooms, and modern amenities. Each room includes a work desk, minibar, and free WiFi, ensuring a pleasant stay. Dining and Leisure: The hotel features a family-friendly restaurant serving Indian cuisine with halal options. Guests can relax on the sun terrace or enjoy the bar, which offers a variety of beverages. Additional facilities include a lounge, outdoor seating area, and free on-site private parking. Convenient Location: Located 16 km from Jaffna International Airport, the hotel is close to attractions such as Jaffna Fort (less than 1 km) and Jaffna Public Library (6-minute walk). Nearby points of interest include Nallur Kandaswamy Temple (2 km) and Naguleswaram Temple (20 km). Guest Satisfaction: Highly rated by guests for its attentive staff and excellent service support, the hotel also receives praise for its bar and convenient location.",
    address: "37 Mahatma Gandhi Road, Jaffna",
    images: ["jetwing1.jpg", "jetwing2.jpg"],
    amenities: [
        { icon: "spa", amenity: "Spa" },
        { icon: "wifi", amenity: "Free Wi-Fi" },
        { icon: "utensils", amenity: "Restaurant" },
        { icon: "car", amenity: "Parking" },
        { icon: "bus", amenity: "Airport Shuttle"},
        { icon: "family", amenity: "Family Rooms"},
        { icon: "server", amenity: "Room Service"},
    ],
    contact: {
        phone: "+94 114 709 400",
        email: "resv.jaffna@jetwinghotels.com",
        website: "https://www.jetwinghotels.com/jetwingjaffna/"
    },
    hotelPolicies: {
        pets: "Not allowed",
        payment: "Credit/Debit cards, Cash",
        smoking: "Non-smoking rooms available",
        checkIn: "From 14:00 Guests are required to show a photo identification and credit card upon check-in. You'll need to let the property know in advance what time you'll arrive.",
        checkout: "Until 12:30"
    },
    locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.191216247006!2d80.01107957488304!3d9.664697078714779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe56aa3b5ed5d1%3A0x833c08ea7eb5685e!2sJetwing%20Jaffna!5e0!3m2!1sen!2slk!4v1759997666040!5m2!1sen!2slk",
    category: "Hotel",
    review: 8.0,
    paymentPerNight: 75
    },
    {
    id: 2,
    name: "North Gate Hotel",
    summary: "Elegant accommodation offers a year-round outdoor swimming pool, sauna, fitness centre, and restaurant.",
    aboutProperty: "Comfortable Accommodations: NorthGate Jaffna in Jaffna offers family rooms with air-conditioning, balconies, and private bathrooms. Each room includes a tea and coffee maker, minibar, and free WiFi. Exceptional Facilities: Guests can enjoy a sauna, fitness centre, terrace, restaurant, bar, and a year-round outdoor swimming pool. Additional amenities include a lift, 24-hour front desk, and free on-site private parking. Dining Experience: The hotel serves Indian, local, and international cuisines with vegetarian, gluten-free, and dairy-free options. A buffet breakfast is provided daily. Prime Location: Located 16 km from Jaffna International Airport, the hotel is a 5-minute walk from Jaffna Railway Station and near attractions such as Nallur Kandaswamy Temple and Jaffna Fort.",
    address: "136 Station Road, Jaffna",
    images: ["northgate1.jpg", "northgate2.jpg"],
    amenities: [
        { icon: "wifi", amenity: "Free Wi-Fi" },
        { icon: "utensils", amenity: "Restaurant" },
        { icon: "car", amenity: "Parking" },
        { icon: "dumbbell", amenity: "Fitness centre"},
        { icon: "family", amenity: "Family Rooms"},
        { icon: "server", amenity: "Room Service"},
        { icon: "pool", amenity: "Outdoor Swimming"}
    ],
    contact: {
        phone: "+94 212 030 500",
        email: "northgatehoteljaffna@outlook.com",
        website: "https://northgatejaffna.com/"
    },
    hotelPolicies: {
        pets: "Not allowed",
        payment: "Credit cards accepted",
        smoking: "Designated areas only",
        checkIn: "From 14:00 to 00:00 Guests are required to show a photo identification and credit card upon check-in. You'll need to let the property know in advance what time you'll arrive.",
        checkout: "Until 12:00"
    },
    locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.1935519932726!2d80.01800857488304!3d9.664497278718107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe56a7d1ed8cf1%3A0x2d05dd486154c5b1!2sNorth%20Gate%20Hotel!5e0!3m2!1sen!2slk!4v1759984002105!5m2!1sen!2slk",
    category: "Hotel",
    review: 8.5,
    paymentPerNight: 75
    },
    {
    id: 3,
    name: "Fox Jaffna by Fox Resorts",
    summary: "This resort offers spa facilities, a swimming pool with a view, and a delightful restaurant.",
    aboutProperty: "Comfortable Accommodations: Fox Jaffna in Jaffna offers family rooms with air-conditioning, private bathrooms, and garden views. Each room includes a tea and coffee maker, refrigerator, and free toiletries. Exceptional Facilities: Guests enjoy spa facilities, a swimming pool with a view, sun terrace, and lush garden. The resort provides free WiFi, a fitness centre, and a lounge. Dining Experience: The family-friendly restaurant serves Chinese, British, French, Indian, and local cuisines. Breakfast options include continental, American, and full English. Prime Location: Located 11 km from Jaffna International Airport, the resort is near attractions such as Nallur Kandaswamy Temple (4.4 km) and Jaffna Fort (5 km). Free on-site parking is available.", 
    address: "No 257, K.K.S Road Kokuvil, Jaffna",
    images: ["fox1.jpg", "fox2.jpg"],
    amenities: [
        { icon: "spa", amenity: "Spa" },
        { icon: "wifi", amenity: "Free Wi-Fi" },
        { icon: "utensils", amenity: "Restaurant" },
        { icon: "car", amenity: "Parking" },
        { icon: "bus", amenity: "Airport Shuttle"},
        { icon: "dumbbell", amenity: "Fitness centre"},
        { icon: "family", amenity: "Family Rooms"},
        { icon: "server", amenity: "Room Service"},
        { icon: "dog", amenity: "Pets Allowed"},
        { icon: "pool", amenity: "Outdoor Swimming"}
    ],
    contact: {
        phone: "+94 763 084 518",
        email: "sales@foxresorts.com",
        website: "https://www.foxresorts.com/fox-jaffna"
    },
    hotelPolicies: {
        pets: "Allowed on request",
        payment: "Cards & Cash",
        smoking: "Non-smoking property",
        checkIn: "From 14:00 Guests are required to show a photo identification and credit card upon check-in. You'll need to let the property know in advance what time you'll arrive.",
        checkout: "Until 12:00"
    },
    locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.761319600368!2d80.01391347488342!3d9.701401078101776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe5400651eab55%3A0xa03195dd82b88b76!2sFox%20Jaffna%20by%20Fox%20Resorts!5e0!3m2!1sen!2slk!4v1759976838316!5m2!1sen!2slk",
    category: "Resort",
    review: 8.9,
    paymentPerNight: 60
    },
    {
    id: 4,
    name: "The Thinnai",
    summary: "This property offers a year-round outdoor swimming pool, fitness centre, restaurant, and bar.",
    aboutProperty: "Comfortable Accommodations: The Thinnai in Jaffna offers family rooms with air-conditioning, private bathrooms, and modern amenities. Each room includes a work desk, TV, and free WiFi, ensuring a pleasant stay. Exceptional Facilities: Guests can enjoy a fitness centre, sun terrace, and lush garden. The hotel features a year-round outdoor swimming pool, fitness room, and outdoor fireplace. Additional facilities include a games room, live music, and a pool bar. Dining Experience: The modern, family-friendly restaurant serves local and Asian cuisines with brunch, lunch, and dinner options. Breakfast includes continental, American, buffet, full English/Irish, vegetarian, halal, and Asian selections. Prime Location: Located 16 km from Jaffna International Airport, the hotel is close to Nallur Kandaswamy Temple (12-minute walk) and Jaffna Railway Station (2 km). Nearby attractions include Jaffna Fort (4 km) and Jaffna Public Library (3 km).",
    address: "No. 86, Palaly Road, Thirunelnveli, Jaffna",
    images: ["thinnai1.jpg", "thinnai2.jpg"],
    amenities: [
        { icon: "wifi", amenity: "Free Wi-Fi" },
        { icon: "utensils", amenity: "2 Restaurants" },
        { icon: "car", amenity: "Parking" },
        { icon: "bus", amenity: "Airport Shuttle"},
        { icon: "family", amenity: "Family Rooms"},
        { icon: "server", amenity: "Room Service"},
        { icon: "dumbbell", amenity: "Fitness centre"},
        { icon: "pool", amenity: "Outdoor Swimming"}
    ],
    contact: {
        phone: "+94 212 030 400",
        email: "info@thethinnai.com",
        website: "https://www.thethinnai.com/"
    },
    hotelPolicies: {
        pets: "Not allowed",
        payment: "Credit cards accepted",
        smoking: "Non-smoking rooms",
        checkIn: "From 14:00 Guests are required to show a photo identification and credit card upon check-in. You'll need to let the property know in advance what time you'll arrive.",
        checkout: "Until 12:00"
    },
    locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.929203382364!2d80.02365767488324!3d9.687083778341213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe546ae3b5ef69%3A0x8f6e089639bef913!2sThe%20Thinnai!5e0!3m2!1sen!2slk!4v1759944223159!5m2!1sen!2slk",
    category: "Hotel",
    review: 8.9,
    paymentPerNight: 85
    },
    {
    id: 5,
    name: "Jaffna Heritage Hotel",
    summary: "This spacious holiday home offers a terrace, garden views, and free on-site private parking.",
    address: "Raja street, Kopay, Jaffna",
    aboutProperty: "Spacious Accommodation: Nallur Heritage Villa in Jaffna offers a spacious holiday home with two bedrooms and four bathrooms. The property features a terrace and free WiFi, ensuring a comfortable stay. Modern Amenities: Guests can enjoy air-conditioning, a kitchenette, washing machine, and a fully equipped kitchen. Additional amenities include a TV and garden views, providing a relaxing environment. Convenient Location: Located 11 km from Jaffna International Airport, the villa is close to attractions such as Nallur Kandaswamy Temple (6 km), Nilavarai Well (7 km), and Jaffna Railway Station (8 km). Free on-site private parking is available.",
    images: ["heritage1.jpg", "heritage2.jpg"],
    amenities: [
        { icon: "wifi", amenity: "Free Wi-Fi" },
        { icon: "utensils", amenity: "Kitchen" },
        { icon: "car", amenity: "Parking" },
        { icon: "family", amenity: "Family Rooms"},
        { icon: "server", amenity: "Room Service"},
    ],
    contact: {
        phone: "+94 212 222 424",
        email: "jhh@stpleisure.com",
        website: "https://jaffnaheritage.lk/"
    },
    hotelPolicies: {
        pets: "Not allowed",
        payment: "Cash & Cards",
        smoking: "Not allowed",
        checkIn: "From 14:00 to 23:00 You'll need to let the property know in advance what time you'll arrive.",
        checkout: "From 08:00 to 10:00"
    },
    locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.1173467011254!2d80.02528707488305!3d9.671013778609474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe53ffb67748c3%3A0xa0dbe4f14b39a891!2sJaffna%20Heritage%20Hotel!5e0!3m2!1sen!2slk!4v1759943290725!5m2!1sen!2slk",
    category: "Hotel",
    review: 10.0,
    paymentPerNight: 40
    },
    {
    id: 6,
    name: "Green Grass Hotel",
    summary: "This property boasts an outdoor swimming pool, restaurant, bar, and free on-site private parking.",
    aboutProperty: "",
    address: "No 33, Asservatham Lane Hospital Road , Jaffna",
    images: ["greengrass1.jpg", "greengrass2.jpg"],
    amenities: [
        { icon: "wifi", amenity: "Free Wi-Fi" },
        { icon: "utensils", amenity: "Restaurant" },
        { icon: "car", amenity: "Parking" },
        { icon: "bus", amenity: "Airport Shuttle"},
        { icon: "family", amenity: "Family Rooms"},
        { icon: "server", amenity: "Room Service"},
        { icon: "dumbbell", amenity: "Fitness centre"},
        { icon: "pool", amenity: "Outdoor Swimming"}
    ],
        contact: {
        phone: "+94 212 224 385",
        email: "info@greengrasshotel.com",
    },
    hotelPolicies: {
        pets: "Not allowed",
        payment: "Cash & Cards",
        smoking: "Allowed in designated areas",
        checkIn: "From 11:30",
        checkout: "Until 10:30"
    },
    locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.193179072027!2d80.01936377488302!3d9.664529178717604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe56a8870dd503%3A0xb385d7929c94c5f2!2sGreen%20Grass%20Hotel%20%26%20Restaurant!5e0!3m2!1sen!2slk!4v1759941684963!5m2!1sen!2slk",
    category: "Hotel",
    review: 6.0,
    paymentPerNight: 20
    },
    {
    id: 7,
    name: "Thambu Illam",
    summary: "Offering a garden, outdoor swimming pool, restaurant, and free on-site private parking for guests.",
    aboutProperty: "Comfortable Accommodations: Thambu Illam in Jaffna offers family rooms with air-conditioning, private bathrooms, and garden views. Each room includes a tea and coffee maker, bidet, and free toiletries. Exceptional Facilities: Guests enjoy a swimming pool with a view, outdoor dining area, and free WiFi. Additional amenities include a restaurant, garden, and outdoor furniture. Convenient Location: Located 14 km from Jaffna International Airport, the hotel is near Nallur Kandaswamy Temple (2 km) and Jaffna Railway Station (2 km). Other attractions include Jaffna Fort (3 km) and Naguleswaram Temple (18 km). Guest Satisfaction: Highly rated for its swimming pool, attentive staff, and breakfast provided by the property.",
    address: "107 Brown Road, Jaffna",
    images: ["thambu1.jpg", "thambu2.jpg"],
    amenities: [
        { icon: "wifi", amenity: "Free Wi-Fi" },
        { icon: "utensils", amenity: "Restaurant" },
        { icon: "car", amenity: "Parking" },
        { icon: "family", amenity: "Family Rooms"},
        { icon: "server", amenity: "Room Service"},
        { icon: "pool", amenity: "Outdoor Swimming"}
    ],
    contact: {
        phone: "+94 76 455 0644",
        email: "manager@thambuillam.com",
        website: "https://thambuillam.com/"
    },
    hotelPolicies: {
        pets: "Not allowed",
        payment: "Cash & Cards",
        smoking: "Non-smoking rooms",
        checkIn: "From 14:00 to 22:00",
        checkout: "Available 24 hours"
    },
    locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.0338537053763!2d80.01425427488316!3d9.678148478490415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe557078f6d6cb%3A0x94e08d63a5078d74!2sThambu%20Illam!5e0!3m2!1sen!2slk!4v1759941538237!5m2!1sen!2slk",
    category: "Boutique Hotel",
    review: 9.1,
    paymentPerNight: 100
    },
    {
    id: 8,
    name: "Jaffna City Palace Hotel",
    summary: "Offering a garden, restaurant, and free on-site private parking, this property ensures comfort.",
    aboutProperty: "Comfortable Accommodations: Jaffna City Palace Hotel in Jaffna offers family rooms with air-conditioning, balconies, and private bathrooms. Each room includes a work desk, TV, and free toiletries. Dining and Leisure: Guests can enjoy a restaurant serving seafood, local, Asian, international, and barbecue grill cuisines. Breakfast options include American, à la carte, vegetarian, halal, and Asian. The hotel features a garden, lounge, and free WiFi. Convenient Services: The hotel provides private check-in and check-out, a 24-hour front desk, and free on-site parking. Additional services include room service, housekeeping, and bicycle parking. Local Attractions: Located 17 km from Jaffna International Airport, the hotel is near Jaffna Railway Station (2 km) and Nallur Kandaswamy Temple (2 km). Other points of interest include Jaffna Fort (3.2 km) and Jaffna Public Library (2.9 km).",
    address: "09 Perinpanayagam Lane, Jaffna",
    images: ["citypalace1.jpg", "citypalace2.jpg"],
    amenities: [
        { icon: "wifi", amenity: "Free Wi-Fi" },
        { icon: "utensils", amenity: "Restaurant" },
        { icon: "car", amenity: "Parking" },
        { icon: "bus", amenity: "Airport Shuttle"},
        { icon: "family", amenity: "Family Rooms"},
        { icon: "server", amenity: "Room Service"},
    ],
    contact: {
        phone: "+94 212 221 661",
        email: "info@citypalacejaffna.com",
        website: "https://www.jaffnacitypalace.com/"
    },
    hotelPolicies: {
        pets: "Not allowed",
        payment: "Cash & Cards",
        smoking: "Non-smoking rooms",
        checkIn: "From 14:00 to 22:30",
        checkout: "From 11:00 to 12:00"
    },
    locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.2265325801854!2d80.02952637488299!3d9.661675678765182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe5718c0d7da9f%3A0xd3e3a8ba28b93bde!2sJaffna%20City%20Palace%20Hotel!5e0!3m2!1sen!2slk!4v1759940828222!5m2!1sen!2slk",
    category: "Hotel",
    review: 9.0,
    paymentPerNight: 30
    },
    {
    id: 9,
    name: "The Valampuri",
    summary: "A vibrant restaurant and bar complement a year-round outdoor swimming pool at this welcoming hotel.",
    aboutProperty: "Comfortable Accommodations: The Valampuri in Jaffna offers family rooms with air-conditioning, balconies, and private bathrooms. Each room includes a tea and coffee maker, minibar, and free toiletries. Dining and Leisure: Guests can enjoy meals at the on-site restaurant serving lunch and dinner. The bar provides a relaxing atmosphere for evening drinks. A year-round outdoor swimming pool and free WiFi enhance the stay. Convenient Services: The hotel provides a paid airport shuttle service, 24-hour front desk, housekeeping, room service, and luggage storage. Additional amenities include bicycle parking, bike hire, and car hire. Local Attractions: Located 16 km from Jaffna International Airport, The Valampuri is near Jaffna Railway Station and Nallur Kandaswamy Temple. Other points of interest include Jaffna Fort and Naguleswaram Temple.",
    address: "148/10, Station Road, Jaffna",
    images: ["valampuri1.jpg", "valampuri2.jpg"],
    amenities: [
        { icon: "wifi", amenity: "Free Wi-Fi" },
        { icon: "utensils", amenity: "Restaurant" },
        { icon: "car", amenity: "Parking" },
        { icon: "bus", amenity: "Airport Shuttle"},
        { icon: "family", amenity: "Family Rooms"},
        { icon: "server", amenity: "Room Service"},
        { icon: "wheelchair", amenity: "Facilities for disabled guests"},
        { icon: "pool", amenity: "Outdoor Swimming"}
    ],
    contact: {
        phone: "+94 212 220 111",
        email: "info@valampurihotel.com",
        website: "https://www.valampurihotel.com/"
    },
    hotelPolicies: {
        pets: "Not allowed",
        payment: "Cash & Cards",
        smoking: "Non-smoking rooms",
        checkIn: "From 11.30",
        checkout: "Until 10.30"
    },
    locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.1934245689085!2d80.01890337488301!3d9.664508178717973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe56a7c5e28b55%3A0x80efe7fa106b2411!2sValampuri%20Hotel!5e0!3m2!1sen!2slk!4v1759939561303!5m2!1sen!2slk",
    category: "Hotel",
    review: 7.2,
    paymentPerNight: 50
    },
    {
    id: 10,
    name: "PJ Hotels Jaffna",
    summary: "This property boasts a year-round outdoor swimming pool, fitness centre, restaurant, and sun terrace.",
    aboutProperty: "Comfortable Accommodations: Jetwing Jaffna in Jaffna offers air-conditioned rooms with balconies, private bathrooms, and modern amenities. Each room includes a work desk, minibar, and free WiFi, ensuring a pleasant stay. Dining and Leisure: The hotel features a family-friendly restaurant serving Indian cuisine with halal options. Guests can relax on the sun terrace or enjoy the bar, which offers a variety of beverages. Additional facilities include a lounge, outdoor seating area, and free on-site private parking. Convenient Location: Located 16 km from Jaffna International Airport, the hotel is close to attractions such as Jaffna Fort (less than 1 km) and Jaffna Public Library (6-minute walk). Nearby points of interest include Nallur Kandaswamy Temple (2 km) and Naguleswaram Temple (20 km). Guest Satisfaction: Highly rated by guests for its attentive staff and excellent service support, the hotel also receives praise for its bar and convenient location.",
    address: "444, Thondamanaaru Road, Avarangal Junction, Atchuvely, Jaffna",
    images: ["pj1.jpg", "pj2.jpg"],
    amenities: [
        { icon: "spa", amenity: "Spa" },
        { icon: "wifi", amenity: "Free Wi-Fi" },
        { icon: "utensils", amenity: "Restaurant" },
        { icon: "car", amenity: "Parking" },
        { icon: "bus", amenity: "Airport Shuttle"},
        { icon: "family", amenity: "Family Rooms"},
        { icon: "server", amenity: "Room Service"},
    ],
    contact: {
        phone: "+94 212 058 181",
        email: "info@pjjaffna.com"
    },
    hotelPolicies: {
        pets: "Not allowed",
        payment: "Credit/Debit cards, Cash",
        smoking: "Non-smoking rooms available",
        checkIn: "From 14:00 Guests are required to show a photo identification and credit card upon check-in. You'll need to let the property know in advance what time you'll arrive.",
        checkout: "Until 12:30"
    },
    locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.191216247006!2d80.01107957488304!3d9.664697078714779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe56aa3b5ed5d1%3A0x833c08ea7eb5685e!2sJetwing%20Jaffna!5e0!3m2!1sen!2slk!4v1759997666040!5m2!1sen!2slk",
    category: "Hotel",
    review: 7.7,
    paymentPerNight: 35
    },
    {
    id: 11,
    name: "Nallur Residence",
    summary: "This guest house offers spa facilities, a sun terrace, garden, restaurant, and free parking.",
    aboutProperty: "Comfortable Accommodations: Nallur Residence in Jaffna offers family rooms with garden views, private bathrooms, and air-conditioning. Each room includes a work desk, wardrobe, and free WiFi. Relaxing Facilities: Guests can enjoy spa facilities, a sun terrace, and an open-air bath. The property features a restaurant serving Indian and Asian cuisines, a coffee shop, and a barbecue area. Convenient Services: The guest house provides private check-in and check-out, a 24-hour front desk, concierge service, and a tour desk. Additional amenities include a minimarket, daily housekeeping, and free on-site parking. Local Attractions: Nallur Kandaswamy Temple is a 5-minute walk away, while Jaffna International Airport is 16 km from the property. Nearby points of interest include Jaffna Railway Station (2.4 km) and Jaffna Fort (3.6 km).",
    address: "656 Point Pedro Road, Nallur, Jaffna",
    images: ["nallur1.jpg", "nallur2.jpg"],
    amenities: [
        { icon: "spa", amenity: "Spa" },
        { icon: "wifi", amenity: "Free Wi-Fi" },
        { icon: "utensils", amenity: "Restaurant" },
        { icon: "car", amenity: "Parking" },
        { icon: "bus", amenity: "Airport Shuttle"},
        { icon: "family", amenity: "Family Rooms"},
        { icon: "server", amenity: "Room Service"},
        { icon: "grill", amenity: "BBQ Facilities"}
    ],
    contact: {
        phone: "+94 224 789 431",
        email: "infoa@nallurresidence.com"
    },
    hotelPolicies: {
        pets: "Not allowed",
        payment: "Credit/Debit cards, Cash",
        smoking: "Non-smoking rooms available",
        checkIn: "From 12:00 to 23:00 Guests are required to show a photo identification and credit card upon check-in.",
        checkout: "Available 24 hours"
    },
    locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.0815460469144!2d80.02859157488308!3d9.674073678558448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe55d2aaea1ce5%3A0x4e0d35e69c6b00d1!2sNallur%20Residence!5e0!3m2!1sen!2slk!4v1760024852527!5m2!1sen!2slk",
    category: "Guest House",
    review: 8.9,
    paymentPerNight: 40
    },

    ];