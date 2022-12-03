import { FaFilter, FaSortAmountDown, FaTimes } from "react-icons/fa";

const Sort = ({ setIsShowFilters, isShowSort, setIsShowSort }) => {
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

      <div
        className={`bg-black fixed z-20 -bottom-full p-4 border-t-2 rounded-t-3xl ${
          isShowSort ? " fixed right-0 left-0 -bottom-0 top-24" : ""
        }`}
      >
        <div className="flex items-center text-lg font-bold text-customWhite mb-6">
          <button className="ml-4" onClick={() => setIsShowSort(false)}>
            <FaTimes />
          </button>
          <div>مرتب سازی بر اساس</div>
        </div>
        <ul>
          <li className="pb-3 pt-3 border-b">
            <button className="w-full text-right">جدیدترین</button>
          </li>
          <li className="pb-3 pt-3 border-b">
            <button className="w-full text-right">ارزانترین</button>
          </li>
          <li className="pb-3 pt-3 border-b">
            <button className="w-full text-right">گرانترین</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sort;
