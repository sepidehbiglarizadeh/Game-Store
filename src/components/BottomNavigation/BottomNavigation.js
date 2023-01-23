import { useState } from "react";
import { FaHome, FaStoreAlt, FaShoppingBasket, FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCart } from "../../Providers/CartProvider";
import { useFav } from "../../Providers/FavProvider";

const BottomNavigation = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { cart } = useCart();
  const fav = useFav();

  const getSelectedItem = (id) => {
    setSelectedItem(id);
  };

  return (
    <div className="md:hidden bg-black   border border-t-2 fixed bottom-0 left-0 right-0 w-full rounded-tr-md rounded-tl-md px-2 flex items-center z-30">
      <nav className="w-full">
        <ul className="flex items-center justify-between gap-x-2 w-full text-md">
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive ? "text-customWhite" : ""
            }
          >
            <li
              className="py-4 cursor-pointer flex items-end"
              onClick={() => getSelectedItem(1)}
            >
              <FaHome size={30} />
              <span
                className={`mr-1 ${selectedItem === 1 ? "block" : "hidden"} `}
              >
                خانه
              </span>
            </li>
          </NavLink>
          <NavLink
            to="/store"
            className={(navData) =>
              navData.isActive ? "text-customWhite" : ""
            }
            state={{ id: null }}
          >
            <li
              className="py-4 cursor-pointer flex items-end"
              onClick={() => getSelectedItem(2)}
            >
              <FaStoreAlt size={30} />
              <span
                className={`mr-1 ${selectedItem === 2 ? "block" : "hidden"}`}
              >
                فروشگاه
              </span>
            </li>
          </NavLink>
          <NavLink
            to="/cart"
            className={(navData) =>
              navData.isActive ? "text-customWhite" : ""
            }
          >
            <li
              className="py-4 cursor-pointer flex items-end relative"
              onClick={() => getSelectedItem(3)}
            >
              <FaShoppingBasket size={30} />
              <span
                className={`mr-1  ${selectedItem === 3 ? "block" : "hidden"}`}
              >
                سبد خرید
              </span>
              <span
                className={`w-5 h-5 bg-orange rounded-full absolute top-1 right-0 text-xs text-black font-bold flex justify-center items-center ${
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
            <li
              className="py-4 cursor-pointer flex items-end relative"
              onClick={() => getSelectedItem(4)}
            >
              <FaHeart size={30} />
              <span
                className={`mr-1 ${selectedItem === 4 ? "block" : "hidden"} `}
              >
                علاقه مندی ها
              </span>
              <span
                className={`w-5 h-5 bg-orange rounded-full absolute top-1 right-0 text-xs text-black font-bold flex justify-center items-center ${
                  fav.length ? "" : "hidden"
                }`}
              >
                {fav.length}
              </span>
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNavigation;
