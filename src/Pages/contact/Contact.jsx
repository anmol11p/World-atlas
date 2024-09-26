import React, { useState, useTransition } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import { getContactData } from "../../API/ContactApi";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isPending, startTransition] = useTransition();

  const handleformSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log(formData);

    // Use startTransition to mark the submission as a non-urgent update
    startTransition(async () => {
      try {
        const data = await getContactData(formData); // Use the Axios function
        console.log(data);

        // Reset form data
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        // Navigate based on the response
        if (data.status === "success") {
          navigate("/formfilled", { state: { message: data.message } });
        } else {
          navigate("/formfilled", { state: { message: data.error } });
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Internal server error occurred");
      }
    });
  };

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="container">
      <section className="contact-section flex">
        <h2 className="container-title content-heading-common">Contact Us</h2>
        <form
          onSubmit={handleformSubmit}
          className="flex"
          data-aos="slide-right"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <label htmlFor="name" data-aos="slide-right" data-aos-duration="1000" data-aos-delay="500">
            <input
              type="text"
              required
              autoFocus
              autoComplete="off"
              name="name"
              className="input-common"
              value={formData.name}
              onChange={handleOnchange}
              placeholder="Enter your name"
            />
          </label>
          <label htmlFor="email" data-aos="slide-right" data-aos-duration="1000" data-aos-delay="900">
            <input
              type="email"
              required
              name="email"
              className="input-common"
              value={formData.email}
              onChange={handleOnchange}
              placeholder="Enter your email"
              autoComplete="off"
            />
          </label>
          <label htmlFor="message">
            <input
              type="text"
              name="message"
              required
              value={formData.message}
              className="input-common"
              onChange={handleOnchange}
              autoComplete="off"
              minLength={5}
              placeholder="Enter your message"
            />
          </label>
          <div className="form-button">
            <button
              type="submit"
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-cubic"
              data-aos-delay="900"
            >
              Send
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
