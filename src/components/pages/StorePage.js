import { useEffect, useState } from "react";
import getAllGamesService from "../../services/getAllGamesService";
import Categories from "../Categories/Categories";
import Platforms from "../Platforms/Platforms";
import Products from "../Products/Products";

const StorePage = () => {
  const [games, setGames] = useState([]);
  const [filterValues, setFilterValues] = useState({
    category: [],
    platform: [],
  });
  const [filteredGames, setFilteredGames] = useState([]);

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
  };

  return (
    <div className="flex justify-between px-20">
      <div className="w-[55%] glassMorphism px-6 py-7 max-h-[calc(100vh_-_140px)] overflow-y-auto sticky top-28 scrollbar">
        <Categories changeHandler={changeHandler} />
        <Platforms changeHandler={changeHandler} />
        <button
          className="w-full bg-orange text-black rounded-2xl py-2 font-bold"
          onClick={applyFilterHandler}
        >
          اعمال فیلتر ها
        </button>
      </div>
      <Products games={filteredGames} />
    </div>
  );
};

export default StorePage;
