import React from "react";
import { NavLink } from "react-router-dom";
import { LuMoveRight } from "react-icons/lu";
const Herosection = () => {
  return (
    // hero section
    <main>
      <div className="container hero-section-container">
        <section className="hero-section grid grid-two--cols">
          <div
            className="hero-section-one flex"
            data-aos="fade-up
"
            data-aos-duration="100"
            data-aos-delay="1000"
          >
            <h2 className="content-heading-common">
              Explore the World,One Country at a Time.
            </h2>
            <p>
              Discover the history,culture and beauty of every nation sort
              search and filter through countries to find the details you need
            </p>
            <NavLink to="/country">
              <button>
                {" "}
                Start Exploring <LuMoveRight />
              </button>
            </NavLink>
          </div>
          <div
            className="hero-section-two"
            data-aos="fade-up
"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <img
              src="https://images.unsplash.com/photo-1456139333202-745e9029f0ef?"
              alt=" a mountain image"
              width={"100%"}
              height={"auto"}
              className="hero-img"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Herosection;
