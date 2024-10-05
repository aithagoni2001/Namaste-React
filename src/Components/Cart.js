import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemsList";
import { clearcart } from "../utils/ReduxStore/CartSlice";

const Cart = () => {
  const cartitems = useSelector((store) => store.cart.items);

//   console.log(cartitems);

const dispatch = useDispatch();
const handleclearcart =()=>{
    dispatch(clearcart());
}

  return (
    <div className="m-3 p-3 text-center">
      <h1 className="text-xl font-bold">Cart</h1>

      <div className="w-9/12 m-auto">
        <button className="m-2 p-1 bg-red-600 text-white rounded-lg" onClick={handleclearcart}>
          Clear cart 
        </button>
        {cartitems.length === 0 && (<h1>Cart is empty!</h1>)}
        <ItemList items={cartitems} />
      </div>
    </div>
  );
};

export default Cart;
