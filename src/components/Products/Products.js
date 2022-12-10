import { useCart, useCartActions } from "../../Providers/CartProvider";
import Sort from "../Sort/Sort";
import { toast } from "react-toastify";
import {  useFav, useFavActions } from "../../Providers/FavProvider";
import Product from "../Product/Product";

const Products = ({
  games,
  setIsShowFilters,
  setIsShowSort,
  isShowSort,
  sortHandler,
}) => {
  const { cart } = useCart();
  const dispatch = useCartActions();
  const fav=useFav();
  const favDispatch = useFavActions();

  const addProductHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.name} به سبد خرید اضافه شد.`);
  };

  const addProductToFavHandler = (product) => {
    favDispatch({ type: "ADD_TO_FAV", payload: product });
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
          <Product key={game.id} fav={fav} cart={cart} game={game} addProductHandler={addProductHandler} addProductToFavHandler={addProductToFavHandler} />
        ))}
      </div>
    </div>
  );
};

export default Products;
