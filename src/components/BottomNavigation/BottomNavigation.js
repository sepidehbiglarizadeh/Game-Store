import { useState } from "react";
import { FaHome, FaStoreAlt, FaShoppingBasket, FaHeart } from "react-icons/fa";

const BottomNavigation = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const getSelectedItem = (id) => {
    setSelectedItem(id);
  };

  return (
    <div className="md:hidden   border border-t-2 fixed bottom-0 left-0 right-0 w-full rounded-tr-md rounded-tl-md px-2 flex items-center">
      <nav className="w-full">
        <ul className="flex items-center justify-between gap-x-2 w-full text-md">
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
          <li
            className="py-4 cursor-pointer flex items-end"
            onClick={() => getSelectedItem(2)}
          >
            <FaStoreAlt size={30} />
            <span className={`mr-1 ${selectedItem === 2 ? "block" : "hidden"}`}>
              فروشگاه
            </span>
          </li>
          <li
            className="py-4 cursor-pointer flex items-end"
            onClick={() => getSelectedItem(3)}
          >
            <FaShoppingBasket size={30} />
            <span
              className={`mr-1  ${selectedItem === 3 ? "block" : "hidden"}`}
            >
              سبد خرید
            </span>
          </li>
          <li
            className="py-4 cursor-pointer flex items-end"
            onClick={() => getSelectedItem(4)}
          >
            <FaHeart size={30} />
            <span
              className={`mr-1 ${selectedItem === 4 ? "block" : "hidden"} `}
            >
              علاقه مندی ها
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNavigation;
