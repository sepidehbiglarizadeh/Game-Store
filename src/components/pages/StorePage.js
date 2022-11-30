import { useEffect } from "react";
import getAllGamesService from "../../services/getAllGamesService";

const StorePage = () => {

  useEffect(() => {
    const getGames = async () => {
      try {
        const { data } = await getAllGamesService();
      console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getGames();
  }, []);
  return <div>This is StorePage</div>;
};

export default StorePage;
