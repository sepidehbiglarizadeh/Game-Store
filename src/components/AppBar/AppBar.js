import { GiCrossedSlashes } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const AppBar = () => {
  return (
    <div className="flex md:hidden items-center justify-between mb-6">
      <ul>
        <li className="flex items-center py-2">
          <GiCrossedSlashes size={50} className="fill-orange" />
          <span className="font-bold text-orange">گیم استور</span>
        </li>
      </ul>
      <ul className="flex items-center gap-x-4">
        <li>
          <FaSearch />
        </li>
        <Link to="/login">
          <li>ورود/عضویت</li>
        </Link>
      </ul>
    </div>
  );
};

export default AppBar;
