import { useEffect, useState } from "react";
import Layout from "../../layout/layout";
import { Trash } from "lucide-react";
import { toast } from "react-hot-toast";

const initialProducts = [
  {
    
  },
];

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || initialProducts;
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const incrementQty = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decrementQty = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const removeItem = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    toast.error("Item removed from cart!");
  };

  const clearCart = () => {
    setCart([]);
    toast.error("Cart cleared!");
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-7xl lg:px-0">
        <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Shopping Cart
            </h1>
            {cart.length > 0 && (
              <button
                onClick={clearCart}
                className="text-sm text-red-500 border border-red-500 px-4 py-1 rounded hover:bg-red-500 hover:text-white transition"
              >
                Clear All
              </button>
            )}
          </div>

          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center mt-20">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                alt="Empty Cart"
                className="h-48 w-48 object-contain mb-6"
              />
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                Your Cart is Empty
              </h2>
              <p className="text-gray-500 mb-6">
                Looks like you haven’t added anything yet.
              </p>
              <a
                href="/allproduct"
                className="px-6 py-3 bg-orange-900 text-white rounded-xl hover:bg-pink-600 transition"
              >
                Browse Services
              </a>
            </div>
          ) : (
            <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
              {/* Cart Items */}
              <section
                aria-labelledby="cart-heading"
                className="rounded-lg bg-dark lg:col-span-8"
              >
                <h2 id="cart-heading" className="sr-only">
                  Items in your shopping cart
                </h2>
                <ul role="list" className="divide-y divide-gray-200">
                  {cart.map((product) => (
                    <div key={product.id}>
                      <li className="flex py-6 sm:py-6 ">
                        <div className="flex-shrink-0">
                          <img
                            src={product.imageSrc}
                            alt={product.name}
                            className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                            <div>
                              <div className="flex justify-between">
                                <h3 className="text-sm">
                                  <a
                                    href={product.href}
                                    className="font-semibold text-black"
                                  >
                                    {product.name}
                                  </a>
                                </h3>
                              </div>
                              <div className="mt-1 flex text-sm">
                                <p className="text-sm text-gray-500">
                                  {product.color}
                                </p>
                                {product.size && (
                                  <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
                                    {product.size}
                                  </p>
                                )}
                              </div>
                              <div className="mt-1 flex items-end">
                                <p className="text-xs font-medium text-gray-500 line-through">
                                  ₹{product.originalPrice}
                                </p>
                                <p className="text-sm font-medium text-gray-900">
                                  &nbsp;&nbsp;₹{product.price}
                                </p>
                                &nbsp;&nbsp;
                                <p className="text-sm font-medium text-green-500">
                                  {product.discount}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <div className="mb-2 flex">
                        <div className="min-w-24 flex">
                          <button
                            type="button"
                            onClick={() => decrementQty(product.id)}
                            className="h-7 w-7 border rounded-md flex justify-center items-center"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            readOnly
                            value={product.quantity}
                            className="mx-1 h-7 w-9 rounded-md border text-center"
                          />
                          <button
                            type="button"
                            onClick={() => incrementQty(product.id)}
                            className="h-7 w-7 border rounded-md flex justify-center items-center"
                          >
                            +
                          </button>
                        </div>
                        <div className="ml-6 flex text-sm">
                          <button
                            type="button"
                            onClick={() => removeItem(product.id)}
                            className="flex items-center space-x-1 px-2 py-1 pl-0"
                          >
                            <Trash size={12} className="text-red-500" />
                            <span className="text-xs font-medium text-red-500">
                              Remove
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </ul>
              </section>

              {/* Price Summary */}
              <section
                aria-labelledby="summary-heading"
                className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
              >
                <h2
                  id="summary-heading"
                  className="border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
                >
                  Price Details
                </h2>
                <div>
                  <dl className="space-y-1 px-2 py-4">
                    <div className="flex items-center justify-between">
                      <dt className="text-sm text-gray-800">
                        Price ({cart.length} item{cart.length > 1 ? "s" : ""})
                      </dt>
                      <dd className="text-sm font-medium text-gray-900">
                        ₹{getTotalPrice()}
                      </dd>
                    </div>

                    <div className="flex items-center justify-between py-4">
                      <dt className="flex text-sm text-gray-800">
                        <span>Delivery Charges</span>
                      </dt>
                      <dd className="text-sm font-medium text-green-700">Free</dd>
                    </div>
                    <div className="flex items-center justify-between border-y border-dashed py-4 ">
                      <dt className="text-base font-medium text-gray-900">
                        Total Amount
                      </dt>
                      <dd className="text-base font-medium text-gray-900">
                        ₹{getTotalPrice()}
                      </dd>
                    </div>
                  </dl>
                  <div className="px-2 pb-4 font-medium text-green-700">
                    <div className="flex gap-4 mb-6">
                      <button
                        className="w-full px-4 py-3 text-center text-gray-100 bg-orange-900 border border-transparent dark:border-gray-700 hover:border-pink-500 hover:text-pink-700 hover:bg-pink-100 rounded-xl"
                      >
                        Buy now
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;

