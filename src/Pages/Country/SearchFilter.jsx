import React from "react";

const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
   setCountries
}) => {
  const handleOnChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSelectChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortCountries = (order) => {
    setCountries((prevCountries) =>
      [...prevCountries].sort((a, b) => 
        order === "asc"
          ? a.name.common.localeCompare(b.name.common) // ascending
          : b.name.common.localeCompare(a.name.common)  // descending
      )
    );
  };

  return (
    <div className="container container-search-filter">
      <section className="search-section  flex">
        <div>
          <input
            type="text"
            value={search}
            onChange={handleOnChangeSearch}
            placeholder="Search Country"
            className="input-common"
          />
        </div>

        <div className="button-search-filter flex">
          <button onClick={() => handleSortCountries("asc")}>Asc</button>
          <button onClick={() => handleSortCountries("desc")}>Desc</button>
        </div>

        <div className="select-section-filter">
          <select onChange={handleSelectChange} value={filter}>
            <option value="All">All</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Americas">Americas</option>
          </select>
        </div>
      </section>
    </div>
  );
};

export default SearchFilter;
