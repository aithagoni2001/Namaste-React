import { useContext } from "react";
import { CDN_LINK } from "../utils/constants";
import UserContext from "./UserContext";

const Fooditems = (props) => {
  const { Resdata } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, areaName } = Resdata?.info;
  const {LoggedInUser} = useContext(UserContext);
  // console.log(LoggedInUser);
  
  return (
    <div className="fooditems m-3 p-2 w-[200px] border border-solid border-black bg-gray-100 hover:bg-gray-300">
      <img
        className="image w-[150px] h-[150px] p-2 mx-4 rounded-2xl"
        src={CDN_LINK + cloudinaryImageId}
        alt={name}
      />
      <h2 className="font-bold py-2 text-lg">{name}</h2>
      <p className="cuisine">{cuisines.join(", ")}</p>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <p>{areaName}</p>
      <h4 className="text-sm font-semibold">User: {LoggedInUser}</h4>
    </div>
  );
};

export const withPromotedlabel = (Fooditems) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-black text-white m-2 p-1 rounded-lg">Promoted</label>
        <Fooditems {...props} />
      </div>
    );
  };
};

export default Fooditems;
