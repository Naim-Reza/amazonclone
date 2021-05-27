import Header from "../../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../../slices/basketSlice";
import CheckoutProduct from "../../components/CheckoutProduct";
import { useSession } from "next-auth/client";
import Currency from "react-currency-formatter";
import { signIn } from "next-auth/client";

function index() {
  const [session] = useSession();
  const total = useSelector(selectTotal);
  const items = useSelector(selectItems);

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-6xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Shopping Basket is Empty!"
                : "Shopping Basket"}
            </h1>
            <div>
              {items.map((item, i) => (
                <CheckoutProduct item={item} key={i} />
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white p-2 py-6 flex flex-col space-y-4">
          <div className="flex space-x-2">
            <h4 className="whitespace-nowrap">
              Subtotal({items.length} items):
            </h4>
            <Currency quantity={total} currency="GBP" />
          </div>
          {!session ? (
            <button
              onClick={signIn}
              className="button from-gray-600 to-gray-400 text-gray-200"
            >
              Signin to Procceed
            </button>
          ) : (
            <button className="button" disabled={items.length === 0}>
              Procceed to Checkout
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

export default index;
