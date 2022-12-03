import Categories from "../Categories/Categories";
import Platforms from "../Platforms/Platforms";
import { FaTimes } from "react-icons/fa";

const SideBar = ({
  changeHandler,
  applyFilterHandler,
  isShowFilters,
  setIsShowFilters,
}) => {
  return (
    <div
      className={` bg-black fixed z-20  -right-full  px-6 py-7  scrollbar md:block md:sticky md:top-28 md:ml-2 md:glassMorphism md:w-[240px] md:max-h-[calc(100vh_-_140px)] md:overflow-y-auto  ${
        isShowFilters
          ? " fixed -right-0 top-0 left-0 bottom-0 overflow-y-auto"
          : "hidden"
      }`}
    >
      <button
        className="md:hidden text-customWhite text-xl mb-4"
        onClick={() => setIsShowFilters((prevState) => !prevState)}
      >
        <FaTimes />
      </button>
      <Categories changeHandler={changeHandler} />
      <Platforms changeHandler={changeHandler} />
      <button
        className="w-full bg-orange text-black rounded-2xl py-2 font-bold"
        onClick={applyFilterHandler}
      >
        اعمال فیلتر ها
      </button>
    </div>
  );
};

export default SideBar;
