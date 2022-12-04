import { useState } from "react";
import { FaFilter, FaSortAmountDown, FaTimes } from "react-icons/fa";

const Sort = ({ setIsShowFilters, isShowSort, setIsShowSort ,sortHandler}) => {
  return (
    <>
      <div className="mb-4 md:hidden flex justify-between gap-x-4">
        <div className="flex items-center justify-center glassMorphism p-2 w-full">
          <span className="text-orange text-sm ml-1">
            <FaFilter />
          </span>
          <button
            className="text-customWhite"
            onClick={() => setIsShowFilters((prevState) => !prevState)}
          >
            فیلترها
          </button>
        </div>
        <div className="flex items-center justify-center glassMorphism p-2 w-full">
          <span className="text-orange text-sm ml-1">
            <FaSortAmountDown />
          </span>
          <button
            className="text-customWhite"
            onClick={() => setIsShowSort((prevState) => !prevState)}
          >
            مرتب سازی
          </button>
        </div>
      </div>
      <SortBox setIsShowSort={setIsShowSort} isShowSort={isShowSort} sortHandler={sortHandler}/>
    </>
  );
};

export default Sort;

const SortBox = ({ setIsShowSort, isShowSort ,sortHandler}) => {
  const [clickedItem, setClickedItem] = useState("");

  const clickHandler = (value) => {
    setClickedItem(value);
    sortHandler(value)
    setIsShowSort(false);
  };

  return (
    <div
      className={`bg-black fixed z-20 -bottom-full p-4 border-t-2 rounded-t-3xl md:py-2 md:px-4 md:relative md:flex md:items-center md:top-0 md:rounded-lg md:mb-6 md:glassMorphism md:border-t-0  ${
        isShowSort ? " fixed right-0 left-0 -bottom-0 top-24" : ""
      }`}
    >
      <div className="flex items-center text-lg font-bold text-customWhite mb-6 md:hidden">
        <button className="ml-4" onClick={() => setIsShowSort(false)}>
          <FaTimes />
        </button>
        <div>مرتب سازی بر اساس</div>
      </div>
      <ul className="md:flex md:items-center">
        <li className="hidden md:block text-orange bg-orange bg-opacity-5 rounded-lg md:p-4">
          <FaSortAmountDown />
        </li>
        <li className="pb-3 pt-3 border-b md:pb-0 md:pt-0 md:border-b-0 md:p-4">
          <button
            className="w-full text-right relative"
            onClick={() => clickHandler("newest")}
          >
            <span
              className={`w-2 h-2 bg-orange rounded-full absolute -top-1 left-0 hidden ${
                clickedItem === "newest" ? "md:block" : "hidden"
              }`}
            ></span>
            <span className={`${clickedItem === "newest" ? "text-customWhite" : ""}`}>
              جدیدترین
            </span>
          </button>
        </li>
        <li className="pb-3 pt-3 border-b md:pb-0 md:pt-0 md:border-b-0 md:p-4">
          <button
            className="w-full text-right relative"
            onClick={() => clickHandler("lowest")}
          >
            <span
              className={`w-2 h-2 bg-orange rounded-full absolute -top-1 left-0 hidden ${
                clickedItem === "lowest" ? "md:block" : "hidden"
              }`}
            ></span>
            <span className={`${clickedItem === "lowest" ? "text-customWhite" : ""}`}>
              ارزانترین
            </span>
          </button>
        </li>
        <li className="pb-3 pt-3 border-b md:pb-0 md:pt-0 md:border-b-0 md:p-4">
          <button
            className="w-full text-right relative"
            onClick={()=>clickHandler("highest")}
            id="highest"
          >
            <span
              className={`w-2 h-2 bg-orange rounded-full absolute -top-1 left-0 hidden ${
                clickedItem === "highest" ? "md:block" : "hidden"
              }`}
            ></span>
            <span className={`${clickedItem === "highest" ? "text-customWhite" : ""}`}>
              گرانترین
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};
