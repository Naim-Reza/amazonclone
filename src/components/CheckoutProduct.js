import Image from "next/image";
import Rating from "./Rating";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({ item }) {
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    dispatch(addToBasket(item));
  };

  const handleRemoveFromBasket = () => {
    dispatch(removeFromBasket(item));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 my-6">
      <Image src={item.image} height={200} width={200} objectFit="contain" />
      <div className="md:col-span-3 mx-5">
        <p>{item.title}</p>
        <Rating />
        <p className="text-xs my-2 line-clamp-3">{item.description}</p>
        <Currency quantity={item.price} currency="GBP" />
      </div>
      <div className="flex flex-col my-auto md:justify-self-end space-y-2">
        <button className="button" onClick={handleAddToBasket}>
          Add to Basket
        </button>
        <button className="button" onClick={handleRemoveFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
