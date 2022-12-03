import { useEffect, useState } from "react";
import getAllGamesService from "../../services/getAllGamesService";
import Products from "../Products/Products";
import SideBar from "../SideBar/SideBar";
import Sort from "../Sort/Sort";

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
    <div>
      <div
        className={`bg-gray z-20 opacity-50 fixed right-0 left-0 top-0 bottom-0 ${
          isShowSort ? "" : "hidden"
        }`}
        onClick={() => setIsShowSort(false)}
      ></div>
      <Sort
        setIsShowFilters={setIsShowFilters}
        setIsShowSort={setIsShowSort}
        isShowSort={isShowSort}
      />
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
