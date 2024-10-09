import { useState } from "react";
import useRestaurants from "../utils/useRestaurants";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const Restaurants = () => {
  const { resid } = useParams();
  const [showIndex, setShowIndex] = useState(null); // State to track the expanded category

  const resMenu = useRestaurants(resid);

  // Show shimmer while loading data
  if (resMenu === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, city } =
    resMenu?.cards[2]?.card?.card?.info;

  const Categories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      <div data-testid ="resCard" className="Res-menu m-5 p-2 text-center">
        <h1 className="font-bold text-lg">{name}</h1>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <h5 className="font-semibold text-sm">{city}</h5>

        {/* Map through categories and render RestaurantCategory */}
        {Categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showitems={index === showIndex} // Show items if the index matches showIndex
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index) // Toggle index on click
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
