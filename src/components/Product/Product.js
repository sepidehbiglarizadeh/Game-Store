import checkInCart from "../../utils/checkInCart";
import { FaRegHeart } from "react-icons/fa";

const Product = ({game,addProductToFavHandler,addProductHandler,cart}) => {
    return ( 
        <div
            className="w-full md:max-w-[220px] p-4 glassMorphism h-80 flex flex-col justify-between"
          >
            <div className=" h-[50%] rounded-lg overflow-hidden">
              <img src={game.image} className="w-full h-full" alt={game.name} />
            </div>
            <h2 className="text-customWhite font-bold">{game.name}</h2>
            <button
              className="text-lg"
              onClick={() => addProductToFavHandler(game)}
            >
              <FaRegHeart />
            </button>
            <div className="flex items-center">
              <button
                className="flex-1 bg-orange rounded-3xl text-black p-2 font-bold"
                onClick={() => addProductHandler(game)}
              >
                {checkInCart(cart, game) ? "در سبد شما" : "اضافه به سبد"}
              </button>
              <span className="text-orange font-bold text-lg mr-3">
                ${game.price}
              </span>
            </div>
          </div>
     );
}
 
export default Product;