import { useCart, useCartActions } from "../Providers/CartProvider";
import { FaTrashAlt } from "react-icons/fa";

const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();

  const incrementHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };

  const decrementHandler = (cartItem) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
  };

  if (!cart.length) {
    return <h2 className="text-center">سبد خرید شما خالی است !</h2>;
  }

  return (
    <section className="mt-14 flex justify-center w-[90vw] max-w-6xl">
      <section className="flex flex-col glassMorphism rounded-lg flex-1 p-4">
        {cart.map((item) => {
          return (
            <div className="mr-1 h-28 flex items-center justify-between border-b-2 border-b- pb-4 pt-4">
              <div className="w-36 h-full">
                <img
                  className="w-full h-full"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div>{item.name}</div>
              <div>${item.price}</div>
              <div className="border border-gray rounded-lg flex items-center justify-center text-orange">
                <button
                  className="text-2xl p-2"
                  onClick={() => incrementHandler(item)}
                >
                  +
                </button>
                <span className="ml-4 mr-4">{item.quantity}</span>
                <button className="p-2" onClick={() => decrementHandler(item)}>
                  {item.quantity <= 1 ? (
                    <FaTrashAlt />
                  ) : (
                    <span className="text-2xl">-</span>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </section>
      <CartSummery cart={cart} total={total} />
    </section>
  );
};

export default CartPage;

const CartSummery = ({total,cart}) => {
    const originalTotalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0;
    return ( 
        <section className="p-4 flex flex-col glassMorphism w-[30%] mr-12 h-64">
            <div className="flex justify-between items-center mb-3">
                <p>قیمت کالاها :</p>
                <p>${originalTotalPrice}</p>
            </div>
            <div className="flex justify-between items-center mb-3">
                <p>تخفیف :</p>
                <p>0</p>
            </div>
            <div className="flex justify-between items-center mb-3 border-t pt-3">
                <p>جمع سبد خرید :</p>
                <p>${total.toFixed(2)}</p>
            </div>
        </section>
     );
}
 
