import React from "react";
import { NavLink } from "react-router-dom";

const CountryCard = ({ currelem, index }) => {
  const { flags, name, population, region, capital } = currelem;

  // Adjust delay and duration based on the index
  const aosDuration =800; // Increase duration with each index
  const aosDelay = 500 + index * 100; // Increase delay with each index

  return (
    <li
      data-aos="slide-right"
      data-aos-duration={aosDuration}
      data-aos-delay={aosDelay}
    >
      <div className="list-section-country">
        <figure>
          <img src={flags.svg} alt={flags.alt} width="80%" height="auto" />
        </figure>
        <div className="country-actual-data">
          <h2>
            {name.common.length >= 10
              ? name.common.slice(0, 10) + "..."
              : name.common}
          </h2>
          <p className="common-para-card">
            <span className="common-span-card">population : </span>
            {population}
          </p>
          <p className="common-para-card">
            <span className="common-span-card">region : </span>
            {region}
          </p>
          <p className="common-para-card">
            <span className="common-span-card">capital : </span>
            {capital[0]}
          </p>
          <NavLink to={`/country/${name.common}`}>
            <button>Read More..</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
