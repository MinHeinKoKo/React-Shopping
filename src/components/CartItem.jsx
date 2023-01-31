import React, { useState } from "react";
import { useStateContext } from "../context/StateContext";
import {
  AiFillDelete,
  AiFillMinusSquare,
  AiFillPlusSquare,
} from "react-icons/ai";

const CartItem = ({ item ,increasePrice , decreasePrice}) => {
  const { dispatch } = useStateContext();
  const [qty ,setQty] = useState(1)
  const increaseQty = () => {
    setQty((pre) => pre + 1 )
    increasePrice(item.price)
  }
  const decreaseQty = () => {
    if(qty > 1){
        setQty((pre) => pre - 1)
        decreasePrice(item.price)
    }
  }
  const removeCartHandler = () =>{
    decreasePrice(item.price * qty)
    dispatch({ type: "REMOVE_FROM_CART", payload: item })
  }
  return (
    <div>
      <div key={item.id} className="flex items-center gap-4">
        <img src={item.image} className="h-32 border-2 rounded p-4" alt="" />
        <div className="">
          <h3 className="text-xl font-semibold">{item?.title}</h3>
          <p className="text-header text-lg">${item?.price * qty}</p>
          <p>{item?.rating?.rate}</p>
          <div className="flex items-center gap-2">
            <AiFillMinusSquare onClick={decreaseQty} className="text-3xl text-danger cursor-pointer" />
            <p className="text-2xl">{qty}</p>
            <AiFillPlusSquare onClick={increaseQty} className="text-3xl text-info cursor-pointer" />
            <AiFillDelete
              onClick={removeCartHandler}
              className="text-danger cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
