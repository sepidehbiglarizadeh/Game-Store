import { useEffect, useState } from "react";
import getAllGamesService from "../../services/getAllGamesService";
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
    <div>
      <Products games={games}/>
    </div>
  );
};

export default StorePage;
