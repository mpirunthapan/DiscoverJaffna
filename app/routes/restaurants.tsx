import React, { useState } from 'react'
import Hero from '~/components/restaurants/Hero'
import List from '~/components/restaurants/List'
import Footer from '~/components/main/Footer'
import Navbar from '~/components/main/Navbar'
import { restaurantsData } from '~/data/restaurantsData'
import type { Restaurant } from '~/data/restaurantsData'
import { Search } from 'lucide-react'

const restaurants = () => {

  const [filters,setFilters] = useState({
    search: "",
    category: "",
    price: "",
  });

  const filteredData = restaurantsData.filter((res) => {
    const matchSearch =
      res.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      res.cuisine.toLowerCase().includes(filters.search.toLowerCase());

    const matchCategory = filters.category
      ? res.category === filters.category
      : true;

    const matchPrice = filters.price ? res.priceRange === filters.price : true;
    
    return matchSearch && matchCategory && matchPrice;
  });

  return (
    <>
    <Navbar />
    <Hero 
      onFilterChange={setFilters} 
      onClear={() => setFilters({ search: "", category: "", price: ""})}
    />
    <List filters={filters}/>
    <Footer />
    </>
  )
}

export default restaurants
