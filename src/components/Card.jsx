import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
const Card = ({ product }) => {
  const { title, image, price, rating } = product;
  const { dispatch } = useStateContext();
  return (
    <div className="w-80 border-1 p-5 rounded-lg hover:shadow-xl transform transition duration-150 hover:scale-110">
      <img src={image} className="h-[200px] mx-auto my-3" alt="" />
      <h3 className="text-header text-center font-bold my-3 tracking-wider ">
        {title?.substring(0, 25)}.....
      </h3>
      <div className="flex items-center gap-1">
        <AiFillStar className="text-danger" />
        <small className="text-info font-semibold">{rating?.rate}</small>
      </div>
      <p className="text-header text-xl my-3">${price}</p>
      <div className="flex justify-between items-center">
        <button className="bg-info text-primary px-5 py-2 rounded-lg shadow-lg transform transition hover:scale-90" onClick={()=> dispatch({type:"ADD_TO_CART", payload: product})}>
          Add to Cart
        </button>
        <Link to={`/detail/${product.id}`}>
          <button className="bg-header text-primary px-5 py-2 rounded-lg shadow-lg">
            Detail
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
