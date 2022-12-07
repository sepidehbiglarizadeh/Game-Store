import { useCart, useCartActions } from "../../Providers/CartProvider";
import checkInCart from "../../utils/checkInCart";
import Sort from "../Sort/Sort";

const Products = ({
  games,
  setIsShowFilters,
  setIsShowSort,
  isShowSort,
  sortHandler,
}) => {
  
const {cart}=useCart();
const dispatch =useCartActions();

  const addProductHandler = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="flex flex-col w-full">
      <div>
        <Sort
          setIsShowFilters={setIsShowFilters}
          setIsShowSort={setIsShowSort}
          isShowSort={isShowSort}
          sortHandler={sortHandler}
        />
      </div>
      <div className=" grid gap-x-2 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2 md:p-0 sm:gap-x-4 md:gap-x-6 md:gap-y-10">
        {games.map((game) => (
          <div
            key={game.id}
            className="w-full md:max-w-[220px] p-4 glassMorphism h-80 flex flex-col justify-between"
          >
            <div className=" h-[50%] rounded-lg overflow-hidden">
              <img src={game.image} className="w-full h-full" alt={game.name} />
            </div>
            <h2 className="text-customWhite font-bold">{game.name}</h2>
            <div className="flex items-center">
              <button
                className="flex-1 bg-orange rounded-3xl text-black p-2 font-bold"
                onClick={() => addProductHandler(game)}
              >
                {checkInCart(cart,game) ? "در سبد شما" : "اضافه به سبد"}
              </button>
              <span className="text-orange font-bold text-lg mr-3">
                ${game.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
