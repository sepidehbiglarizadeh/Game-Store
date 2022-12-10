import Product from "../components/Product/Product";
import { useCart, useCartActions } from "../Providers/CartProvider";
import { useFav, useFavActions } from "../Providers/FavProvider";
import { toast } from "react-toastify";

const FavouritesPage = () => {
  const favProducts = useFav();
  const favDispatch = useFavActions();
  const {cart} = useCart();
  const cartDispatch = useCartActions();

  const addProductHandler = (product) => {
    cartDispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.name} به سبد خرید اضافه شد.`);
  };

  const addProductToFavHandler = (product) => {
    favDispatch({ type: "ADD_TO_FAV", payload: product });
  };

  if(favProducts.length<=0){
    return <p className="text-center">هیچ محصولی به لیست اضافه نشده است</p>
  }
  return (
    <div className=" grid gap-x-2 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 px-2 md:p-0 sm:gap-x-4 md:gap-x-6 md:gap-y-10 md:px-10">
      {favProducts.map((game) => (
        <Product
            key={game.id}
            fav={favProducts}
          cart={cart}
          game={game}
          addProductHandler={addProductHandler}
          addProductToFavHandler={addProductToFavHandler}
        />
      ))}
    </div>
  );
};

export default FavouritesPage;
