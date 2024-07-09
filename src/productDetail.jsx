import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { getProductData } from "./api";
import Loading from "./loading";
import NotFound from "./notFound";

function ProductDetail({onAddToCart}) {
  const id = +useParams().id;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count ,setCount] = useState(1);

  useEffect(function () {
      const p = getProductData(id);
      p.then(function (product) {
        setProduct(product);
        setLoading(false);
        setCount(1);
      }).catch(function(){
        setLoading(false);
      })
    },
    [id]
  );

  function handleCountChange(event){
    setCount(event.target.value);
  }

  function handleButtonClick(){
    onAddToCart(id, count);
  }

  if (loading) {
    return <Loading />;
  }

  if(!product){
    return <NotFound />
  }
  
  return (
    <div className="grow max-w-7xl mx-auto flex flex-col justify-center">
      <Link to="/" className="text-xl flex items-center gap-2 mt-4">
        <IoMdArrowRoundBack className="text-3xl" />
        Back
      </Link>
      <div className=" m-4 pb-4 shadow-lg bg-gray-100 flex gap-3">
        <img
          className="w-96 h-96 object-cover"
          src={product.thumbnail}
          alt={product.description}
        />
        <div className="mt-2 py-4 flex flex-col gap-3 px-2">
          <h1 className="text-3xl font-bold">{product.item}</h1>
          <h2 className="text-xl font-semibold">{product.description}</h2>
          <h1 className="text-lg font-semibold">${product.price}</h1>
          <input
            className="border border-gray-700 rounded-md px-2 py-1 w-24"
            type="number"
            placeholder="Quantity"
            value={count}
            onChange={handleCountChange}
          />
          <button onClick={handleButtonClick} className="bg-orange-500 py-1 px-4 w-32 rounded-md my-5">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          {id > 1 && (
            <Link
              to={"/products/" + (id - 1)}
              className="text-xl flex items-center gap-2 mt-4 mx-5"
            >
              <IoMdArrowRoundBack className="text-3xl" />
              Previous
            </Link>
          )}
        </div>
        <div>
          <Link
            to={"/products/" + (id + 1)}
            className="text-xl flex items-center gap-2 mt-4 mx-5"
          >
            <IoMdArrowRoundForward className="text-3xl" />
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
