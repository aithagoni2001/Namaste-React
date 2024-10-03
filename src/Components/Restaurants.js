import { useState } from "react";
import useRestaurants from "../utils/useRestaurants";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const Restaurants = () => {
  const { resid } = useParams();
  // console.log(params);

  const [showIndex, setshowIndex]= useState(null)

 const resMenu = useRestaurants(resid);

  if (resMenu === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, city } =
  resMenu?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const Categories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    console.log(Categories);
    
  return (
    <div>
      <div className="Res-menu m-5 p-2 text-center">
        <h1 className="font-bold text-lg">{name}</h1>
      <p>
        {cuisines.join(", ")} -{costForTwoMessage}
      </p>
        <h5 className="font-semibold text-sm" >{city}</h5>

        {Categories.map((category,index)=>(
          <RestaurantCategory
          key ={category?.card?.card.title}
           data ={category?.card?.card}
           showitems ={index === showIndex? true: false}
           setshowIndex = {()=>setshowIndex(index)}
           />
        ))}

      </div>

    
    </div>
  );
};
export default Restaurants;
