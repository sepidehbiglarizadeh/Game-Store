import { GiCrossedSlashes } from "react-icons/gi";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";

const AppBar = () => {
  const auth = useAuth();

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
        <Link to={auth ? "/profile" : "/login"}>
          <li>{auth ? <FaUserAlt /> : "ورود/عضویت"}</li>
        </Link>
      </ul>
    </div>
  );
};

export default AppBar;
