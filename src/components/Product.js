import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import Rating from "./Rating";

function Product({ product }) {
  const [hasPrime] = useState(Math.random() < 0.5);

  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {product.category}
      </p>
      <Image src={product.image} width={200} height={200} objectFit="contain" />
      <h4 className="my-3">{product.title}</h4>
      <Rating />
      <p className="text-xs my-2 line-clamp-2">{product.description}</p>
      <div className="mb-5">
        <Currency quantity={product.price} currency="GBP" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">Free Next-Day Delivery</p>
        </div>
      )}
      <button className="mt-auto button" onClick={handleAddToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
