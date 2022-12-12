import { GiCrossedSlashes } from "react-icons/gi";
import { FaUserAlt, FaChevronDown } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useAuth, useAuthActions } from "../../Providers/AuthProvider";
import { useState } from "react";
import Search from "../Search/Search";

const AppBar = () => {
  const auth = useAuth();
  const [isShow, setIsShow] = useState(false);
  const setAuth = useAuthActions();

  const logoutUser = () => {
    localStorage.removeItem("authState");
    setAuth(false);
    setIsShow(false);
  };

  return (
    <div className="flex md:hidden items-center justify-between mb-6 pb-8 relative">
      <ul>
        <Link to="/">
          <li className="flex items-center py-2">
            <GiCrossedSlashes size={50} className="fill-orange" />
            <span className="font-bold text-orange">گیم استور</span>
          </li>
        </Link>
      </ul>
      <ul className="flex items-center gap-x-4">
        <li>
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
      <Search />
    </div>
  );
};

export default AppBar;
