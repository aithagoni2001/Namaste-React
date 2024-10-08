import { useDispatch } from "react-redux";
import { CDN_LINK } from "../utils/constants";
import { additems } from "../utils/ReduxStore/CartSlice";

const ItemList = ({ items }) => {
  // console.log(items);

  // dispatching the action
  const dispatch = useDispatch();
  const handleclick = (item) => {
    dispatch(additems(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          className="m-4 p-2 bg-gray-200 border-b-2 text-left flex justify-between"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <div className=" py-2">
              <span className="font-semibold">{item.card.info.name}</span>
              <span> -💰{item.card.info.price / 100}</span>
            </div>
            <div>
              <p className="text-xs">{item.card.info.description}</p>
              <p className="text-xs">{item.card.info.category}</p>
            </div>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className=" p-1 bg-white text-green-800 font-semibold rounded-lg"
                onClick={() => handleclick(item)}
              >
                Add+
              </button>
            </div>
            <img
              className="w-full"
              src={CDN_LINK + item.card.info.imageId}
              alt="Not found"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
