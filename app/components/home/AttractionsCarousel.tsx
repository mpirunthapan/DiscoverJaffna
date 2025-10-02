import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Link } from "react-router";
import Autoplay from 'embla-carousel-autoplay';

const attractions = [
  { name: "Nallur Kandaswamy Kovil", image: "/images/nallurmurugan.png" },
  { name: "Jaffna Fort", image: "/images/jaffnafort.png" },
  { name: "Casuarina Beach", image: "/images/casurinabeach.png" },
  { name: "Nagadeepa Vihara", image: "/images/nagadeepa.png" },
  { name: "Jaffna Public Library", image: "/images/publiclibrary.png" },
  { name: "Keerimalai Naguleswaram Temple", image: "/images/keerimalai.png" },
]

const AttractionsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000 })]
  );

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="w-full max-w-6xl mx-auto mt-8 sm:mt-12 px-4 sm:px-6">

      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800">
        Featured Destinations
      </h2>

      {/* Carousel */}
      <div className="overflow-hidden rounded-xl sm:rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {attractions.map((item, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_33.33%] p-2"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs sm:text-sm md:text-base px-2 sm:px-3 py-1 rounded-lg">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-5 sm:mt-8">
        <Link
          to="/attractions"
          className="px-5 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white text-sm sm:text-base rounded-lg hover:bg-blue-600 transition"
        >
          See more attractions
        </Link>
      </div>
    </div>
  )
}

export default AttractionsCarousel
