import { useEffect, useState } from "react";
import getAllGamesService from "../../services/getAllGamesService";

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
    <div>This is game store</div>
  );
};

export default StorePage;
