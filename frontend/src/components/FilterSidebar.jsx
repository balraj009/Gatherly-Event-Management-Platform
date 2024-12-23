import React, { useState } from "react";

function FilterSidebar({ onFilter }) {
  const [filters, setFilters] = useState({
    date: "",
    city: "",
    country: "",
    category: "",
    priceRange: [0, 1000],
  });

  const categories = ["Music", "Sports", "Technology", "Art", "Education"]; // Example categories

  const handleInputChange = (e) => { 
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePriceChange = (e, index) => {
    const value = Number(e.target.value);
    setFilters((prev) => {
      const updatedRange = [...prev.priceRange];
      updatedRange[index] = value;
      return {
        ...prev,
        priceRange: updatedRange,
      };
    });
  };

  const applyFilters = () => {
    onFilter(filters);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4">Filters</h2>

      {/* Date Filter */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Date</label>
        <select
          name="date"
          value={filters.date}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option value="">All</option>
          <option value="today">Today</option>
          <option value="tomorrow">Tomorrow</option>
        </select>
      </div>

      {/* City Filter */}
      <div className="mb-4">
        <label className="block font-medium mb-2">City</label>
        <input
          type="text"
          name="city"
          value={filters.city}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Enter city"
        />
      </div>

      {/* Country Filter */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Country</label>
        <input
          type="text"
          name="country"
          value={filters.country}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Enter country"
        />
      </div>

      {/* Category Filter (Dropdown) */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Category</label>
        <select
          name="category"
          value={filters.category}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Price Range</label>
        <div className="flex items-center">
          <input
            type="number"
            value={filters.priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            className="w-1/2 px-3 py-2 border rounded-lg mr-2"
            placeholder="Min"
          />
          <span className="mx-2">-</span>
          <input
            type="number"
            value={filters.priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            className="w-1/2 px-3 py-2 border rounded-lg"
            placeholder="Max"
          />
        </div>
      </div>

      {/* Apply Filters Button */}
      <button
        onClick={applyFilters}
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow"
      >
        Apply Filters
      </button>
    </div>
  );
}

export default FilterSidebar;
