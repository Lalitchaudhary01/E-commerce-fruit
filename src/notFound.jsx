import React from "react"
import notFoundImg from './notFoundImg.png';
import {Link} from "react-router-dom"

function NotFound() {
  return (
    <div className="bg-white w-full h-full">
      <div className="flex flex-col grow justify-center items-center max-w-6xl mx-auto ">
        <img src={notFoundImg} className="w-full h-2/3" alt="Not Found"/>
        <Link to="/" className="bg-orange-500 rounded-3xl text-white px-4 py-2">Back to Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
