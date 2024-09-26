import React, { memo } from "react";
import { NavLink, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = memo(() => {
  const error = useRouteError();
  const navigate=useNavigate()   
const handleGoBack=()=>{
navigate(-1);
}
  if (error.status === 404) {
    return (
      <div className="container error-container">
      <section className="section-error">
        <video
          src="https://cdn.dribbble.com/userupload/15144569/file/large-e48730ae7dae70ce0e8ec1517a2c48a6.mp4"
          autoPlay
          muted
          loop
          className="error-video-section"
        />
        <div className="section-error-content flex">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-lg mb-8">The page you are looking for does not exist.</p>
          <span className="flex button-home">
            <button  className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300" onClick={handleGoBack}>Go back</button>
          <button>
          <NavLink
            to="/"
            className="px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-300"
          >
            Back to Home
          </NavLink>
          </button>
          </span>
        </div>
      </section>
      </div>
    );
  }

  return null;
});

export default ErrorPage;
