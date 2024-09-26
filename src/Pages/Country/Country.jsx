import React, { useEffect, useState, useTransition, useMemo } from "react";
import { getCountryData } from "../../API/GetApidat";
import Loader from "../Loader";
import CountryCard from "./CountryCard";
import SearchFilter from "./SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await getCountryData();
        setCountries(res.data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    startTransition(fetchCountries);
  }, []);

  const filterCountries = useMemo(() => {
    return countries.filter((country) => {
      const countryLower = country.name.common.toLowerCase();
      const matchesSearch = search
        ? countryLower.includes(search.toLowerCase())
        : true;

      const matchesFilter = filter === "All" ? true : country.region === filter;

      return matchesSearch && matchesFilter;
    });
  }, [countries, search, filter]);

  if (isPending) {
    return <Loader />;
  }

  return (
    <>
      <SearchFilter
        countries={countries}
        setCountries={setCountries}
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <div className="container">
        <div className="country-section">
          <ul className="section-country-ul grid grid-four--cols">
            {filterCountries.map((currelem, index) => (
              <CountryCard key={index} currelem={currelem} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Country;
