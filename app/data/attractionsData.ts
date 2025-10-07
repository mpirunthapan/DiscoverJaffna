export interface Attraction {
    id: number;
    name: string;
    slogan: string;
    summary: string;
    keyFeatures: {
        title: string;
        description: string;
    }[];
    planYourVisit: {
        openingHours: string;
        entranceFees: string;
        dressCode: string;
    };
    image: string
    location: string;
    locationEmbed: string;
    category: string;
}

export const attractionsData: Attraction[] = [
    {
        id: 1,
        name: "Nallur Kandaswamy Kovil",
        slogan: "A beacon of faith and cultural pride.",
        summary:
        "The Nallur Kandaswamy Kovil is arguably the most significant Hindu temple in the Jaffna Peninsula, dedicated to Lord Murugan. Its history is deep-rooted, with origins tracing back as far as the 13th century, making it an essential spiritual centerpiece for the local Tamil community. The temple is famous for its towering and intricately detailed *Gopuram* (entrance tower) adorned with vibrant sculptures of deities and mythological scenes. It is particularly renowned for its spectacular 25-day annual festival, which draws thousands of devotees and visitors from around the world. The Kovil is not merely a place of worship; it stands as a profound symbol of Jaffna's enduring culture, heritage, and spiritual resilience.",
        keyFeatures: [
            {
                title: "Magnificent Gopuram",
                description: "The temple’s entrance tower is adorned with intricate and colorful sculptures depicting Hindu deities and legends."
            },
            {
                title: "Annual Festival",
                description: "A 25-day grand festival featuring chariot processions, traditional music, and devotional rituals that attract visitors from around the world."
            },
            {
                title: "Cultural Heritage",
                description: "A sacred site symbolizing Jaffna’s spiritual identity and centuries-old Tamil traditions."
            }
        ],
        planYourVisit: {
            openingHours: "Open daily from 5:00 AM to 12:00 PM and 4:00 PM to 8:00 PM. Pooja times vary throughout the day.",
            entranceFees: "Entry is free for all visitors. Donations are welcome.",
            dressCode: "Modest attire is required. Men must be bare-chested in the inner sanctum. Women should cover shoulders and knees. Sarongs are available for rent."
        },
        image: "/attractionsimages/NallurMurugan.png",
        location: "Point Pedro Road, Nallur, Jaffna",
        locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.071340333917!2d80.02709657486699!3d9.674945790414496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe5418ed6c1b2b%3A0x7915bb4278791116!2sNallur%20Kandaswamy%20Devasthanam!5e0!3m2!1sen!2slk!4v1759594621651!5m2!1sen!2slk",
        category: "Religious"
    },
    {
        id: 2,
        name: "Jaffna Fort",
        slogan: "Colonial power preserved in stone.",
        summary:
        "Jaffna Fort holds the prestigious title of being the second-largest Dutch fort in Sri Lanka, a testament to the island's complex colonial past. It was originally constructed by the Portuguese in 1618, but its current star-shaped design and massive scale are largely due to the extensive expansion efforts of the Dutch during the 17th century. The fort has endured numerous sieges and conflicts throughout its history, making it a powerful symbol of resilience for the region. Visitors today can explore the expansive grounds, discover the ruins of colonial churches and houses within its walls, and enjoy panoramic views of the lagoon, especially during the scenic sunsets over the water. Its historical significance spans centuries, encompassing Portuguese, Dutch, and British periods of influence.",
        keyFeatures: [
            {
                title: "Star-Shaped Design",
                description: "Built in the 17th century, the fort’s geometric layout is one of the best-preserved examples of Dutch military architecture in Asia."
            },
            {
                title: "Historic Ruins",
                description: "Explore remnants of colonial churches, administrative buildings, and barracks that tell the story of Jaffna’s past."
            },
            {
                title: "Scenic Lagoon Views",
                description: "Enjoy panoramic views of Jaffna Lagoon, especially breathtaking during sunset."
            }
        ],
        planYourVisit: {
            openingHours: "Open daily from 8:00 AM to 6:00 PM. The best time to visit is during the late afternoon for sunset views.",
            entranceFees: "A nominal entrance fee is charged at the gate.",
            dressCode: "Casual attire is suitable. Comfortable footwear is recommended for walking over uneven stone surfaces."
        },
        image: "/attractionsimages/JaffnaFort.png",
        location: "Fort Road, Jaffna",
        locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.222383511217!2d80.00585027486682!3d9.662030690426786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe5154ca818ad1%3A0x5012b63b0e660be3!2sM265%2BR97%20Fort%20Jaffna%2C%20Jaffna!5e0!3m2!1sen!2slk!4v1759594776310!5m2!1sen!2slk",
        category: "Historical"
    },
    {
        id: 3,
        name: "Jaffna Public Library",
        slogan: "A symbol of knowledge and resilience.",
        summary:
        "The Jaffna Public Library is much more than a collection of books; it is a profound cultural and historical landmark for the entire Tamil community. Originally established in 1933, the library rapidly grew to become one of the largest in Asia, renowned for its irreplaceable repository of ancient manuscripts and Tamil literature. Tragically, it was burned down in 1981, an event considered one of the most devastating cultural catastrophes in Sri Lanka's history. Following years of efforts, the library was painstakingly rebuilt and restored to its former glory, featuring a beautiful neoclassical colonial façade. Today, it stands proudly as a powerful symbol of post-war recovery, the unwavering commitment to knowledge, and the enduring spirit of the Jaffna people.",
        keyFeatures: [
            {
                title: "Architectural Beauty",
                description: "A stunning neoclassical building featuring white domes, arches, and colonial-era design."
            },
            {
                title: "Cultural Repository",
                description: "Houses thousands of books and manuscripts, celebrating Tamil heritage and global literature."
            },
            {
                title: "Symbol of Revival",
                description: "Painstakingly restored after destruction, representing peace and intellectual strength."
            }
        ],
        planYourVisit: {
            openingHours: "Open Tuesday to Sunday from 4:30 PM to 6:30 PM. Closed on Mondays and public holidays.",
            entranceFees: "Admission is free for all visitors.",
            dressCode: "Visitors are expected to dress modestly and maintain silence inside the library."
        },
        image: "/attractionsimages/PublicLibrary.png",
        location: "Clock Tower Road, South, Jaffna",
        locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.2225576525543!2d80.00942717486676!3d9.662015790426768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe56ab9c6eb631%3A0x52ddb8f603f77dcc!2sPublic%20Library%20-%20Jaffna!5e0!3m2!1sen!2slk!4v1759594897253!5m2!1sen!2slk",
        category: "Historical"
    },
    {
        id: 4,
        name: "Keerimalai Naguleswaram Temple",
        slogan: "Where the sea meets the sacred.",
        summary:
        "This ancient Hindu temple is a revered place of worship dedicated to Lord Shiva, positioned uniquely right on the coast of the Jaffna Peninsula. The Keerimalai Naguleswaram Temple is one of the five Pancha Ishwarams—the five historical abodes of Shiva on the island—marking its immense significance in Hindu tradition. It is particularly famous for its association with the 'healing spring' or *Theertham*, a natural freshwater spring located immediately adjacent to the sea, which is believed to have miraculous healing powers. Pilgrims flock to the site to take a spiritual bath in the freshwater tank before entering the temple for rituals. The combination of its seaside location, ancient history, and healing legends makes it an unmissable pilgrimage site.",
        keyFeatures: [
            {
                title: "Sacred Freshwater Springs",
                description: "A natural spring adjacent to the sea, where pilgrims bathe for purification and healing."
            },
            {
                title: "Ancient Shiva Temple",
                description: "One of the Pancha Ishwarams, ancient temples dedicated to Lord Shiva across Sri Lanka."
            },
            {
                title: "Seaside Serenity",
                description: "A tranquil setting where the sound of waves complements the temple’s spiritual atmosphere."
            }
        ],
        planYourVisit: {
            openingHours: "Open daily from 6:00 AM to 7:00 PM. Best visited in the morning for prayers and calm surroundings.",
            entranceFees: "Entry is free for devotees and visitors.",
            dressCode: "Traditional attire is recommended. Men should remove shirts in the sanctum; women should dress modestly."
        },
        image: "/attractionsimages/Keerimalai.png",
        location: "Keerimalai, Kankesanturai, Jaffna",
        locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.439030485225!2d80.0095411748689!3d9.81344409028263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3affab890e614ccb%3A0x6bc3588982ca3c26!2sKeerimalai%20Naguleswaram%20Temple!5e0!3m2!1sen!2slk!4v1759595002802!5m2!1sen!2slk",
        category: "Religious"
    },
    {
        id: 5,
        name: "Casuarina Beach",
        slogan: "Tranquility on soft golden sands.",
        summary:
        "Casuarina Beach is widely regarded as one of the most beautiful and easily accessible beaches in the Jaffna region, named for the Casuarina trees that fringe its edges. Located on the nearby Karainagar Island, it is known for its incredibly calm and shallow waters that extend far out into the sea, making it exceptionally safe and perfect for families with young children. The soft, golden-white sand and the relaxed atmosphere make it an ideal spot for a leisurely day of swimming, picnicking, or simply unwinding. Due to the tranquil nature of the lagoon and its sheltered position, the beach offers a peaceful escape from the hustle and bustle of the main city, attracting both locals and tourists seeking serenity.",
        keyFeatures: [
            {
                title: "Shallow Calm Waters",
                description: "Perfect for safe swimming, especially for families and children."
            },
            {
                title: "Casuarina Trees",
                description: "Natural shade and scenic beauty make it perfect for picnics and relaxation."
            },
            {
                title: "Peaceful Atmosphere",
                description: "A quiet and less crowded alternative to southern beaches of Sri Lanka."
            }
        ],
        planYourVisit: {
            openingHours: "Open all day, every day. Early morning and evening hours are best for swimming and sunset views.",
            entranceFees: "Entry is free. Parking and small stalls available nearby.",
            dressCode: "Casual beachwear is acceptable. Sun protection is recommended."
        },
        image: "/attractionsimages/Casurina.png",
        location: "Beach Road, Jaffna",
        locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.035401720146!2d79.88461227486815!3d9.763068740330603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3affb2c56cd0d429%3A0x537ecb8fc5b195de!2sCasuarina%20Beach!5e0!3m2!1sen!2slk!4v1759595065934!5m2!1sen!2slk",
        category: "Natural"
    },
    {
        id: 6,
        name: "Dambakola Patuna",
        slogan: "Where Buddhism first touched Sri Lanka.",
        summary:
        "Dambakola Patuna is a location of immense religious and historical significance in Sri Lanka, as it is traditionally believed to be the exact port where Buddhism first arrived on the island. In the 3rd century BC, Sanghamitta Theri, the daughter of Emperor Ashoka of India, is said to have landed here, bringing with her a sapling of the sacred Bodhi Tree under which the Buddha attained enlightenment. Today, a modern Buddhist temple and a prominent stupa mark this historic landing site, serving as a powerful pilgrimage destination. The tranquil coastal setting adds to the spiritual atmosphere, allowing visitors to reflect on the deep historical connection this spot has to the roots of Buddhism in Sri Lanka. It remains a peaceful and revered site.",
        keyFeatures: [
        { 
            title: "Stupa and Ancient Ruins", 
            description: "A sacred stupa and remnants of early Buddhist structures mark the historic landing site of Buddhism in Sri Lanka." 
        },
        { 
            title: "Peaceful Coastal Setting", 
            description: "Located by the sea, the temple offers a serene and meditative atmosphere ideal for reflection." 
        },
        { 
            title: "Historic Pilgrimage Site", 
            description: "Visited by devotees year-round to honor the arrival of the Bodhi Tree sapling from India." 
        }
    ],
    planYourVisit: {
        openingHours: "Open daily from 6:00 AM to 6:00 PM.",
        entranceFees: "Entry is free for all visitors. Donations to the temple are appreciated.",
        dressCode: "Modest and respectful attire is required. Shoulders and knees should be covered for both men and women."
    },
        image: "/attractionsimages/Dambakola.png",
        location: "Dambakolapatuna, Jaffna",
        locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1965.8738088623095!2d79.94328253855366!3d9.787409847576864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3affad0d0828b2a1%3A0x927ba57807a40405!2sDabakolapatuna!5e0!3m2!1sen!2slk!4v1759595124710!5m2!1sen!2slk",
        category: "Religious"
    },
    {
        id: 7,
        name: "Nagadeepa Purana Viharaya",
        slogan: "A serene Buddhist sanctuary on an island.",
        summary:
        "The Nagadeepa Purana Viharaya is one of the most sacred Buddhist sites in Sri Lanka, as it is believed to be one of the sixteen places the Buddha visited during his lifetime. This revered temple is uniquely located on Nainativu Island, requiring a ferry trip across the lagoon to reach its peaceful shores. The temple's compound features a stunning, whitewashed stupa and a conspicuous golden Buddha statue that attracts pilgrims from all over the country and the world. The journey and the isolated, tranquil island atmosphere contribute significantly to the sense of spiritual detachment and serenity for visitors. Sharing the small island with the ancient Nagapooshani Amman Hindu Temple, it also stands as a symbol of religious co-existence in the region.",
        keyFeatures: [
        { 
            title: "Golden Buddha Statue", 
            description: "A magnificent golden Buddha statue stands as the centerpiece of the temple complex." 
        },
        { 
            title: "Island Temple Access", 
            description: "Accessible only by ferry, offering a tranquil journey through the lagoon." 
        },
        { 
            title: "Peaceful Atmosphere", 
            description: "The quiet island setting enhances the sense of spirituality and calm." 
        }
    ],
    planYourVisit: {
        openingHours: "Open daily from 6:00 AM to 6:00 PM.",
        entranceFees: "Entry is free. Small donations for temple maintenance are welcomed.",
        dressCode: "Visitors should wear modest clothing that covers shoulders and knees out of respect for the sacred site."
    },
        image: "/attractionsimages/Nagadeepa.png",
        location: "Nainativu Centre, Kurichchikadu, Jaffna",
        locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.7971950244555!2d79.77153747486614!3d9.612723690473807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe48527dac99dd%3A0x9248063fd3ffd963!2sNagadeepa%20Temple!5e0!3m2!1sen!2slk!4v1759595392285!5m2!1sen!2slk",
        category: "Religious"
    },
    {
        id: 8,
        name: "Charty Beach",
        slogan: "Relax where the lagoon meets the sea.",
        summary:
        "Charty Beach, often referred to as Chaddy Beach, is a beautiful and somewhat hidden gem situated near Kayts Island in the Jaffna Peninsula. It is primarily known for its incredibly calm and shallow waters, which are ideal for safe swimming and a relaxed day out for visitors of all ages. Unlike some of the busier coastal spots, Charty retains a quiet and less-crowded charm, making it a favorite among locals seeking tranquility. The beach offers a wonderful vantage point for observing the meeting of the lagoon and the open sea. This location is particularly famous for its spectacular sunset views, as the colors paint the sky over the still, shallow waters.",
        keyFeatures: [
        { 
            title: "Safe Swimming Area", 
            description: "Shallow, calm waters ideal for families and non-swimmers." 

        },
        { 
            title: "Quiet Retreat", 
            description: "A peaceful and less-crowded beach, perfect for relaxation." 

        },
        { 
            title: "Scenic Sunsets", 
            description: "Witness some of Jaffna’s most stunning sunset views over the lagoon." 

        }
    ],
    planYourVisit: {
        openingHours: "Accessible all day, best visited during daylight hours.",
        entranceFees: "Free entry for all visitors.",
        dressCode: "Casual beachwear is acceptable, though modest attire is appreciated."
    },
        image: "/attractionsimages/Charty.png",
        location: "Chaddy Beach, Jaffna",
        locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.5551948883653!2d79.9190997748665!3d9.633512790453954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe51d8568ff5a3%3A0x6ca19e983b4ee9ee!2sCharty%20Beach%20Resort!5e0!3m2!1sen!2slk!4v1759595483695!5m2!1sen!2slk",
        category: "Natural"
    },
    {
        id: 9,
        name: "Kadurugoda Temple (Kantharodai)",
        slogan: "A forest of mini stupas.",
        summary:
        "Kadurugoda Temple, locally known as Kantharodai, is a unique and intriguing ancient Buddhist site that dates back to the early Anuradhapura era. The site is visually distinctive and instantly recognizable by its cluster of over sixty miniature, grey-coral stupas scattered across the grounds in a relatively small area. This concentration of small-scale monuments sets it apart from other temple sites in Sri Lanka. It serves as powerful archaeological evidence of the historical presence of Buddhism in the Jaffna peninsula. Surrounded by tranquil rural scenery, the temple offers a peaceful and historically rich experience, giving visitors a glimpse into the diverse religious history of the North.",
        keyFeatures: [
        { 
            title: "Miniature Coral Stupas", 
            description: "Over sixty small stupas built from coral stones in an ancient Buddhist style." 
        },
        { 
            title: "Archaeological Significance", 
            description: "Evidence of early Buddhist influence in the northern region." 
        },
        { 
            title: "Peaceful Surroundings", 
            description: "A quiet countryside location ideal for reflection and exploration." 
        }
    ],
    planYourVisit: {
        openingHours: "Open daily from 6:00 AM to 6:00 PM.",
        entranceFees: "Entry is free for all visitors.",
        dressCode: "Visitors should wear modest, temple-appropriate clothing."
    },
        image: "/attractionsimages/Kantharodai.png",
        location: "Puttur-Kantarodai Road, Jaffna",
        locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.227112741411!2d80.00405207486791!3d9.74682019034602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe535651df9a23%3A0xdea64a291ed39165!2zS2FudGhhcm9kYWkgQXJjaGFlb2xvZ2ljYWwgTW9udW1lbnQg4K6V4K6o4K-N4K6k4K6w4K-L4K6f4K-IIOCuiOCuruCuleCvjeCuleCusuCvjeCusuCuseCviOCuleCus-CvjSjgtprgtrPgt5Tgtrvgt5Tgtpzgt5zgtqkg4LeA4LeS4LeE4LeP4La74La6KQ!5e0!3m2!1sen!2slk!4v1759595539019!5m2!1sen!2slk",
        category: "Historical"
    },
    {
        id: 10,
        name: "Point Pedro",
        slogan: "Sri Lanka’s northernmost point.",
        summary:
        "Point Pedro is a significant coastal town that proudly marks the absolute northernmost tip of the island of Sri Lanka. This location offers more than just a geographical landmark; it is a vibrant fishing hub where you can observe the daily routines of the local fishing communities. The scenic coastline provides panoramic sea views stretching out into the Palk Strait and the Bay of Bengal. A historic lighthouse stands as a key navigational landmark near the tip. Visitors often take photos at the signpost that confirms the location's status as the northern extreme, contrasting with Dondra Head, the southernmost point. It offers a unique opportunity to witness the rugged beauty of the northern coastline.",
        keyFeatures: [
        { 
            title: "Northernmost Landmark", 
            description: "A signpost marks the northern tip of Sri Lanka — a perfect photo spot." 
        },
        { 
            title: "Coastal Scenery", 
            description: "Wide sea views stretching into the Palk Strait and Bay of Bengal." 
        },
        { 
            title: "Fishing Culture", 
            description: "Observe local fishermen and daily seaside life up close." 
        }
    ],
    planYourVisit: {
        openingHours: "Accessible at any time, though best enjoyed during daylight.",
        entranceFees: "Free entry; no restrictions.",
        dressCode: "Casual wear is suitable; hats and sunscreen are recommended."
    },
        image: "/attractionsimages/PointPedro.png",
        location: "Mill Lane Inpacitty, Point Pedro, Jaffna",
        locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.2624863124315!2d80.232869974869!3d9.828307690268502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3aff0374dbc9d6fb%3A0xd54904db9e6cc250!2sPoint%20Pedro%20Jetty!5e0!3m2!1sen!2slk!4v1759595917910!5m2!1sen!2slk",
        category: "Natural"
    },
    {
        id: 11,
        name: "Delft Island",
        slogan: "History and wild ponies by the sea.",
        summary:
        "Delft Island, officially known as Neduntivu, is a fascinating island located off the coast of Jaffna, renowned for its unique natural and historical features. The island is characterized by remnants of the Dutch colonial period, including the ruins of a small Dutch fort and old stables used for livestock. One of its most famous attractions is the population of wild ponies, descendants of horses left behind by the Portuguese and Dutch colonizers, which roam freely across the arid landscape. Visitors can also find an ancient, massive baobab tree, another colonial-era import. Access is by a ferry from Kurikadduwan Jetty (KKD) on Pungudutivu, making a day trip to Delft a rewarding, adventurous journey into a place where nature and history converge.",
        keyFeatures: [
        { 
            title: "Wild Ponies", 
            description: "Descendants of horses introduced during Portuguese and Dutch rule roam freely across the island." 
        },
        { 
            title: "Colonial Ruins", 
            description: "Explore remnants of Dutch forts, stables, and old settlements." 

        },
        { 
            title: "Ancient Baobab Tree", 
            description: "A centuries-old baobab tree stands as a living relic of colonial trade." 
        }
    ],
    planYourVisit: {
        openingHours: "Accessible during daytime only, via ferry from Kurikadduwan Jetty.",
        entranceFees: "Ferry ticket required; no island entry fee.",
        dressCode: "Casual attire with sun protection and comfortable footwear is recommended."
    },
        image: "/attractionsimages/Delft.png",
        location: "Neduntivu, Jaffna",
        locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62958.789665199074!2d79.64971896932563!3d9.515301934959513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe390338a1e855%3A0x4d88d1edc8ca320d!2sDelft%20Island!5e0!3m2!1sen!2slk!4v1759596003569!5m2!1sen!2slk",
        category: "Adventurous"
    },
    {
        id: 12,
        name: "Nilavarai Bottomless Well",
        slogan: "A mysterious natural wonder.",
        summary:
        "The Nilavarai Bottomless Well is a curious and popular natural phenomenon located in the northern region of Jaffna. It is a large, natural underground well known for its unique geological structure and the local legends that surround it, including tales linking it to the epic Hindu figure Rama. The well is remarkable because, despite its proximity to the sea, the upper layers contain clear, fresh water that has historically been used for irrigation and drinking. Below the fresh water, the water is said to turn brackish, and the locals believe it to be 'bottomless,' with attempts to measure its full depth proving difficult. This geological mystery and its role as a consistent source of fresh water in a dry landscape make it a fascinating stop for visitors.",
        keyFeatures: [
        { 
            title: "Geological Mystery", 
            description: "A deep natural well with both fresh and saline water layers." 

        },
        { 
            title: "Cultural Legends", 
            description: "Linked to ancient Hindu mythology and local folklore." 

        },
        { 
            title: "Freshwater Source", 
            description: "Provides water for local use year-round, even in dry seasons." 

        }
    ],
    planYourVisit: {
        openingHours: "Open throughout the day, best visited in daylight.",
        entranceFees: "Free for all visitors.",
        dressCode: "Casual, comfortable clothing recommended for warm weather."
    },
        image: "/attractionsimages/Nilavarai.png",
        location: "Nilavarai, Jaffna",
        locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.1379660531943!2d80.08568647486806!3d9.754379190338847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe55528b0c0db7%3A0x974b04a209820949!2zTmlsYXZhcmFpLCBOYXR1cmFsIHVuZGVyZ3JvdW5kIHdhdGVyIHdlbGwgfCDgrqjgrr_grrLgrr7grrXgrrDgr4gsIOCuh-Cur-CuseCvjeCuleCviCDgrqjgrr_grrLgrqTgr43grqTgrp_grr8g4K6o4K-A4K6w4K-NIOCuleCuv-Cuo-CuseCvgSB8IOC2seC3kuC2veC3gOC2u-C3j-C2uuC3kiwg4LeD4LeK4LeA4La34LeP4LeA4LeS4LaaIOC2t-C3luC2nOC2rSDgtqLgtr0g4LeF4LeS4Laz!5e0!3m2!1sen!2slk!4v1759596041226!5m2!1sen!2slk",
        category: "Natural"
    },
    {
        id: 13,
        name: "Sangiliyan Statue",
        slogan: "Pride of the Tamil king.",
        summary:
        "The Sangiliyan Statue is a prominent and emotionally significant monument located at the Muthirai Junction in Jaffna. It is dedicated to Cankili II (Sangiliyan), who was the last Tamil king of the Jaffna Kingdom before the arrival of the Portuguese. The statue depicts King Sangiliyan on horseback, often shown with a sword, embodying bravery and sovereignty. For the Tamil people, this monument is a powerful symbol of their pre-colonial history, cultural pride, and enduring heritage. It serves as a central landmark in the city and is a must-see for anyone interested in the political and cultural history of the Jaffna region. It represents a vital connection to a past era of independent rule.",
        keyFeatures: [
        { 
            title: "Equestrian Bronze Statue", 
            description: "A powerful representation of King Cankili II mounted on a horse." 
        },
        { 
            title: "Symbol of Heritage", 
            description: "Honors the last Tamil king and his role in Jaffna’s history." 
        },
        { 
            title: "Central City Landmark", 
            description: "Located prominently in the heart of Jaffna, easily accessible to visitors." 
        }
    ],
    planYourVisit: {
        openingHours: "Open at all times; best viewed during the day for photography.",
        entranceFees: "Free public monument; no entry charges.",
        dressCode: "Casual attire is fine. Hats and sunglasses are recommended during the day."
    },
        image: "/attractionsimages/Sangiliyan.png",
        location: "Muthirai Junction, Jaffna",
        locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.0799380728686!2d80.032551774867!3d9.67421109041518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe5423bf713fe5%3A0xdd12fec40f730ff8!2sKing%20Sangiliyan&#39;s%20Statue!5e0!3m2!1sen!2slk!4v1759596619141!5m2!1sen!2slk",
        category: "Historical"
    },
    {
        id: 14,
        name: "Jaffna Market",
        slogan: "Flavors and colors of Jaffna life.",
        summary:
        "The Jaffna Market is a vibrant, bustling epicenter of local commerce and an essential stop for anyone wishing to experience the authentic daily life of the city. Situated on Hospital Road, the market is a chaotic but colorful sensory experience, filled with the aromas of exotic spices, fresh produce, and unique local delicacies. Visitors can browse stalls overflowing with fresh seafood, Jaffna's famous chillies and other spices, and a wide variety of handmade crafts and textiles. It's a place where you can directly interact with locals, practice your bargaining skills, and sample the unique flavors that define the region's cuisine. The market is not just a shopping destination; it is a true cultural immersion.",
        keyFeatures: [
        { 
            title: "Local Spices", 
            description: "Explore Jaffna’s famous chillies, aromatic spices, and traditional condiments." 
        },
        { 
            title: "Fresh Seafood", 
            description: "Shop for locally caught fish and seafood delivered straight from the coast." 
        },
        { 
            title: "Handmade Crafts", 
            description: "Discover locally made crafts, colorful textiles, and traditional souvenirs." 
        }
    ],
    planYourVisit: {
        openingHours: "Open daily from 6:00 AM to 7:00 PM.",
        entranceFees: "Entry is free for all visitors.",
        dressCode: "Casual and comfortable clothing recommended."
    },
        image: "/attractionsimages/Market.png",
        location: "160 Hospital Rd, Jaffna",
        locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.1601863623755!2d80.00729817486689!3d9.667350990421713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe5400171438df%3A0x5f74e66c553ff540!2sJaffna%20Market!5e0!3m2!1sen!2slk!4v1759644625734!5m2!1sen!2slk",
        category: "Family-Friendly"
    },
    {
        id: 15,
        name: "Kayts Island",
        slogan: "Heritage and harbor views.",
        summary:
        "Kayts Island, one of the many islands surrounding the Jaffna Peninsula, is rich in colonial history, coastal beauty, and a quiet, laid-back atmosphere. The island is connected to the mainland by a causeway, making it easily accessible for a day trip. Historically, it was a significant harbor during the Dutch and Portuguese periods, and remnants of this era can still be found in the form of old colonial churches and other ruins scattered across the land. It offers picturesque views of the surrounding lagoon and harbor, providing excellent photographic opportunities. The island is dotted with traditional fishing villages, offering a glimpse into the resilient and enduring lifestyle of the island communities.",
        keyFeatures: [
        { 
            title: "Colonial-Era Churches", 
            description: "Explore centuries-old churches and ruins from the Portuguese and Dutch periods."
        },
        { 
            title: "Harbor Views", 
            description: "Enjoy panoramic views of tranquil harbors and lagoons." 
        },
        { 
            title: "Quiet Island Life", 
            description: "Experience the calm, traditional rhythm of life on a northern island." 
        }
    ],
    planYourVisit: {
        openingHours: "Best visited during the day for sightseeing and exploration.",
        entranceFees: "Free for all visitors.",
        dressCode: "Light, casual wear suitable for walking and coastal conditions."
    },
        image: "/attractionsimages/Kayts.png",
        location: "Velanai Island, Jaffna",
        locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.768283679832!2d79.84951537486731!3d9.70080759038987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe4c5e020a37e9%3A0xfe709141f1618877!2zS2F5dHMgSXNsYW5kIEZvcnQgfCDgrorgrrDgr43grpXgrr7grrXgrrHgr43grqTgr4HgrrHgr4gg4K6V4K-L4K6f4K-N4K6f4K-I!5e0!3m2!1sen!2slk!4v1759644727073!5m2!1sen!2slk",
        category: "Historical"
    },
    {
        id: 16,
        name: "Karainagar Beach",
        slogan: "Golden sands near Jaffna.",
        summary:
        "Karainagar Beach is a beautiful and expansive coastal stretch located on Karainagar Island, one of the larger islands in the Jaffna chain. While Casuarina Beach on the same island often gets the spotlight, Karainagar Beach offers a more relaxed and less commercialized setting, making it a favorite spot among local residents. The beach is known for its lovely golden sands and the calming sound of the gentle waves. Visitors can enjoy a peaceful walk along the shore, observe the local fishermen with their boats, or simply relax and take in the serene coastal scenery. It provides a genuine and unhurried beach experience away from major tourist crowds.",
        keyFeatures: [
        { 
            title: "Golden Sands", 
            description: "Relax on soft, golden sand stretching along the scenic coastline." 
        },
        { 
            title: "Fishing Boats", 
            description: "Watch local fishermen bring in their daily catch using traditional methods." 
        },
        { 
            title: "Peaceful Ambience", 
            description: "Unwind in a tranquil environment away from busy tourist beaches." 
        }
    ],
    planYourVisit: {
        openingHours: "Open daily throughout the year.",
        entranceFees: "Free entry for all visitors.",
        dressCode: "Beachwear and light clothing recommended."
    },
        image: "/attractionsimages/Karainagar.png",
        location: "Karainagar, Jaffna",
        locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62912.86182917331!2d79.80820054863284!3d9.761505099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3affb2d00c84dc91%3A0x45106ff052b28fd2!2sKarai%20Beach%20Resort!5e0!3m2!1sen!2slk!4v1759644875802!5m2!1sen!2slk",
        category: "Natural"
    },
    {
        id: 17,
        name: "Rio Ice Cream",
        slogan: "The iconic taste of Jaffna's sweet side.",
        summary:
        "Rio Ice Cream is more than just an ice cream parlor; it is a true cultural institution and a household name within the Jaffna region, beloved by locals and a mandatory stop for most visitors. Famous for its distinctively vibrant, rich, and creamy ice cream, Rio offers a plethora of unique sundaes often featuring local fruits, nuts, and brightly colored toppings. The shop has served as a social hub for decades, representing a piece of local nostalgia and resilience. Its signature offerings, like the 'Rio Special,' draw large crowds, creating a lively and family-friendly atmosphere. A visit here provides a delicious and authentic taste of Jaffna's sweet and enduring culinary scene.",
        keyFeatures: [
        { 
            title: "Iconic Local Brand", 
            description: "A beloved dessert spot serving Jaffna for generations." 
        },
        { 
            title: "Unique Flavors", 
            description: "Enjoy creative ice creams made with tropical fruits and local ingredients." 
        },
        { 
            title: "Social Hub", 
            description: "A lively meeting place for families, friends, and travelers alike." 
        }
    ],
    planYourVisit: {
        openingHours: "Open daily from 8:00 AM to 10:00 PM.",
        entranceFees: "No entry fee; pay only for orders.",
        dressCode: "Casual attire suitable for dining."
    },
        image: "/attractionsimages/Rio.png",
        location: "448A, AB20, Jaffna",
        locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.085593480731!2d80.02451027486698!3d9.673727790415649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe541938ebc9ed%3A0xc3c506be8d6b69d5!2sRio%20Ice%20Cream%20-%20Jaffna!5e0!3m2!1sen!2slk!4v1759645238687!5m2!1sen!2slk",
        category: "Family-Friendly"
    },
    {
        id: 18,
        name: "Elephant Pass War Memorial",
        slogan: "Gateway of resilience.",
        summary:
        "Elephant Pass, or *Aanaipallavan*, is a narrow strip of land that connects the Jaffna Peninsula to the rest of the island, historically and strategically acting as the crucial gateway to the North. The Elephant Pass War Memorial stands as a solemn and significant site dedicated to the soldiers who were involved in the intense battles fought here during the nation's civil conflict. The memorial monument commemorates their bravery and sacrifice, serving as a powerful reminder of Sri Lanka's recent history and the high human cost of the war. Visitors often stop here to pay their respects and reflect on the strategic importance of this location, which has defined much of the region's modern history. It is a key landmark on the route into Jaffna.",
        keyFeatures: [
        { 
            title: "Memorial Monument", 
            description: "A tribute to the soldiers who served and sacrificed during the war." 
        },
        { 
            title: "Strategic Location", 
            description: "Marks the narrow land bridge connecting Jaffna to the mainland." 
        },
        { 
            title: "Historical Significance", 
            description: "A site symbolizing resilience and remembrance." 
        }
    ],
    planYourVisit: {
        openingHours: "Accessible at all hours.",
        entranceFees: "Free to visit; public access allowed year-round.",
        dressCode: "Respectful attire is recommended while visiting the site."
    },
        image: "/attractionsimages/ElephantPass.png",
        location: "Elephant Pass, Jaffna",
        locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.078589704834!2d80.40378307486469!3d9.501894190579566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afee97e207a226f%3A0x3366d3b33464f7fb!2z4LeE4LeD4La94LaaIOC2nOC3j-C2uOC3kuC2q-C3kyDgt4Pgt4rgtrjgt4_gtrvgtprgtrogLCDgtoXgtr3gt5LgtrjgtoLgtprgtqkgfCBUaGUgTWVtb3JpYWwgdG8gR2FtaW5pIGluIEVsZXBoYW50IFBhc3M!5e0!3m2!1sen!2slk!4v1759645344653!5m2!1sen!2slk",
        category: "Historical"
    },
    {
        id: 19,
        name: "Mandaitivu Island",
        slogan: "Secluded island serenity.",
        summary:
        "Mandaitivu is a beautiful and quiet island located in the cluster surrounding the Jaffna Peninsula, connected to the mainland by a causeway. This island is less developed for mass tourism, offering a genuinely peaceful and secluded experience characterized by serene coastal landscapes. The area is known for its significant mangrove ecosystems and shallow, calm waters, making it an excellent location for eco-tourism and birdwatching. The island is home to small, traditional fishing communities, allowing visitors to witness a quiet, authentic Sri Lankan island lifestyle. For those seeking solitude, natural beauty, and an escape from the city, Mandaitivu provides a wonderfully tranquil retreat.",
        keyFeatures: [
        { 
            title: "Mangrove Forests", 
            description: "Discover diverse coastal mangroves supporting unique wildlife." 
        },
        { 
            title: "Birdwatching", 
            description: "Spot migratory and resident birds in a tranquil natural setting." 
        },
        { 
            title: "Local Culture", 
            description: "Experience the simplicity and warmth of island fishing communities." 
        }
    ],
    planYourVisit: {
        openingHours: "Open to visitors all day.",
        entranceFees: "Free entry; bring essentials as facilities are limited.",
        dressCode: "Casual, light attire suitable for tropical conditions."
    },
        image: "/attractionsimages/Mandaitivu.png",
        location: "Mandaitivu, Jaffna",
        locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31469.673240681528!2d79.96536464771904!3d9.620291939846132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe50e06d182167%3A0xbf5fc858d216c300!2sMandaitivu!5e0!3m2!1sen!2slk!4v1759645506440!5m2!1sen!2slk",
        category: "Natural"
    },
    {
        id: 20,
        name: "Chundikulam National Park",
        slogan: "A haven for birdwatchers and nature lovers..",
        summary:
        "Chundikulam National Park, a protected area in the northern part of Sri Lanka, is a biological treasure trove known for its incredibly diverse coastal and lagoon ecosystems. The park encompasses vital habitats, including extensive mangrove swamps, open water lagoons, and seagrass beds, supporting a complex array of wildlife. It is especially renowned as a critical habitat and a major hotspot for birdwatching, hosting both numerous resident species and a significant number of migratory birds, particularly during the winter season. The park plays a crucial role in conserving the coastal biodiversity of the Northern Province, offering visitors a serene environment for nature photography, quiet observation, and ecological appreciation. The landscape is a beautiful blend of land and water, highlighting the natural richness of the Jaffna region.",
        keyFeatures: [
        { 
            title: "Birdwatching Hotspot", 
            description: "Observe rare and migratory birds across the park’s wetlands and lagoons." 
        },
        { 
            title: "Mangrove Ecosystems", 
            description: "Explore lush mangrove forests vital to coastal conservation." 
        },
        { 
            title: "Coastal Biodiversity", 
            description: "Discover diverse flora and fauna in a serene natural environment." 
        }
    ],
    planYourVisit: {
        openingHours: "Open daily from 5:00 AM to 6:00 PM.",
        entranceFees: "Free for visitors; eco-guided tours may require a small fee.",
        dressCode: "Light, comfortable clothing suitable for outdoor exploration."
    },
        image: "/attractionsimages/Park.png",
        location: "Pachchilapalli, Jaffna",
        locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108966.2753031315!2d80.41989438550448!3d9.577810284487557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afec6c580c8a8c5%3A0x6e6a9cf1941b341a!2sChundikulam%20Bird%20Sanctuary!5e0!3m2!1sen!2slk!4v1759645608555!5m2!1sen!2slk",
        category: "Natural"
    }
]