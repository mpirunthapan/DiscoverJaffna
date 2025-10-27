import React from 'react'
import Navbar from '~/components/main/Navbar'
import Footer from '~/components/main/Footer'
import Hero from '~/components/rentals/Hero'
import List from '~/components/rentals/List'
import { rentalsData } from '~/data/rentalsData'
import type { Rental } from '~/data/rentalsData'

const rentals = () => {

  const [filters,setFilters] = React.useState({
    search: "",
    type: "",
    price: "",
  });

  const filteredData = rentalsData.filter((res) => {
    const matchSearch =
      res.name.toLowerCase().includes(filters.search.toLowerCase());

    const matchType = filters.type
      ? res.fleet.some(
        (f) => f.type.toLowerCase() === filters.type.toLowerCase()
      )
      : true;

    const matchPrice = filters.price 
      ? res.fleet.some((f) => {
        if (filters.price === "Low") return f.pricePerDay < 50;
        if (filters.price === "Medium") return f.pricePerDay >= 50 && f.pricePerDay <= 100;
        if (filters.price === "High") return f.pricePerDay > 100;
        return false;
    }) : true;

  });

  return (
    <>
    <Navbar /> 
    <Hero 
      onFilterChange={setFilters}
      onClear={() => setFilters({ search: "", type: "", price: ""})}
    />
    <List filters={filters}/>
    <Footer />
    </>
  )
}

export default rentals
