import React, { useEffect, useState, useTransition } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCountryIndData } from "../../API/GetApidat";
import Loader from "./../Loader";

const CountryDetails = () => {
  const [country, setCountry] = useState(null); // Initialize with null
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, [params.id]);

  console.log(country);

  return (
    <div className="container section-country-details">
      {isPending && <Loader />}
      {country && (
        <section className="grid grid-two--cols">
          <div className="img">
            {country.flags?.svg && (
              <img
                src={country.flags.svg}
                width={"50%"}
                height="auto"
                alt={country.name?.common || "Country flag"}
              />
            )}
          </div>

          <div className="country-details">
            <>
              <h2 className="content-heading-common">{country.name?.official || "No official name"}</h2>
              <div className="more-info-country-details">
                <p className="common-para-card">
                  <span className="common-span-card">Native name: </span>
                  {country.name?.common || "N/A"}
                </p>
                <p className="common-para-card">
                  <span className="common-span-card">Population: </span>
                  {country.population?.toLocaleString() || "N/A"}
                </p>
                <p className="common-para-card">
                  <span className="common-span-card">Region: </span>
                  {country.region || "N/A"}
                </p>
                <p className="common-para-card">
                  <span className="common-span-card">Sub region: </span>
                  {country.subregion || "N/A"}
                </p>
                <p className="common-para-card">
                  <span className="common-span-card">Capital: </span>
                  {country.capital?.[0] || "N/A"}
                </p>
                <p className="common-para-card">
                  <span className="common-span-card">Top-level domain: </span>
                  {country.tld?.[0] || "N/A"}
                </p>
                <p className="common-para-card">
                  <span className="common-span-card">Currencies: </span>
                  {country.currencies
                    ? Object.values(country.currencies)
                        .map((currency) => currency.name)
                        .join(", ")
                        
                    : "N/A"}
                </p>
                <p className="common-para-card">
                  <span className="common-span-card">Languages: </span>
                  {country.languages
                    ? Object.values(country.languages).join(". ")
                    : "N/A"}
                </p>
                <button onClick={() => navigate(-1)}>Go back</button>
              </div>
            </>
          </div>
        </section>
      )}
    </div>
  );
};

export default CountryDetails;
