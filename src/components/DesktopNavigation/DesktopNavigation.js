import { useState } from "react";
import {
  FaShoppingBasket,
  FaHeart,
  FaUserAlt,
  FaChevronDown,
} from "react-icons/fa";
import { GiCrossedSlashes } from "react-icons/gi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth, useAuthActions } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProvider";
import { useFav } from "../../Providers/FavProvider";
import Search from "../Search/Search";

const DesktopNavigation = () => {
  const { cart } = useCart();
  const [isShow, setIsShow] = useState(false);
  const auth = useAuth();
  const setAuth = useAuthActions();
  const fav = useFav();
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("authState");
    setAuth(false);
    setIsShow(false);
    navigate("/");
  };

  return (
    <header className="hidden mb-4 md:block sticky top-0 left-0 right-0 z-10 bg-black">
      <nav className="flex justify-between items-center text-xl relative">
        <ul className="flex justify-between items-center">
          <NavLink to="/">
            <li className="flex items-center px-4 py-2">
              <GiCrossedSlashes size={50} className="fill-orange" />
              <span className="font-bold text-orange">گیم استور</span>
            </li>
          </NavLink>
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
            state={{ id: null }}
          >
            <li className="px-4 py-2">فروشگاه</li>
          </NavLink>
        </ul>
        <Search />
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
            <li className="px-4 py-2 relative">
              <FaHeart />
              <span
                className={`w-5 h-5 bg-orange rounded-full absolute -top-1 left-0 text-xs text-black font-bold flex justify-center items-center ${
                  fav.length ? "" : "hidden"
                }`}
              >
                {fav.length}
              </span>
            </li>
          </NavLink>

          <li className="px-4 py-2">
            {auth ? (
              <button
                className="flex"
                onClick={() => setIsShow((prevState) => !prevState)}
              >
                <FaUserAlt />
                <FaChevronDown className="text-xs" />
              </button>
            ) : (
              <NavLink
                to="/login"
                className={(navData) =>
                  navData.isActive ? "text-customWhite" : ""
                }
              >
                ورود/عضویت
              </NavLink>
            )}
          </li>
        </ul>
        {auth && (
          <div
            className={`absolute left-0 -bottom-7 glassMorphism flex flex-col px-4 py-1 text-sm ${
              isShow ? "" : "hidden"
            }`}
          >
            <Link to="/profile" onClick={() => setIsShow(false)}>
              <span>{auth.user.name}</span>
            </Link>
            <span className="cursor-pointer" onClick={logoutUser}>
              خروج
            </span>
          </div>
        )}
      </nav>
    </header>
  );
};

export default DesktopNavigation;
