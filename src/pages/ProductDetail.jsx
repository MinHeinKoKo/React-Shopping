import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getData } from "../api";
import { AiFillStar } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";

const ProductDetail = () => {
  const {dispatch} = useStateContext();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [productByCat, setProductByCat] = useState([]);
  const getProductDetail = async () => {
    setProduct(await getData(`/products/${id}`));
  };
  const getProductByCat = async () => {
    const data = await getData(`/products/category/${product.category}`);
    const filterData = data?.filter((item) => item.id !== product.id);
    setProductByCat(filterData);
  };
  useEffect(() => {
    getProductDetail();
    getProductByCat();
  }, [product]);
  return (
    <div>
      <div className="flex gap-5 justify-center items-center">
        <img
          src={product?.image}
          className="h-96 border-2 shadow-lg p-10 rounded-md"
          alt=""
        />
        <div className="flex flex-col gap-5">
          <p className="text-sm font-medium bg-info text-primary px-2 py-1 rounded-full w-40 text-center">
            {product?.category}
          </p>
          <h3 className="text-2xl font-semibold text-header">
            {product?.title}
          </h3>
          <p className="text-header font-semibold">Description</p>
          <p className="text-secondary tracking-wider leading-6 mt-1">
            {product?.description}
          </p>
          <p className="flex items-center gap-2">
            <AiFillStar className="text-danger text-xl" />{" "}
            <small className="text-slate-600 font-bold">
              {product?.rating?.rate}
            </small>
          </p>
          <p className="text-header text-xl font-semibold">${product?.price}</p>
          <div className="flex gap-2">
            <button onClick={()=> dispatch({type:"ADD_TO_CART", payload: product})} className="bg-info text-primary px-6 py-1 rounded shadow-lg w-40 transition transform hover:scale-90">
              Add to Cart
            </button>
            <Link to="/success">
              <button className="bg-header text-primary px-6 py-1 rounded shadow-lg w-40 transition transform hover:scale-90">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="my-20">
        <h1 className="text-2xl font-semibold text-header mb-5">
          You May also like that
        </h1>
        <div className="flex flex-wrap gap-7 my-10">
          {productByCat?.map((pc) => (
            <div key={pc.id} className="">
              <img
                src={pc.image}
                className="h-60 border-2 shadow-lg p-5 rounded"
              />
              <p className="text-secondary font-semibold mt-1">${pc.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
