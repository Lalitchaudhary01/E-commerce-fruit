import React from 'react';
import { Link } from "react-router-dom";

function Product({ thumbnail, price, description, title, id }) {
  return (
    <div className="p-2 shadow-lg bg-gray-100 ">
      <div className="w-full aspect-square">
        <img src={thumbnail} alt={description} className="w-full object-cover" />
      </div>
      <div className="mt-2 py-4 flex flex-col gap-2 ">
        <h1 className="text-gray-600 font-bold text-xl text-green-500">{title}</h1>
        {/* <h1 className="text-lg">{description}</h1> */}
        <h1 className="font-semibold">${price}</h1>
      </div>
      <Link to={`/products/${id}`} className="text-sm text-white bg-orange-400 px-2 py-1 rounded-md mb-4">
        View Detail
      </Link>
    </div>
  );
}

export default Product;
