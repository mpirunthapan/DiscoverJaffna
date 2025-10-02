import Navbar from "~/components/home/Navbar";
import type { Route } from "./+types/home";
import Hero from "~/components/home/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    </>
  )
}

export default home
