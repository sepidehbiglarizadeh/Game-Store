import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import getAllGamesService from "../../services/getAllGamesService";

const Search = () => {
  const [games, setGames] = useState([]);
  const [allGames, setAllGames] = useState([]);
  const [searchValue, setSearchValue] = useState("");

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

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
    if (searchValue === "") {
      setAllGames([]);
    } else {
      const filteredProducts = games.filter((game) =>
        game.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setAllGames(filteredProducts);
    }
  };

  return (
    <div className="bg-customWhite rounded-md px-3 absolute top-16 w-full md:relative md:top-0  md:flex-1 z-20 md:max-w-lg">
      <div className="flex items-center">
        <FaSearch />
        <input
          value={searchValue}
          type="search"
          placeholder="جستجو"
          className="outline-none border-none rounded-md w-full text-sm placeholder:text-sm py-2 px-3 bg-customWhite"
          onChange={changeHandler}
        />
      </div>
      {searchValue && (
        <div className="absolute bg-customWhite rounded-b-md left-0 right-0 p-3 top-8 border-t border-gray">
          <ul>
            {allGames.map((game) => (
              <li key={game.id} className="text-sm">
                <Link
                  to="/store"
                  state={{ id: game.id }}
                  onClick={() => setSearchValue("")}
                >
                  {game.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
