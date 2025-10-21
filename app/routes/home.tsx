import Navbar from "~/components/main/Navbar";
import type { Route } from "./+types/home";
import Hero from "~/components/home/Hero";
import AttractionsCarousel from "~/components/home/AttractionsCarousel";
import EventsCarousel from "~/components/home/EventsCarousel";
import Footer from "~/components/main/Footer";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Discover Jaffna" },
    { name: "description", content: "Learn About Jaffna and It's Culture and Significant!" },
  ];
}

const home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <AttractionsCarousel />
    <EventsCarousel />
    <Footer />
    </>
  )
}

export default home
