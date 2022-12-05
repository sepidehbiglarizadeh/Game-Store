import { FaShoppingBasket, FaHeart } from "react-icons/fa";
import { GiCrossedSlashes } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useCart } from "../../Providers/CartProvider";

const DesktopNavigation = () => {
  const { cart } = useCart();

  return (
    <header className="hidden mb-4 md:block sticky top-0 left-0 right-0 z-10 bg-black">
      <nav className="flex justify-between items-center text-xl">
        <ul className="flex justify-between items-center">
          <li className="flex items-center px-4 py-2">
            <GiCrossedSlashes size={50} className="fill-orange" />
            <span className="font-bold text-orange">گیم استور</span>
          </li>
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive ? "text-customWhite" : ""
            }
          >
            <li className="px-4 py-2">خانه</li>
          </NavLink>
          <NavLink
            to="/store"
            className={(navData) =>
              navData.isActive ? "text-customWhite" : ""
            }
          >
            <li className="px-4 py-2">فروشگاه</li>
          </NavLink>
        </ul>
        <ul className="flex justify-between items-center">
          <NavLink
            to="/cart"
            className={(navData) =>
              navData.isActive ? "text-customWhite" : ""
            }
          >
            <li className="px-4 py-2 relative">
              <FaShoppingBasket />
              <span
                className={`w-5 h-5 bg-orange rounded-full absolute -top-1 left-0 text-xs text-black font-bold flex justify-center items-center ${
                  cart.length ? "" : "hidden"
                }`}
              >
                {cart.length}
              </span>
            </li>
          </NavLink>
          <NavLink
            to="/favourites"
            className={(navData) =>
              navData.isActive ? "text-customWhite" : ""
            }
          >
            <li className="px-4 py-2">
              <FaHeart />
            </li>
          </NavLink>
          <NavLink
            to="/login"
            className={(navData) =>
              navData.isActive ? "text-customWhite" : ""
            }
          >
            <li className="px-4 py-2">ورود/عضویت</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default DesktopNavigation;
