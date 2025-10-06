export interface Attraction {
    id: number;
    name: string;
    slogan: string;
    summary: string;
    keyFeatures: string[];
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
        "A significant Hindu temple dedicated to Lord Murugan. It is the spiritual centerpiece of Jaffna with history dating back to the 13th century.",
        keyFeatures: [
        "Intricate Gopuram with vibrant sculptures",
        "Spectacular 25-day annual festival",
        "Deep cultural and spiritual significance"
        ],
        planYourVisit: {
        openingHours: "Daily (5:00 AM-12:00 PM & 4:00 PM-8:00 PM)",
        entranceFees: "Free (Donations welcome)",
        dressCode: "Men bare-chested in sanctum; women cover shoulders/knees"
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
        "The second-largest Dutch fort in Sri Lanka, built in 1618 by the Portuguese and expanded by the Dutch. A symbol of resilience and history.",
        keyFeatures: [
        "Star-shaped 17th-century design",
        "Ruins of colonial churches and houses",
        "Lagoon views with scenic sunsets"
        ],
        planYourVisit: {
        openingHours: "8:00 AM - 6:00 PM",
        entranceFees: "Nominal fee",
        dressCode: "Casual with walking shoes"
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
        "Established in 1933, this iconic library was tragically burned in 1981 and later rebuilt. A proud cultural landmark of Jaffna.",
        keyFeatures: [
        "Neoclassical colonial façade",
        "Repository of Tamil literature",
        "Symbol of post-war recovery"
        ],
        planYourVisit: {
        openingHours: "Tue-Sun, 4:30 PM - 6:30 PM",
        entranceFees: "Free",
        dressCode: "Respectful, quiet attire"
        },
        image: "/attractionsimages/PublicLibrary.png",
        location: "lock Tower Road, South, Jaffna",
        locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.2225576525543!2d80.00942717486676!3d9.662015790426768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe56ab9c6eb631%3A0x52ddb8f603f77dcc!2sPublic%20Library%20-%20Jaffna!5e0!3m2!1sen!2slk!4v1759594897253!5m2!1sen!2slk",
        category: "Historical"
    },
    {
        id: 4,
        name: "Keerimalai Naguleswaram Temple",
        slogan: "Where the sea meets the sacred.",
        summary:
        "An ancient Hindu temple dedicated to Lord Shiva, located by the sea. A famous pilgrimage site tied to healing legends.",
        keyFeatures: [
        "Seaside temple with spiritual baths",
        "One of Pancha Ishwarams of Lord Shiva",
        "Pilgrimage site for healing rituals"
        ],
        planYourVisit: {
        openingHours: "6:00 AM - 7:00 PM",
        entranceFees: "Free",
        dressCode: "Traditional/modest attire required"
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
        "A beautiful, secluded beach known for calm waters and a relaxed atmosphere, perfect for swimming and picnics.",
        keyFeatures: ["Clear blue waters", "Soft white sand", "Safe for families"],
        planYourVisit: {
        openingHours: "Open 24 hours",
        entranceFees: "Free",
        dressCode: "Beachwear allowed"
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
        "A sacred Buddhist site where Sanghamitta Theri is believed to have landed with the Bodhi sapling in the 3rd century BC.",
        keyFeatures: [
        "Stupa and ancient ruins",
        "Peaceful coastal setting",
        "Historic Buddhist pilgrimage site"
        ],
        planYourVisit: {
        openingHours: "Open daily",
        entranceFees: "Free",
        dressCode: "Respectful clothing required"
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
        "A revered Buddhist temple located on Nainativu Island, one of the 16 holiest Buddhist sites in Sri Lanka.",
        keyFeatures: [
        "Temple with golden Buddha statue",
        "Accessible by ferry",
        "Peaceful island atmosphere"
        ],
        planYourVisit: {
        openingHours: "6:00 AM - 6:00 PM",
        entranceFees: "Free",
        dressCode: "Respectful clothing required"
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
        "A hidden gem beach near Kayts Island with calm, shallow waters and stunning sunset views.",
        keyFeatures: ["Ideal for swimming", "Quiet and less crowded", "Great sunset views"],
        planYourVisit: {
        openingHours: "Open all day",
        entranceFees: "Free",
        dressCode: "Casual"
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
        "An ancient Buddhist site in Jaffna, featuring dozens of small stupas dating back to the Anuradhapura era.",
        keyFeatures: [
        "Cluster of 60+ stupas",
        "Historical Buddhist site",
        "Tranquil rural surroundings"
        ],
        planYourVisit: {
        openingHours: "Open 6:00 AM - 6:00 PM",
        entranceFees: "Free",
        dressCode: "Respectful attire"
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
        "A scenic coastal town and fishing hub marking the northernmost tip of Sri Lanka.",
        keyFeatures: ["Panoramic sea views", "Fishing culture", "Lighthouse landmark"],
        planYourVisit: {
        openingHours: "Always accessible",
        entranceFees: "Free",
        dressCode: "Casual"
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
        "An island with Dutch colonial ruins, ancient baobab trees, and famous wild ponies roaming freely.",
        keyFeatures: [
        "Dutch fort ruins and stables",
        "Wild ponies left by Portuguese",
        "Ancient baobab tree"
        ],
        planYourVisit: {
        openingHours: "Day trips only",
        entranceFees: "Ferry charges apply",
        dressCode: "Casual, sun protection recommended"
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
        "A natural underground well believed to be bottomless, providing fresh water year-round.",
        keyFeatures: ["Unique geological site", "Local legends", "Year-round water supply"],
        planYourVisit: {
        openingHours: "Open all day",
        entranceFees: "Free",
        dressCode: "Casual"
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
        "A monument dedicated to King Sangiliyan, the last Tamil ruler of Jaffna, symbolizing Tamil pride and heritage.",
        keyFeatures: ["Bronze equestrian statue", "Cultural significance", "Central landmark"],
        planYourVisit: {
        openingHours: "Open access",
        entranceFees: "Free",
        dressCode: "Casual"
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
        "A bustling market where visitors can experience the authentic lifestyle, spices, fresh produce, and local crafts of Jaffna.",
        keyFeatures: ["Local spices", "Fresh seafood", "Handmade crafts"],
        planYourVisit: {
        openingHours: "6:00 AM - 7:00 PM",
        entranceFees: "Free",
        dressCode: "Casual"
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
        "An island with colonial ruins, churches, and fishing villages, rich in history and coastal beauty.",
        keyFeatures: [
        "Colonial-era churches",
        "Harbor views",
        "Quiet island atmosphere"
        ],
        planYourVisit: {
        openingHours: "Day trips recommended",
        entranceFees: "Free",
        dressCode: "Casual"
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
        "A beautiful beach on Karainagar Island, less crowded than Casuarina, popular with locals.",
        keyFeatures: ["Golden sand beach", "Fishing boats", "Relaxed setting"],
        planYourVisit: {
        openingHours: "Open daily",
        entranceFees: "Free",
        dressCode: "Beachwear allowed"
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
        "A wildly popular local ice cream parlor that has become a cultural institution in Jaffna. Known for its distinctively colorful and rich ice cream sundaes, often featuring unique toppings and a local flair.",
        keyFeatures: [" Iconic Local Brand", "Unique Flavors", "Social Hub"],
        planYourVisit: {
        openingHours: "8:00 AM - 10:00 PM",
        entranceFees: "Free",
        dressCode: "Casual"
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
        "A memorial site dedicated to soldiers who fought in the battles of Elephant Pass, a strategic gateway to Jaffna.",
        keyFeatures: ["Memorial monument", "Strategic historical site", "War history"],
        planYourVisit: {
        openingHours: "Always accessible",
        entranceFees: "Free",
        dressCode: "Respectful attire recommended"
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
        "A quiet island with fishing communities, mangroves, and coastal landscapes, perfect for eco-tourism.",
        keyFeatures: ["Mangroves", "Birdwatching", "Traditional fishing culture"],
        planYourVisit: {
        openingHours: "Open daily",
        entranceFees: "Free",
        dressCode: "Casual"
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
        "A protected area known for its diverse habitats, including mangrove swamps, seagrass beds, and open lagoons. It is a critical habitat for both resident and migratory birds.",
        keyFeatures: ["Birdwatching Hotspot", "Mangrove Ecosystems", "Coastal Biodiversity"],
        planYourVisit: {
        openingHours: "5:00 AM - 6:00 PM",
        entranceFees: "Free",
        dressCode: "Casual"
        },
        image: "/attractionsimages/Park.png",
        location: "Pachchilapalli, Jaffna",
        locationEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108966.2753031315!2d80.41989438550448!3d9.577810284487557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afec6c580c8a8c5%3A0x6e6a9cf1941b341a!2sChundikulam%20Bird%20Sanctuary!5e0!3m2!1sen!2slk!4v1759645608555!5m2!1sen!2slk",
        category: "Natural"
    }
]