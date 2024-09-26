import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Formfilled = () => {
  const Navigate=useNavigate();
  const location = useLocation();
  const message = location.state?.message;

  return (
    <div className="container container-form-filled grid">
      <section className='section-form--filled grid'>
      <h2>{message ? message : "Please fill out the form."}</h2>
          <div className="form--filled--button grid grid-two--cols">
            <button onClick={()=>Navigate(-1)}>
              go back
            </button>
            <button onClick={()=>Navigate("/")}> go to home</button>
          </div>
      </section>
    </div>
  );
};

export default Formfilled;
