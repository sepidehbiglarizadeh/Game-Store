import { useContext, useReducer, createContext } from "react";

const FavContext = createContext();
const FavContextDispatcher = createContext();

const favProducts = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAV": {
      const updatedFav = [...favProducts];
      const updatedItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (updatedItemIndex < 0) {
        updatedFav.push(action.payload);
      } else {
        return state.filter((item) => item.id !== action.payload.id);
      }
      return [...state, updatedFav[0]];
    }
    default:
      return state;
  }
};

const FavProvider = ({ children }) => {
  const [fav, dispatch] = useReducer(reducer, favProducts);

  return (
    <FavContext.Provider value={fav}>
      <FavContextDispatcher.Provider value={dispatch}>
        {children}
      </FavContextDispatcher.Provider>
    </FavContext.Provider>
  );
};

export default FavProvider;

export const useFav = () => useContext(FavContext);
export const useFavActions = () => useContext(FavContextDispatcher);
