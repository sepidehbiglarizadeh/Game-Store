import { FaShoppingBasket, FaHeart } from "react-icons/fa";
import { GiCrossedSlashes } from "react-icons/gi";

const DesktopNavigation = () => {
  return (
    <header className="hidden md:block">
      <nav className="flex justify-between items-center text-xl">
        <ul className="flex justify-between items-center">
          <li className="px-4 py-2">
            <GiCrossedSlashes size={50} className="fill-orange"/>
          </li>
          <li className="px-4 py-2">خانه</li>
          <li className="px-4 py-2">فروشگاه</li>
        </ul>
        <ul className="flex justify-between items-center">
          <li className="px-4 py-2">
            <FaShoppingBasket />
          </li>
          <li className="px-4 py-2">
            <FaHeart />
          </li>
          <li className="px-4 py-2">ورود/عضویت</li>
        </ul>
      </nav>
    </header>
  );
};

export default DesktopNavigation;
