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
    <div className="flex flex-wrap gap-10 text-left">
      {games.map((game) => (
        <div
          key={game.id}
          className="w-full md:max-w-[250px] p-4 glassMorphism h-80 flex flex-col justify-between"
        >
          <div className=" h-[50%] rounded-lg overflow-hidden">
            <img src={game.image} className="w-full h-full" alt={game.name} />
          </div>
          <h2 className="text-customWhite font-bold">{game.name}</h2>
          <div className="flex items-center">
            <button className="flex-1 bg-orange rounded-3xl text-black p-2 font-bold">
              خرید
            </button>
            <span className="text-orange font-bold text-lg mr-3">
              ${game.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StorePage;
