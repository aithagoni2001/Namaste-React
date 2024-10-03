<<<<<<< HEAD
import { useState } from "react";
import useRestaurants from "../utils/useRestaurants";
import RestaurantCategory from "./RestaurantCategory";
=======
import useRestaurants from "../utils/useRestaurants";
>>>>>>> b13f0bec07cd1ec2793178187dcfcec6abf5ac2f
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const Restaurants = () => {
  const { resid } = useParams();
  // console.log(params);

<<<<<<< HEAD
  const [showIndex, setshowIndex]= useState(null)

=======
>>>>>>> b13f0bec07cd1ec2793178187dcfcec6abf5ac2f
 const resMenu = useRestaurants(resid);

  if (resMenu === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, city } =
  resMenu?.cards[2]?.card?.card?.info;
  const { itemCards } =
<<<<<<< HEAD
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

    
=======
  resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card;
  return (
    <div className="Res-menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} -{costForTwoMessage}
      </p>
      <h5>{city}</h5>
      <h3>Menu</h3>
      <div className="main-menu">
        <ul className="menu-list">
          {itemCards.map((item) => (
            <li className="item-list" key={item.card.info.id}>
              <div className="left">
                <h3>{item.card.info.name}</h3>
                <h5>{item.card.info.category}</h5>
                <p>{item.card.info.description}</p>
                {" Rs:"}
                {item.card.info.price / 100}
                <p>{`${item.card.info.ratings.aggregatedRating.rating} (${item.card.info.ratings.aggregatedRating.ratingCount})`}</p>
              </div>
              <img
                className="menu-image"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
                alt="Not found"
              />
            </li>
          ))}
        </ul>
      </div>
>>>>>>> b13f0bec07cd1ec2793178187dcfcec6abf5ac2f
    </div>
  );
};
export default Restaurants;
