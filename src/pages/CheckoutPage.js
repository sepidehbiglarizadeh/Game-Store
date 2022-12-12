import { Link } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider";
import { useCart } from "../Providers/CartProvider";

const CheckoutPage = () => {
  const auth = useAuth();
  const { cart, total } = useCart();

  if (!cart.length)
    return (
      <main>
        <Link to="/store" state={{id:null}}><p className="text-center">به فروشگاه بروید!</p></Link>
      </main>
    );

  return (
    <main className="flex justify-center">
      <section className="md:mt-14 md:flex   md:justify-center w-[90vw] max-w-6xl">
        {auth && (
          <div className="glassMorphism p-4 md:w-[50%]">
            <h3 className="text-orange mb-4">مشخصات کاربر :</h3>
            <p className="mb-3">نام : {auth.user.name}</p>
            <p className="mb-3">ایمیل : {auth.user.email}</p>
            <p className="mb-3">شماره موبایل : {auth.user.phoneNumber}</p>
          </div>
        )}
        <div className="p-4 flex flex-col glassMorphism  md:w-[50%] md:mr-12 h-64">
          <h3 className="text-orange mb-4">مشخصات سفارش :</h3>
          {cart &&
            cart.map((item) => (
              <div className="mb-3">
                {item.name} * {item.quantity} : ${item.quantity * item.offPrice}
              </div>
            ))}
          <hr className="text-orange mt-4 mb-4" />
          <div>قیمت کل: {total}$</div>
          <button className="w-full bg-orange rounded-lg text-black font-bold py-3 mt-5">
            پرداخت
          </button>
        </div>
      </section>
    </main>
  );
};

export default CheckoutPage;
