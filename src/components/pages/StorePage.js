import { useEffect, useState } from "react";
import getAllGamesService from "../../services/getAllGamesService";
import Products from "../Products/Products";
import SideBar from "../SideBar/SideBar";

const StorePage = () => {
  const [games, setGames] = useState([]);
  const [filterValues, setFilterValues] = useState({
    category: [],
    platform: [],
  });
  const [filteredGames, setFilteredGames] = useState([]);
  const [isShowFilters, setIsShowFilters] = useState(false);
  const [isShowSort, setIsShowSort] = useState(false);

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
    setIsShowFilters(false);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div
        className={`bg-gray z-20 opacity-50 fixed right-0 left-0 top-0 bottom-0 ${
          isShowSort ? "" : "hidden"
        }`}
        onClick={() => setIsShowSort(false)}
      ></div>
      <div className="flex justify-between lg:px-10">
        <SideBar
          changeHandler={changeHandler}
          applyFilterHandler={applyFilterHandler}
          isShowFilters={isShowFilters}
          setIsShowFilters={setIsShowFilters}
        />
        <Products
          games={filteredGames}
          setIsShowFilters={setIsShowFilters}
          setIsShowSort={setIsShowSort}
          isShowSort={isShowSort}
        />
      </div>
    </div>
  );
};

export default StorePage;
