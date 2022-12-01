import { useEffect, useState } from "react";
import getAllGamesService from "../../services/getAllGamesService";
import Categories from "../Categories/Categories";
import Products from "../Products/Products";

const StorePage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      try {
        const { data } = await getAllGamesService();
        setGames(data);
      } catch (error) {
        console.log(error);
      }
    };
    getGames();
  }, []);

  console.log(games);

  return (
    <div className="flex justify-between px-20">
      <div className="w-[55%] glassMorphism px-6 py-7 max-h-[calc(100vh_-_140px)] overflow-y-auto sticky top-28">
        <Categories/>
      </div>
      <Products games={games} />
    </div>
  );
};

export default StorePage;
