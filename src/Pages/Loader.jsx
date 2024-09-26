import React from 'react'
import loadingimg from "./loading-3692.gif"
const Loader = () => {
  return (
    <div className="container section-loading-container flex">
    <div className="section-loading">
        <img src={loadingimg}alt="loading" width={"40%"} height={"auto"} />
    </div>
    </div>
  )
}

export default Loader