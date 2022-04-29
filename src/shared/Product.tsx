import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

interface Prod {
  image1: string;
  desc2: string;
  desc1: string;
  price: number;
  id: number;
}

const Product: React.FC<Prod> = ({ image1, desc2, desc1, price, id }) => {
  const [isShown, setIsShown] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      className="w-52 cursor-pointer bg-slate-100 mb-16 border-2 mr-10  rounded space-y-3"
    >
      {/* link to the product description page */}
      <Link to={`/product/${id}`}>
        <img
          src={image1}
          alt="product image"
          className="h-40 w-full object-cover rounded"
        />
        <div className="text-lg h-24 flex flex-col justify-center text-center font-normal">
          {isShown ? desc2 : desc1}
        </div>
      </Link>
      {/* button to add product to cart using snipcart*/}
      <div className="flex justify-around font-medium border-2 hover:border-blue-500 hover:font-medium px-3 hover:text-blue-500  shadow-md py-3">
        <button
          className="snipcart-add-item border-2 rounded-md px-5 hover:border-blue-500"
          data-item-id={id}
          data-item-image={image1}
          data-item-name={desc1}
          data-item-url="/"
          data-item-price={price}
        >
          Add to Cart
        </button>

        <h1>$-{price}</h1>
      </div>
      <Outlet />
    </div>
  );
};

export default Product;
