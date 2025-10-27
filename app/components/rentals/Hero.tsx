import React, {useEffect, useState} from 'react'

interface HeroProps {
  onFilterChange: (filters: { search: string; type: string; price: string }) => void;
  onClear: () => void;
}

const Hero: React.FC<HeroProps> = ({ onFilterChange, onClear }) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    onFilterChange({search,type,price});
  }, [search,type,price]);

  const handleClear = () => {
    setSearch('');
    setType('');
    setPrice('');
    onClear();
  }

  return (
    <section className='bg-gray-100 py-12 px-6 text-center'>
      <h1 className='text-4xl font-bold text-gray-900 mb-4'>
        Rent a Vehicle in Jaffna 🚗🏍️
      </h1>
      <p className="text-lg text-gray-500 mb-8">
        Explore Jaffna at your own pace with our wide selection of rental vehicles. From cars and bikes to boats, find the perfect ride for your adventure.
      </p>

      {/* Filters */}
      <div className='flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 max-w-3xl mx-auto cursor-pointer'>
        {/* Search */}
        <input 
          type="text" 
          placeholder='Search by the company...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='p-2 rounded-xl border border-gray-300 text-gray-800 w-full sm:w-auto'
        />

        {/* Type */}
        <select 
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
          className='p-2 rounded-xl border border-gray-300 text-gray-800 cursor-pointer w-full sm:w-auto'
        >
          <option value="">All Types</option>
          <option value="Car">Car</option>
          <option value="Bike">Bike</option>
          <option value="Van">Van</option>
          <option value="SUV">SUV</option>
          <option value="Boat">Boat</option>
        </select>

        {/* Price */}
        <select 
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          className='p-2 rounded-xl border border-gray-300 text-gray-800 cursor-pointer w-full sm:w-auto'
        >
          <option value="">All Prices</option>
          <option value="Low">Low (&lt; $50/day)</option>
          <option value="Medium">Average ($50 - $100/day)</option>
          <option value="High">Premium (&gt; $100/day)</option>
        </select>

        {/* Clear Button */}
        <button
          onClick={handleClear}
          className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition cursor-pointer w-full sm:w-auto'
        >
          Clear
        </button>
      </div>
    </section>
  )
}

export default Hero
