import { useCart } from "../Providers/CartProvider";
import { FaPlus,FaTrashAlt } from "react-icons/fa";

const CartPage = () => {
    const {cart,total}=useCart();

    if(!cart.length){
        return(
            <h2 className="text-center">سبد خرید شما خالی است !</h2>
        )
    }

    return ( 
        <section className="mt-14 flex justify-center w-[90vw] max-w-6xl">
            <section className="flex flex-col glassMorphism rounded-lg flex-1 p-4">
                {cart.map((item)=>{
                    return(
                        <div className="mr-1 h-28 flex items-center justify-between border-b-2 border-b- pb-4 pt-4">
                            <div className="w-36 h-full">
                                <img className="w-full h-full" src={item.image} alt={item.name} />
                            </div>
                            <div>{item.name}</div>
                            <div>${item.price}</div>
                            <div className="border border-gray rounded-lg flex items-center justify-center text-orange">
                                <button className="text-2xl p-2">+</button>
                                <span className="ml-4 mr-4">{item.quantity}</span>
                                <button  className="p-2">{item.quantity <=1 ? <FaTrashAlt/>: <span className="text-2xl">-</span>}</button>
                            </div>
                        </div>
                    )
                })}
            </section>
        </section>
     );
}
 
export default CartPage;