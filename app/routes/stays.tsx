import {useState} from 'react'
import Navbar from '~/components/main/Navbar'
import Footer from '~/components/main/Footer'
import Hero from '~/components/stays/Hero'
import List from '~/components/stays/List'
import { staysData } from '~/data/staysData'

const stays = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [sortOption, setSortOption] = useState("");

  const categories = Array.from(new Set(staysData.map((s) => s.category)));

  const clearFilters = () => {
    setSearchQuery("");
    setCategory("");
    setSortOption("");
  };

  const filteredStays = staysData
    .filter((stay) =>
      stay.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((stay) =>
      category ? stay.category.toLowerCase() === category.toLowerCase() : true
    )
    .sort((a, b) => {
      if (sortOption === "price-low-high")
        return a.paymentPerNight - b.paymentPerNight;
      if (sortOption === "price-high-low")
        return b.paymentPerNight - a.paymentPerNight;
      if (sortOption === "rating-high-low") return b.review - a.review;
      return 0;
    });

  return (
    <>
    <Navbar />
    <section className="px-4 md:px-12 lg:px-24 py-12 bg-gray-50 text-gray-800">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Accommodations & Hotels in Jaffna
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Discover the best places to stay in Jaffna, from luxury hotels to cozy guesthouses. 
            Find your perfect accommodation and book your stay today.
          </p>
        </div>
      </section>
    <Hero 
      searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          category={category}
          setCategory={setCategory}
          sortOption={sortOption}
          setSortOption={setSortOption}
          clearFilters={clearFilters}
          categories={categories}
    />
    <List stays={filteredStays} />
    <Footer />
    </>
  )
}

export default stays
