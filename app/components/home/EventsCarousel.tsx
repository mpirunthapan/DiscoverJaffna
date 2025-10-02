import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Link } from "react-router";
import Autoplay from 'embla-carousel-autoplay';

const events = [
  {
    name: "Nallur Festival",
    date: "August 15 - September 9",
    content: "The Nallur Festival is a grand Hindu festival celebrated annually at the Nallur Kandaswamy Kovil. It attracts thousands of devotees from around the world."
  },
  {
    name: "Jaffna Music Festival",
    date: "October 10 - October 12",
    content: "A celebration of local and international music held at Jaffna Public Library grounds, featuring bands, solo artists, and cultural performances."
  },
  {
    name: "Casuarina Beach Marathon",
    date: "November 5",
    content: "An annual marathon along the scenic Casuarina Beach, welcoming runners of all ages and promoting a healthy lifestyle in the community."
  },
  {
    name: "Nagadeepa Pilgrimage",
    date: "December 1 - December 3",
    content: "A religious pilgrimage to the sacred Nagadeepa Vihara, attracting devotees from across the region for prayers and ceremonies."
  }
];

const EventsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000 })]
  );

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="w-full max-w-6xl mx-auto mt-8 sm:mt-12 px-4 sm:px-6">

      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800">
        Upcoming Events
      </h2>

      {/* Carousel */}
      <div className="overflow-hidden rounded-xl sm:rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {events.map((item, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] sm:flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_50%] p-4"
            >
              <div className="p-6 bg-white rounded-lg shadow-md h-full">
                <h3 className="text-lg font-bold text-[#0d171b] mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.date}</p>
                <p className="text-gray-700 text-base">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventsCarousel
