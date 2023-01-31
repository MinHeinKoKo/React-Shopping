import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useStateContext } from "../context/StateContext";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useStateContext();

  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const checkOutHandler = () => {
    dispatch({ type: "CART_EMPTY" });
    navigate("/success");
  };
  useEffect(() => {
    setTotal(cart.reduce((a, c) => a + c.price, 0));
  }, []);
  const increasePrice = (price) => {
    setTotal(total + price);
  };
  const decreasePrice = (price) => {
    setTotal(total - price);
  };
  return (
    <>
      {cart.length > 0 ? (
        <div className="grid grid-cols-4 ">
          <div className="col-span-3 flex flex-col gap-5">
            {cart?.map((item) => (
              <CartItem key={item.id} item={item} increasePrice={increasePrice} decreasePrice={decreasePrice}/>
            ))}
          </div>
          <div className="col-span-1">
            <div className="bg-gray-50 p-10 rounded shadow-lg">
              <h1 className="text-3xl text-info font-semibold">
                Total Price - ${total.toFixed(2)}
              </h1>
              <button
                onClick={checkOutHandler}
                className="px-5 py-2 bg-info text-primary rounded shadow-lg uppercase my-5"
              >
                CheckOut
              </button>
            </div>
            <button
              onClick={() => dispatch({ type: "CART_EMPTY" })}
              className="px-5 py-2 bg-danger text-primary rounded shadow-lg uppercase my-5"
            >
              Cart Empty
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-center">
            <div className="bg-secondary p-20 rounded shadow-lg mt-10 animate__animated animate__backInDown">
              <h1 className="text-4xl font-semibold tracking-wider my-5 text-primary mb-8">
                Your Cart is Empty
              </h1>
              <button
                onClick={() => navigate("/")}
                className="text-primary bg-cyan-500 shadow-lg px-6 py-2 uppercase rounded-lg"
              >
                Go Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
