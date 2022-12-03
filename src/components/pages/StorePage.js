import { useEffect, useState } from "react";
import getAllGamesService from "../../services/getAllGamesService";
import Products from "../Products/Products";
import SideBar from "../SideBar/SideBar";
import { FaFilter } from "react-icons/fa";

const StorePage = () => {
  const [games, setGames] = useState([]);
  const [filterValues, setFilterValues] = useState({
    category: [],
    platform: [],
  });
  const [filteredGames, setFilteredGames] = useState([]);
  const [isShowFilters, setIsShowFilters] = useState(false);

  useEffect(() => {
    const getGames = async () => {
      try {
        const { data } = await getAllGamesService();
        setGames(data);
        setFilteredGames(data);
      } catch (error) {
        console.log(error);
      }
    };
    getGames();
  }, []);

  const changeHandler = (e) => {
    if (e.target.checked) {
      setFilterValues({
        ...filterValues,
        [e.target.name]: [...filterValues[e.target.name], e.target.value],
      });
    } else {
      setFilterValues({
        ...filterValues,
        [e.target.name]: filterValues[e.target.name].filter(
          (item) => item !== e.target.value
        ),
      });
    }
  };

  const applyFilterHandler = () => {
    const filterGames = games.filter((game) => {
      return (
        game.geners.some((gener) =>
          filterValues.category.includes(gener.toLowerCase())
        ) ||
        game.platforms.some((p) =>
          filterValues.platform.includes(p.name.toLowerCase())
        )
      );
    });
    if (filterGames.length) {
      setFilteredGames(filterGames);
    } else {
      setFilteredGames(games);
    }
    setIsShowFilters(false)
  };

  return (
    <div>
      <div className="mb-4 md:hidden">
        <div className="flex items-center justify-center glassMorphism w-2/5 p-2">
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
      </div>
      <div className="flex justify-between lg:px-20">
        <SideBar
          changeHandler={changeHandler}
          applyFilterHandler={applyFilterHandler}
          isShowFilters={isShowFilters}
          setIsShowFilters={setIsShowFilters}
        />
        <Products games={filteredGames} />
      </div>
    </div>
  );
};

export default StorePage;
