import React from "react";
import API from "../API/API.json";

const About = () => {
  return (
    <div className="section-about-main">
      <div className="container">
        <section className="section-about">
          <h2 className="about-main-heading content-heading-common ">
            Here are the interesting Facts
            <br /> we're proud of
          </h2>

          <div className="about-card">
            <ul className="grid grid-three--cols">
              {API.map((currElem, index) => {
                const {
                  id,
                  countryName,
                  capital,
                  population,
                  interestingFact,
                } = currElem;

                // Adjust duration and delay based on the index
                const aosDuration = 800;
                const aosDelay = 200 + index * 100;

                return (
                  <li
                    className="about-section--list flex"
                    key={currElem.id}
                    data-aos="slide-up"
                    data-aos-duration={aosDuration}
                    data-aos-delay={aosDelay}
                  >
                    <h2>{countryName}</h2>
                    <div className="about-details flex">
                      <p className="common-para-card">
                        <span className="about-subheading common-span-card">
                          capital:
                        </span>
                        {capital}
                      </p>

                      <p className="common-para-card">
                        <span className="about-subheading common-span-card">
                          population:
                        </span>
                        {population}
                      </p>
                      <p className="common-para-card">
                        <span className="about-subheading common-span-card">
                          Interesting Fact:
                        </span>
                        {interestingFact}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
